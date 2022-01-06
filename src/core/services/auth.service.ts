import { OtpSent } from './../../app/authentication/shared/authentication.interface';
import { SignUp } from '../../app/authentication/shared/authentication.interface';
import { Configuration } from '../configuration';
import { Tokens } from '../core.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  IsLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  sendOtp(user: { phone: string }): Observable<any> {
    return this.http
      .post<any>(`${Configuration.MobydickApiUrl}/api/v1/auth/otp`, user)
      .pipe(
        tap((res: OtpSent) => {
          return res;
        })
      );
  }

  login(user: { phone: string; code: string }): Observable<any> {
    return this.http
      .post<any>(`${Configuration.MobydickApiUrl}/api/v1/auth/signin`, user)
      .pipe(
        tap((res) =>
          this.doLoginUser(user.phone, {
            token: res.accessToken,
            refreshToken: res.refreshToken,
          })
        )
      );
  }

  logout(): void {
    this.doLogoutUser();
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  refreshToken(): Observable<Tokens> {
    return this.http
      .post<any>(`${Configuration.MobydickApiUrl}/api/v1/auth/refresh`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((tokens: Tokens) => {
          this.storeJwtToken(tokens.token);
        })
      );
  }

  getJwtToken(): any {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens): void {
    this.loggedUser = username;
    this.storeTokens(tokens);
    this.IsLoggedIn.next(true);
  }

  private doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
    this.IsLoggedIn.next(false);
  }

  private getRefreshToken(): any {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private storeTokens(tokens: Tokens): void {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
