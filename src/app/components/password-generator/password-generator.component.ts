import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  // TODO: assert that all checked char exists

  pwLength = 8;
  useUppercase = true;
  useLowerCase = true;
  useNumbers = false;
  useSpecialChar = false;
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  specialChar = '%$!?&#'
  newPassword = '';

  isCopied = false;

  constructor() { }

  ngOnInit(): void {
  }

  generatePassword() {
    this.newPassword = '';
    let usedChars = '';
    usedChars += this.useUppercase ? this.alphabet.toUpperCase() : '';
    usedChars += this.useLowerCase ? this.alphabet : '';
    usedChars += this.useNumbers ? this.numbers : '';
    usedChars += this.useSpecialChar ? this.specialChar : '';

    for (let i = 0; i < this.pwLength; i++) {
      let randomCharIndex = Math.floor(Math.random() * usedChars.length);
      this.newPassword += usedChars[randomCharIndex];
    }
  }

  addCheckIcon() {
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2500);
  }

}
