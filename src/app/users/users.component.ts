import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
}

export interface User{
  "id": number;
  "name": string;
  "username": string;
  "email": string;
}