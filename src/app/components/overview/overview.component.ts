import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  itemList = [
    {
      name: 'Timer / Countdown',
      icon: 'field-time',
      link: '/countdown'
    },
    {
      name: 'Cheap, good, fast',
      icon: 'control',
      link: '/choose-two'
    },
    {
      name: 'Cryptography',
      icon: 'container',
      link: '/crypto'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
