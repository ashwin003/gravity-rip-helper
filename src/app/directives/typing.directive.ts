import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Typed } from '../models/typed';

@Directive({
  selector: '[appTyping]',
})
export class TypingDirective implements OnInit, AfterViewInit, OnChanges {
  typed: Typed;

  @Input('typeSpeed') typeSpeed: number = 0;
  @Input('startDelay') startDelay: number = 0;
  @Input('text') text: any = '';
  @Output('complete') complete: EventEmitter<null> = new EventEmitter();

  typingLock: boolean = false;

  contentObservable: Observable<string>;
  contentSubscription: Subscription;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    if (!this.text) return;

    this.createTyped();
  }

  ngAfterViewInit(): void {
    if (this.typed) return;

    if (!this.text) {
      this.contentObservable = new Observable((ob) => {
        if (this.text) {
          ob.next(this.text);
          ob.complete();
        }
      });

      this.contentSubscription = this.contentObservable.subscribe((content) => {
        this.createTyped();
        this.contentSubscription.unsubscribe();
      });

      return;
    }

    this.createTyped();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('text' in changes && this.typed) {
      if (this.typingLock) return;

      this.typed.textContent = this.text;
      this.typed.begin();
      this.typingLock = true;
    }
  }

  private createTyped() {
    this.typed = new Typed(
      this.elRef.nativeElement,
      {
        typeSpeed: this.typeSpeed,
        startDelay: this.startDelay,
        onComplete: () => {
          this.complete.emit(null);
          this.typingLock = false;
        },
      },
      this.text
    );

    this.typed.begin();
    this.typingLock = true;
  }
}
