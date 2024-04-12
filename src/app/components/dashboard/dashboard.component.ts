import { Component, OnInit } from '@angular/core';
import User from 'src/app/interfaces/usuario.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users : User[];

  constructor(private userService: UsersService) {
    this.users = [{
      code: 0,
      name: '',
      points: 0,
    }]
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

}
