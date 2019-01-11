import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken : any;
  user : any;

  constructor( private http: HttpClient ) { }

  registerUser(user){
    
    //let headers = new Headers();
    //headers.append('Content-Type','application/json');
    return this.http.post<any>("http://localhost:3000/api/register/",user);
  }

  authenticateUser(user){
    return this.http.post<any>("http://localhost:3000/api/authenticate/",user);
  }

  getProfile(){

    //let headers = new HttpHeaders({'Content-Type': 'application/json');
    this.getToken();

    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };

    //headers.append('Authorization',this.authToken);
    return this.http.get<any>("http://localhost:3000/api/profile/", headers);
  }

  

  getToken(){
    const token = localStorage.getItem("id_token");
    this.authToken  = token;
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token; 
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  logged() {
    return tokenNotExpired('id_token');
  }

 

}
