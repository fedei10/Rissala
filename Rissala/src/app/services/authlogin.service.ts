import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http : HttpClient) { }

  login(user:{email:string,password:string}):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8080/Login/", user).pipe(tap(response => {
      if (response.result) {
        localStorage.setItem('token', response.message);
        this.loggedIn.next(true);
      }
    }));

  }
  logout(){
    localStorage.removeItem("token");
    this.loggedIn.next(false);
  }
}
