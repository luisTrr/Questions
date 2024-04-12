import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import User from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users: User[] = [];
  userId = 'your_user_id';
  codigo: number = 0;
  codeInput : number = 0;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users.filter(user => user.code === this.codeInput);
    });
  }

}
