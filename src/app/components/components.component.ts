import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})

export class ComponentsComponent {

  inputValue: string | number = '';

  handleClick() {
    console.log(this.inputValue);
    this.inputValue = '';
  }

}
