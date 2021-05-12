import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Racer } from '../models/racer';
import { MatDialog } from '@angular/material/dialog';
import { EditRacerComponent } from '../edit-racer/edit-racer.component';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  racers: Racer[] = [...Array(20).keys()].map(this.getRacer);

  constructor(public dialog: MatDialog) { }

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
    return this.racers.findIndex(v => v.id === element.id) + 1;
  }

  public drop(event: CdkDragDrop<Racer[]>) {
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

  public editTriggered(racer: Racer) {
    const dialogRef = this.dialog.open(EditRacerComponent,{
      data: racer,
      id: 'edit-racer',
      minHeight: '55vh',
      maxHeight: '95vh',
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const index = this.indexOf(result) - 1;
        this.racers[index] = result;
      }
    });
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

  private getRacer(index: number): Racer {
    const config: Config = {
      dictionaries: [names]
    };

    return {
      id: index,
      name: uniqueNamesGenerator(config),
      avatar: ''
    };
  }

}
