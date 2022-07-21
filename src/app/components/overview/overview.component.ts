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
    {
      name: 'Password generator',
      icon: 'lock',
      link: '/password'
    },
    {
      name: 'Calculator',
      icon: 'calculator',
      link: ''
    },
    {
      name: 'Chat',
      icon: 'comment',
      link: '/chat'
    },
    {
      name: 'Image slider',
      icon: 'picture',
      link: '/image-slider'
    },
    {
      name: 'Random color background',
      icon: 'select',
      link: ''
    },
    {
      name: 'Loading progress',
      icon: 'loading-3-quarters',
      link: ''
    },
    {
      name: 'Money exchange calculator',
      icon: 'transaction',
      link: ''
    },
    {
      name: 'Contact form',
      icon: 'form',
      link: ''
    },
    {
      name: 'Drink more water',
      icon: 'fire',
      link: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
