import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-two',
  templateUrl: './choose-two.component.html',
  styleUrls: ['./choose-two.component.scss']
})
export class ChooseTwoComponent implements OnInit {

  states = [
    {
      key: 'cheap',
      value: false
    },
    {
      key: 'good',
      value: false
    },
    {
      key: 'fast',
      value: false
    },
  ];

  areTrue = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch(current: any) {
    current.value ? this.areTrue -= 1 : this.areTrue += 1;

    if (this.areTrue == 3) {
      this.areTrue -= 1;

      let allStates = [...this.states];
      let i = allStates.indexOf(current);
      allStates.splice(i, 1);

      let randNumber = Math.floor(Math.random() * 2);

      let changei = this.states.indexOf(allStates[randNumber]);
      this.states[changei].value = false;
    }
  }

}
