import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-racer',
  templateUrl: './racer.component.html',
  styleUrls: ['./racer.component.scss']
})
export class RacerComponent implements OnInit {

  @Input() position: number = 0;

  @Input() name: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
