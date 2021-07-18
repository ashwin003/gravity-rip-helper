export class Typed {
  element: any;
  options: any;
  textContent: string;
  strPos: number;
  typingComplete: boolean;
  timeout: any;

  constructor(element: any, options: any, textContent: string) {
    const defaults: any = {
      typeSpeed: 0,
      startDelay: 0,
      onComplete: () => {},
    };

    this.element = element;
    this.options = { ...defaults, ...options };
    this.strPos = 0;
    this.typingComplete = false;
    this.textContent = textContent;
    this.element.textContent = '';
  }

  public begin() {
    if (this.typingComplete) {
      return this.restart();
    }

    this.timeout = setTimeout(() => {
      this.typewrite();
    }, this.options.startDelay);
  }

  private typewrite() {
    const humanize = this.humanizer(this.options.typeSpeed);

    this.timeout = setTimeout(() => {
      if (this.strPos === this.textContent.length) {
        this.doneTyping();
      } else {
        this.keepTyping();
      }
    }, humanize);
  }

  private typewritereverse() {
    const humanize = this.humanizer(this.options.typeSpeed);

    this.timeout = setTimeout(() => {
      if (this.strPos === 0) {
        this.complete();
      } else {
        this.reverseTyping();
      }
    }, humanize);
  }

  private keepTyping() {
    this.strPos += 1;
    const nextString = this.textContent.substr(0, this.strPos);
    this.replaceText(nextString);
    this.typewrite();
  }

  private reverseTyping() {
    this.strPos -= 1;
    const nextString = this.textContent.substr(0, this.strPos);
    this.replaceText(nextString);
    this.typewritereverse();
  }

  private doneTyping() {
    this.timeout = setTimeout(() => {
      this.typewritereverse();
    }, this.options.startDelay);
  }

  private complete() {
    this.typingComplete = true;
    this.options.onComplete();
  }

  private restart() {
    if (!this.typingComplete) {
      return;
    }

    clearTimeout(this.timeout);
    this.replaceText('');

    this.strPos = 0;
    this.typingComplete = false;
    this.begin();
  }

  private replaceText(str: string) {
    this.element.textContent = str;
  }

  private humanizer(speed: number) {
    return Math.round((Math.random() * speed) / 2) + speed;
  }
}
