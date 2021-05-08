import { Component, Input, OnInit } from '@angular/core';
import { Racer } from '../models/racer';

@Component({
  selector: 'app-racer',
  templateUrl: './racer.component.html',
  styleUrls: ['./racer.component.scss']
})
export class RacerComponent implements OnInit {

  @Input() position: number = 0;

  @Input() racer: Racer = { name: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
