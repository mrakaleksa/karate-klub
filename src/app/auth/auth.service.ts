import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiKey = environment.firebaseApiKey;
  private dbUrl = environment.databaseURL;

  getDatabaseUrl(): string {
    return this.dbUrl;
  }

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  saveUserData(userId: string, data: any) {
    return this.http.put(
      `${this.dbUrl}/users/${userId}.json`,
      data
    );
  }

  getCurrentUser() {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
  
