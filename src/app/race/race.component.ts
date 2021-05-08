import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  racers = [
    'Domninus',
    'Nicole',
    'Pryce',
    'Albinus',
    'Ritva',

    'Mercurius',
    'Mina',
    'Alinafe',
    'Fatin',
    'Esra',

    'Fabiana Cai',
    'Mitzi',
    'Ignat',
    'Val Emílie',
    'Sitti Sofie',
    
    'Dieuwer',
    'Guðbrandr',
    'Kari Agafya',
    'Barry',
    'Shirin Wiktoria',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public get first_col() {
    return this.racers.slice(0, 5);
  }

  public get second_col() {
    let sc = this.racers.slice(5, 10);
    sc.reverse();

    return sc;
  }

  public get third_col() {
    return this.racers.slice(10, 15);
  }

  public get fourth_col() {
    let fc = this.racers.slice(15, 20);
    fc.reverse();

    return fc;
  }

  public indexOf(element: any): number {
    return this.racers.findIndex(v => v === element) + 1;
  }

  public drop(event: CdkDragDrop<string[]>) {
    const previousContainerId = this.getIndexFromId(event.previousContainer.id);
    const containerId = this.getIndexFromId(event.container.id);

    const { previousIndex, currentIndex } = event;

    let previousIndexFull = this.calculateIndex(
      previousContainerId,
      previousIndex
    );
    let currentIndexFull = this.calculateIndex(containerId, currentIndex);

    moveItemInArray(this.racers, previousIndexFull, currentIndexFull);
  }

  private getIndexFromId(id: String): number {
    return parseInt(id.replace('cdk-drop-list-', ''));
  }

  private calculateIndex(containerId: number, index: number): number {
    const factor = 5;

    return containerId % 2 == 0
      ? containerId * factor + index
      : containerId * factor + factor - index - 1;
  }

}
