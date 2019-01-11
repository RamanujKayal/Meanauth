import { Component, OnInit } from '@angular/core';
//import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name : String;
  username : String;
  email : String;
  password : String;

constructor( 
  /*private validateService:ValidateService*/
  private AuthService:AuthService,
  private Router:Router 
) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    const user = {
      name : this.name,
      username : this.username,
      password : this.password,
      email : this.email
    }
    

    //console.log(user);
    // Validation 

    /*if(!this.validateService.validateRegister(user)){
      console.log('Please fill all the fields');
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      console.log('Please enter a valid email');
      return false;
    }*/

    this.AuthService.registerUser(user).subscribe(
      data=>{
        this.Router.navigate(['/login']);
      }
      //res=>console.log(res),
      //error=>console.log(error),
      //this.Router.navigate(['/login']);
    )

  }

}
