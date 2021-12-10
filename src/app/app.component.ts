import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from 'src/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mobydick-app-frontend';
  loggedIn: Observable<boolean> = this.authService.IsLoggedIn.asObservable();
  constructor(public authService: AuthService) {}
}
