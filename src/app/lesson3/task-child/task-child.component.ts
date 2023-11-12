import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-task-child',
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.scss']
})
export class TaskChildComponent {

  @Input() taskArrayFromParent!: { taskName: string, taskCheck: boolean }[];

  public editAreaInput!: string;
  public isEditActive: boolean = false;
  public editIndex!: number;

  isCheckboxChecked(taskIndex: number): void {
    this.taskArrayFromParent[taskIndex].taskCheck = !this.taskArrayFromParent[taskIndex].taskCheck;
  }

  editTask(taskIndex: number): void {
    this.editAreaInput = this.taskArrayFromParent[taskIndex].taskName;
    this.editIndex = taskIndex;

    this.isEditActive = !this.isEditActive;
  }

  removeTask(taskIndex: number): void {
    this.taskArrayFromParent.splice(taskIndex, 1);
  }

  saveChanges(): void {
    this.taskArrayFromParent[this.editIndex].taskName = this.editAreaInput;

    this.editAreaInput = '';

    this.isEditActive = false;
  }
  
}