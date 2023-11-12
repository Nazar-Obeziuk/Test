import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
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
