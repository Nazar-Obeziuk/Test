import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component {

  public taskArray = [
    { taskName: 'HTML5', taskCheck: false },
    { taskName: 'CSS3', taskCheck: false },
    { taskName: 'SCSS', taskCheck: false },
    { taskName: 'JavaScript', taskCheck: false },
    { taskName: 'Angular', taskCheck: false },
    { taskName: 'jQuery', taskCheck: false },
  ];

  public inputValue!: string;
  public taskObject!: { taskName: string, taskCheck: boolean };

  getInputValue(): void {
    this.taskObject = {
      taskName: this.inputValue,
      taskCheck: false
    }

    this.taskArray.push(this.taskObject);

    this.inputValue = '';
  }

}