import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/UsersModel';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css'] // fixed typo
})
export class Users implements OnInit {
  public userList: User[] = [];

  public newUser: Partial<User> = {
    name: '',
    email: '',
    password: '',
    role: 'Student',
    status: 1
  };

  public registrationSuccess: boolean = false;

  constructor() {}

  ngOnInit() {
    this.loadTableValues();
  }

  loadTableValues() {
    // Mock data
    this.userList = [
      { id: 1, name: 'Test 1', email: 'test1@gmail.com', status: 1, address: 'Dulag' },
      { id: 2, name: 'Test 2', email: 'test2@gmail.com', status: 1, address: 'Dulag' }
    ];
  }

  registerUser() {
    if (this.newUser.email && this.newUser.name) {
      const nextId = this.userList.length ? Math.max(...this.userList.map(u => u.id)) + 1 : 1;

      this.userList.push({
        id: nextId,
        name: this.newUser.name!,
        email: this.newUser.email!,
        password: this.newUser.password,
        role: this.newUser.role as 'Student' | 'Admin',
        status: 1,
        address: this.newUser.address || ''
      });

      this.registrationSuccess = true;

      // Clear form
      this.newUser = { name: '', email: '', password: '', role: 'Student', status: 1 };
    }
  }
}
