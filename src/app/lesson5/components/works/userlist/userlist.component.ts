import { Component } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {
  public userList: User[] = [];
  public userData: User = { login: '', password: '', email: '' };
  public isButtonClicked = false;
  public editStatus = false;

  private editIndex!: number;

  private readonly regexPatterns = {
    login: /^[a-zA-Z]{4,16}$/,
    password: /^[a-zA-Z0-9_\-\.]{4,16}$/,
    email: /^[a-zA-Z0-9_\-\.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/,
  };

  loginInputRegExp(value: string, field: 'login' | 'password' | 'email'): boolean {
    return this.regexPatterns[field].test(value);
  }

  addUser(): void {
    if (!this.loginInputRegExp(this.userData.login, 'login') ||  !this.loginInputRegExp(this.userData.password, 'password') || !this.loginInputRegExp(this.userData.email, 'email')) {
      alert('Please fill in all fields with valid data');
      return;
    }
    
    this.userList.push(this.userData);
    this.clearFields();

    this.isButtonClicked = true;
  }

  editUser(userIndex: number): void {
    const userToEdit = this.userList[userIndex];
    this.editIndex = userIndex;

   this.userData = {...userToEdit};

    this.editStatus = true;
  }

  deleteUser(userIndex: number): void {
    this.userList.splice(userIndex, 1);
  }

  saveEditUser(): void {
    this.userList[this.editIndex] = this.userData;

    this.clearFields();

    this.editStatus = false;
  }

  clearFields(): void {
   this.userData =  { login: '', password: '', email: '' };
  }
}

interface User {
  login: string;
  password: string;
  email: string;
}