import { Component } from '@angular/core';
import { Rule } from '../models/rule';
import { SpecialRoll } from '../models/specialRoll';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  d6 = '<span class="d6" title="D6"></span>';
  weight = 'Weight'.toUpperCase();
  acceleration = 'Acceleration'.toUpperCase();

  helicam_rules: Rule[] = [
    {
      move: 'Advance',
      rolls: {
        'Racer':  this.d6 + ' + ' + this.acceleration,
        'Pushback (GM)': this.d6
      },
      outcome: {
        success: 'Number of places the racer can advance',
        failure: 'Fails if pushback roll is higher than advance roll'
      }
    },

    {
      move: 'Hold',
      rolls: {
        'Racer': this.d6 + ' + ' + this.weight + '/' + this.acceleration,
        'Pushback (GM)': this.d6
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
        'Racer': this.d6 + ' + ' + this.acceleration,
        'Opponent': this.d6 + ' + ' + this.weight
      },
      outcome: {
        success: '+1 position',
        failure: 'Overtake fails, and the opponent may attempt a free slam'
      }
    },

    {
      move: 'Slam',
      rolls: {
        'Racer': this.d6 + ' + ' + this.weight,
        'Opponent': this.d6 + ' + ' + this.weight
      },
      outcome: {
        success: 'Opponent takes 2 integrity damage, and 1D6 additional damage, or moves down one position',
        failure: 'Racer takes 2 integrity damage'
      }
    },

    {
      move: 'Block',
      rolls: {
        'Racer': this.d6 + ' + ' + this.weight,
        'Opponent (Overtake)':  this.d6 + ' + ' + this.acceleration,
        'Opponent (Slam)': this.d6 + ' + ' + this.weight
      },
      outcome: {
        success: 'Against overtake: Attempt a free slam',
        failure: 'Against overtake: move down a position'
      }
    },
  ];

  special_rolls: SpecialRoll[] = [
    {
      title: 'Overclock',
      description: 'Must be decided before the player rolls',
      content: [
        'Unlocks on the second lap.',
        'Sacrifice integrity points to add additional points to the roll.'
      ]
    },
    {
      title: 'Illegal Mods',
      description: 'Must be rolled before using the mod every time',
      content: [
        'There is no roll to find out if the mod is effective or not. It’s always effective.',
        'You just roll to discover the consequences of using it.',
        'Overclocking can be applied'
      ]
    }
  ];
  
  constructor() { }

}
