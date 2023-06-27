import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { LoginRequest } from '../models/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  private readonly baseUrl = environment.apiUrl + '/auth';
  private readonly signup = this.baseUrl + '/signup';
  private readonly loginUrl = this.baseUrl + '/login';

  constructor(private http: HttpClient) { }
  public signUp(user:User): Observable<User> {
    return this.http.post<User>(this.signup, user); 
  }
  public login(logintRequest:LoginRequest): Observable<any> {

    return this.http.post<any>(this.loginUrl, logintRequest).pipe(
      tap(data => {
        localStorage.setItem("authenticationToken",data.jwtToken)
        localStorage.setItem("user",JSON.stringify(data.userDto))
      })
    );
  }
}
