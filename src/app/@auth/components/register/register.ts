import { Component, effect, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthFlow } from '../../service/auth-flow';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    MessageModule,
    PasswordModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrls: ['./register.scss', '../../style/auth.scss'],
})
export class Register {
  private authFlow = inject(AuthFlow);
  private router = inject(Router);

  formSubmitted = false;
  // Example pattern: must contain at least one uppercase, one lowercase, one digit
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  constructor(private messageService: MessageService) {
    effect(() => {
      if (this.authFlow.$user()) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  registerForm = new FormGroup(
    {
      fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.passwordPattern),
        ],
        nonNullable: true,
      }),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.passwordsMatchValidator }
  );

  get password() {
    return this.registerForm.get('password')!;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword')!;
  }

  onCreateAccount() {
    if (this.registerForm.valid) {
      const { fullName, email, password } = this.registerForm.getRawValue();

      this.authFlow
        .userSignupWithEmailPassword(email, password, fullName)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.authFlow.handleAuthError(this.messageService, err.code);
        });
      console.log('Form value', this.registerForm.value);
    } else {
      // mark all as touched to show errors
      this.registerForm.markAllAsTouched();
    }
  }

  onMagicLinkSignup(method: 'google') {
    this.authFlow.signInWithGoogleRedirect();
  }

  onSigninRedirect() {
    this.router.navigate(['/auth/login']);
  }

  isInvalid(controlName: string) {
    const control = this.registerForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  // Custom validator: checks password === confirmPassword
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw && cpw && pw !== cpw ? { passwordsMismatch: true } : null;
  }
}
