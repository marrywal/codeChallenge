import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-cryptography',
  templateUrl: './cryptography.component.html',
  styleUrls: ['./cryptography.component.scss']
})
export class CryptographyComponent implements OnInit {

  alphabet = 'abcdefghijklmnop qrstuvwxyzäöü';
  textToEncode = '';
  encodedText = '';
  textToDedode = ''
  decodedText = '';

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
  }

  createMessage(): void {
      this.message.create('success', 'Copied to clipboard!');
  }

  decodeText() {
    this.decodedText = '';
    for (const c of this.textToDedode) {
      let i = this.alphabet.indexOf(c);
      let newLetter = this.alphabet[i - 3];

      if (newLetter === undefined) {
        switch (c) {
          case 'a':
            newLetter = 'a';
            break;
          case 'b':
            newLetter = 'ö';
            break;
          case 'c':
            newLetter = 'ü';
            break;
        
          default:
            break;
        }
      }
      this.decodedText += newLetter;
    }
  }

  encodeText() {
    this.encodedText = '';
    for (const c of this.textToEncode) {
      let i = this.alphabet.indexOf(c);
      let newLetter = this.alphabet[i + 3];

      if (newLetter === undefined) {
        switch (c) {
          case 'ä':
            newLetter = 'a';
            break;
          case 'ö':
            newLetter = 'b';
            break;
          case 'ü':
            newLetter = 'c';
            break;
        
          default:
            break;
        }
      }
      this.encodedText += newLetter;
    }
  }

}
