import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  inputValue: string = '';
  textareaValue: string = '';
  isButtonDisabled: boolean = true;
  array: string[] = ['java', 'tottenham'];
  
  @ViewChild('infoInput') infoInput!: ElementRef;
  @ViewChild('textareaItem') textareaItem!: ElementRef;

  constructor(private renderer: Renderer2) {}

  checkInput() {
    this.isButtonDisabled = this.inputValue.trim() === '';
  }

  showText() {
    if (this.inputValue.trim() === '') {
      this.renderer.setAttribute(this.infoInput.nativeElement, 'placeholder', 'Please write a word!');
      this.renderer.addClass(this.infoInput.nativeElement, 'border__red');
    } else {
      this.array.push(this.inputValue);
      this.inputValue = '';
      this.renderer.setAttribute(this.infoInput.nativeElement, 'placeholder', 'Word here');
      this.renderer.removeClass(this.infoInput.nativeElement, 'border__red');
    }
  }

  resetText() {
    this.array = [];
  }

  checkTextarea() {
    if (this.textareaValue.trim() === '') {
      this.renderer.setAttribute(this.textareaItem.nativeElement, 'placeholder', 'Please write a words!');
      this.renderer.addClass(this.textareaItem.nativeElement, 'border__red');
      return 
    } 

    const lowerCaseBadWords = this.array.map(word => word.toLowerCase());

    const inputWords = this.textareaValue.split(', ');
    const censoredWords = inputWords.map(word => {
      if (lowerCaseBadWords.includes(word.toLowerCase())) {
          const stars = '*'.repeat(word.length);
          return stars;
      }
      return word;
    });

    const censoredText = censoredWords.join(' ');
    this.textareaValue = censoredText;

    this.renderer.setAttribute(this.textareaItem.nativeElement, 'placeholder', 'Text here');
    this.renderer.removeClass(this.textareaItem.nativeElement, 'border__red');
  }
}