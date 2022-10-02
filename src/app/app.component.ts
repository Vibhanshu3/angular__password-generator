import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick() {
    this.password = 'my password';
    console.log('Button was click');

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()'

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPass = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.floor(Math.random() * validChars.length));
      generatedPass += validChars[index];

    }
    this.password = generatedPass;

  }

  //---OR---
  // getPassword() {
  //   return this.password;
  // }

  onUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(input: HTMLInputElement) {
    const value = input.value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
