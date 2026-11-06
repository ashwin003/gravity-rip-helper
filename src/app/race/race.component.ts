import { Component, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Racer } from '../models/racer';
import { MatDialog } from '@angular/material/dialog';
import { EditRacerComponent } from '../edit-racer/edit-racer.component';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import { MatCard } from '@angular/material/card';
import { RacerComponent } from '../racer/racer.component';

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCard, CdkDropList, CdkDrag, RacerComponent]
})
export class RaceComponent {
  dialog = inject(MatDialog);

  racers: Racer[] = [...Array(20).keys()].map(this.getRacer);

  deathCount = 0;

  private readonly cdr = inject(ChangeDetectorRef);

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

  public handleDoubleClick(racer: Racer) {
    if(racer.isAlive) {
      const currentIndex = this.indexOf(racer) - 1;

      // Replace rather than mutate, so the OnPush RacerComponent sees a new input.
      this.racers[currentIndex] = { ...racer, isAlive: false, avatar: 'assets/cry.png' };

      this.deathCount++;

      const newIndex = this.racers.length - this.deathCount;

      moveItemInArray(this.racers, currentIndex, newIndex);
    }
  }

  public indexOf(element: any): number {
    return this.racers.findIndex((v) => v.id === element.id) + 1;
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
    const instance = this;
    const dialogRef = this.dialog.open(EditRacerComponent, {
      data: {
        // Edit a copy; the result replaces the original only when confirmed.
        racer: { ...racer },
        position: instance.indexOf(racer),
      },
      id: 'edit-racer',
      maxHeight: '95vh',
      width: '85vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.indexOf(result) - 1;
        this.racers[index] = result;
        this.cdr.markForCheck();
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
      dictionaries: [names],
    };

    return {
      id: index,
      name: uniqueNamesGenerator(config),
      avatar: '',
      isAlive: true
    };
  }
}
