import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username = new FormControl();
  email = new FormControl();
  password = new FormControl();
  server: ServerService;
  signUp = () => {
    const data = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
    };
    this.server.signUp(data).subscribe((data) => {
      console.log(data);
    });
  };

  constructor(server: ServerService) {
    this.server = server;
  }

  ngOnInit(): void {}
}
