import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String;
  password : String;

  constructor( private AuthService:AuthService, private Router:Router) { }

  ngOnInit() {
  }

  onLoginSubmit(){

    const user = {

      username : this.username,
      password : this.password

    }

    this.AuthService.authenticateUser(user).subscribe(data=>{
      //console.log(data);
      if(data.success){
        //localStorage.setItem('token_id', '123');
        this.AuthService.storeUserData(data.token,data.user);
        this.Router.navigate(['dashboard']); 
      }else{
        this.Router.navigate(['login']);
      }
    }

    )
  }
}
