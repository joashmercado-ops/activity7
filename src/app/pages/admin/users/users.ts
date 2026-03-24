import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/UsersModel';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class Users implements OnInit {

  userList: User[] = [];
  success = false;
  registrationError = false;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Student', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
    this.loadTableValues();
  }

  // getters
  get name() { return this.userForm.get('name')!; }
  get email() { return this.userForm.get('email')!; }
  get password() { return this.userForm.get('password')!; }
  get role() { return this.userForm.get('role')!; }
  get address() { return this.userForm.get('address')!; }

  loadTableValues() {
    this.userList = [
      { id: 1, name: 'Test 1', email: 'test1@gmail.com', password: '123456', role: 'Student', status: 1, address: 'Dulag' },
      { id: 2, name: 'Test 2', email: 'test2@gmail.com', password: '123456', role: 'Student', status: 1, address: 'Dulag' }
    ];
  }

  registerUser() {
    this.success = false;
    this.registrationError = false;

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.registrationError = true;
      return;
    }

    const user = this.userForm.value;

    this.userList.push({
      id: this.userList.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      status: 1,
      address: user.address
    });

    this.success = true;
    this.userForm.reset({ role: 'Student' });
  }

}
