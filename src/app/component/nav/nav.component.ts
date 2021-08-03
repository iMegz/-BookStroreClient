import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLogedIn: Boolean = this.server.isLogedIn;

  logout = () => {
    localStorage.removeItem('token');
    this.server.refreshStatus();
  };
  constructor(private server: UsersService) {}

  ngOnInit() {}
}
