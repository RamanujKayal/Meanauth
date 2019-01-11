import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private AuthService:AuthService, private Router:Router ) { }

  ngOnInit() {
  }

  logoutUser(){
    this.AuthService.logout();
    this.Router.navigate(['login']);
  }

  loggedIn(){
    this.AuthService.logged();
  }
  

}
