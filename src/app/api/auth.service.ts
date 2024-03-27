import { Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  appToken: string = '';

  public login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post<LoginResponse>(`${environment.apiLoginURL}`, credentials).pipe(
      tap(response => {
        if(response && response.token) {
          localStorage.setItem('apptoken', response.token);
          this.appToken = response.token;
        }
      })
    )
    
  }

  public isAuthenticated(): boolean {
      const token = localStorage.getItem('apptoken');

      if(!token) return false;
      
      this.appToken = token;
      return true;                
  }
  
}