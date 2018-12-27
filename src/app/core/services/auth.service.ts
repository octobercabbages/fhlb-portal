import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { RemoteApiService } from '@app/core/services/remote-api.service';
import { stringify } from '@angular/core/src/util';
@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  authUrl: string;
  user: {};

    constructor(private remoteApiService: RemoteApiService)
    {
      this.authUrl = "http://localhost:3000/auths";
    }

  login(): Observable<any> {
    return of(true)
      .pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      )
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  authorizations(username: string): Observable<any> {
    return (this.remoteApiService.fetch(this.authUrl + "/trostelm"));
  }
}
