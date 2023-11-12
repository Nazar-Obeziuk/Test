import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public words: string = '';

  public inputValue!: string;

  getValue(): void {
    this.words += this.inputValue + ' ';
    console.log(this.words);
    this.inputValue = '';
  }

}
