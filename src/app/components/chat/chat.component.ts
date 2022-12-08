import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
declare const output: any;

interface Message {
  text: string,
  isChatbot: boolean
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  messages: Message[] = [];

  // messages: string[] = [
  //   'Nachricht nummero eins',
  //   'Das ist eine andere Nachricht mit sehr viel mehr Text',
  //   'Hier eine kurze!'
  // ];
  newMessage = '';

  constructor() { }

  ngOnInit(): void {

    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.newMessage !== '') {
      let currentMessage: Message = {
        text: this.newMessage,
        isChatbot: false
      };
      this.messages.push(currentMessage);
      this.getAnswer();
      this.newMessage = '';
    }
  }

  private getAnswer() {
    const botAnswer = output(this.newMessage);
    let answerMessage: Message = {
      text: botAnswer,
      isChatbot: true
    };
    this.messages.push(answerMessage);
  }

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
