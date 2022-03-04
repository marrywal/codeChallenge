import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  timerInterval: number;
  timerInput: any = 0;
  timerCounter: number = 0;

  countdownInterval: number;
  countdownInput: string;
  countdownLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  public startTimer() {

    if (this.timerInput === 0) return;

    this.timerCounter = this.timerInput;
    clearInterval(this.timerInterval);

    this.timerInterval = window.setInterval(() => {
      this.timerCounter = this.timerCounter - 1;
      if (this.timerCounter === 0) clearInterval(this.timerInterval);
    }, 1000);
  }

  public stopTimer() {
    clearInterval(this.timerInterval);
    this.timerCounter = 0;
  }


  public startCountdown() {
    
    if (this.countdownInput === undefined) return;

    let end = new Date(this.countdownInput);

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;

    clearInterval(this.countdownInterval);

    this.countdownInterval = window.setInterval(() => {
      let now = new Date();
      let distance = end.getTime() - now.getTime();

      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      let seconds = Math.floor((distance % _minute) / _second);
  
      this.countdownLeft = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    }, 1000);
  }

  public stopCountdown() {
    clearInterval(this.countdownInterval);
    this.countdownLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

}
