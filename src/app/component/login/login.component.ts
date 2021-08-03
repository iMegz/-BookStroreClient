import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usernameOrEmail = new FormControl();
  password = new FormControl();

  login = () => {
    const data = {
      usernameOrEmail: this.usernameOrEmail.value,
      password: this.password.value,
    };
    this.server?.login(data).subscribe((token) => {
      localStorage.setItem('token', token.toString());
    });
    this.server.refreshStatus();
    this.router.navigate(['/']);
  };
  getUser = () => {
    this.server?.getUser();
  };

  constructor(private server: UsersService, private router: Router) {}

  ngOnInit(): void {}
}
