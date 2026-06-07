import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthFlow } from '../../service/auth-flow';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    MessageModule,
    ToastModule,
    PasswordModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrls: ['./login.scss', '../../style/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private authFlow = inject(AuthFlow);
  private router = inject(Router);

  constructor(private messageService: MessageService) {
    effect(() => {
      if (this.authFlow.$user()) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  formSubmitted = false;
  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  get password() {
    return this.loginForm.get('password')!;
  }

  get email() {
    return this.loginForm.get('email');
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  onSignIn() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue();

      console.log(this.loginForm.value, 'form value');

      this.authFlow
        .userSigninWithEmailPassword(email, password)
        .then((res) => {
          console.log(res, 'res');
        })
        .catch((err: FirebaseError) => {
          console.log(err, 'code');
          this.authFlow.handleAuthError(this.messageService, err.code);
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onMagicLinkSignup(method: 'google') {
    this.authFlow.signInWithGoogleRedirect();
  }

  onForgotPassword() {}

  onSignupRedirect() {
    this.router.navigate(['/auth/register']);
  }
}
