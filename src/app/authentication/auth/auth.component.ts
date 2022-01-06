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
    phone: ['', Validators.required],
  });

  codeForm: FormGroup = this.fb.group({
    phone: [''],
    code: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onPhoneSubmit(): void {
    if (!this.phoneForm.valid) {
      return;
    }
    this.phoneForm.disable();
    console.log(this.phoneForm.controls);
    this.authService.sendOtp(this.phoneForm.value).subscribe(
      (res: OtpSent) => {
        this.phone = res.phone;
        this.codeSend.next(true);
        this.phoneForm.enable();
      },
      (err) => {
        this.phoneForm.enable();
      }
    );
  }

  onCodeSubmit(): void {
    if (!this.codeForm.valid) {
      return;
    }
    this.codeForm.disable();

    this.authService
      .login({
        code: this.codeForm.value?.code,
        phone: this.phone,
      })
      .subscribe(
        () => {
          this.router.navigate(['/', 'home']);
          this.codeForm.enable();
        },
        (err) => {
          this.codeForm.enable();
        }
      );
  }
}
