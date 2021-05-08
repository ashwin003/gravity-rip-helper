import { Component, OnInit } from '@angular/core';
import { Rule } from '../models/rule';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  helicam_rules: Rule[] = [
    {
      move: 'Advance',
      rolls: {
        'Racer': 'D6 + acceleration',
        'Pushback (GM)': 'D6'
      },
      outcome: {
        success: 'Number of places the racer can advance',
        failure: 'Fails if pushback roll is higher than advance roll'
      }
    },

    {
      move: 'Hold',
      rolls: {
        'Racer': 'D6 + weight/acceleration',
        'Pushback (GM)': 'D6'
      },
      outcome: {
        success: 'Unless allowed, no racer can pass',
        failure: 'Racers may get past'
      }
    },

    {
      move: 'Retreat',
      rolls: {
        'Racer': 'No need to roll',
        'Pushback (GM)': 'No need to roll'
      },
      outcome: {
        success: 'Player can retreat any number of places',
        failure: ''
      }
    }
  ];

  maneuver_rules: Rule[] = [
    {
      move: 'Overtake',
      rolls: {
        'Racer': 'D6 + acceleration',
        'Opponent': 'D6 + weight'
      },
      outcome: {
        success: '+1 position',
        failure: 'Overtake fails, and the opponent may attempt a free slam'
      }
    },

    {
      move: 'Slam',
      rolls: {
        'Racer': 'D6 + weight',
        'Opponent': 'D6 + weight'
      },
      outcome: {
        success: 'Opponent takes 2 integrity damage, and 1D6 additional damage, or moves down one position',
        failure: 'Racer takes 2 integrity damage'
      }
    },

    {
      move: 'Block',
      rolls: {
        'Racer': 'D6 + weight',
        'Opponent (Overtake)': 'D6 + acceleration',
        'Opponent (Slam)': 'D6 + weight'
      },
      outcome: {
        success: 'Against overtake: Attempt a free slam',
        failure: 'Against overtake: move down a position'
      }
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
