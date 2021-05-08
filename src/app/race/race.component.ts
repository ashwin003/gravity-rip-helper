import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Racer } from '../models/racer';
import { MatDialog } from '@angular/material/dialog';
import { EditRacerComponent } from '../edit-racer/edit-racer.component';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  racers: Racer[] = [
    { id:1, name: 'Domninus', avatar: '' },
    { id:2, name: 'Nicole', avatar: '' },
    { id:3, name: 'Pryce', avatar: '' },
    { id:4, name: 'Albinus', avatar: '' },
    { id:5, name: 'Ritva', avatar: '' },

    { id:6, name: 'Mercurius', avatar: '' },
    { id:7, name: 'Mina', avatar: '' },
    { id:8, name: 'Alinafe', avatar: '' },
    { id:9, name: 'Fatin', avatar: '' },
    { id:10, name: 'Esra', avatar: '' },

    { id:11, name: 'Fabiana Cai', avatar: '' },
    { id:12, name: 'Mitzi', avatar: '' },
    { id:13, name: 'Ignat', avatar: '' },
    { id:14, name: 'Val Emílie', avatar: '' },
    { id:15, name: 'Sitti Sofie', avatar: '' },
    
    { id:16, name: 'Dieuwer', avatar: '' },
    { id:17, name: 'Guðbrandr', avatar: '' },
    { id:18, name: 'Kari Agafya', avatar: '' },
    { id:19, name: 'Barry', avatar: '' },
    { id:20, name: 'Shirin Wiktoria', avatar: '' },
  ];

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
      height: '80vh',
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      const index = this.indexOf(result) - 1;
      this.racers[index] = result;
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

}
