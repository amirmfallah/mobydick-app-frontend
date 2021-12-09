import { OtpSent, AuthAction } from './../shared/authentication.interface';
import { AuthService } from 'src/core/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  codeSend = new BehaviorSubject<boolean>(false);
  action: AuthAction;
  phone: string;

  phoneForm: FormGroup = this.fb.group({
    phone: [''],
  });

  codeForm: FormGroup = this.fb.group({
    phone: [''],
    code: [''],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onPhoneSubmit(): void {
    this.authService.sendOtp(this.phoneForm.value).subscribe((res: OtpSent) => {
      this.action = res.action;
      this.phone = res.phone;
      console.log(res);
      this.codeSend.next(true);
    });
  }

  onCodeSubmit(): void {
    if (this.action === AuthAction.SignIn) {
      this.authService
        .login({
          code: this.codeForm.value?.code,
          phone: this.phone,
        })
        .subscribe(() => {
          this.router.navigate(['/', 'home']);
        });
    } else if (this.action === AuthAction.SignUp) {
      this.authService
        .signUp({
          code: this.codeForm.value?.code,
          phone: this.phone,
        })
        .subscribe(() => {
          this.router.navigate(['/', 'home']);
        });
    }
  }
}
