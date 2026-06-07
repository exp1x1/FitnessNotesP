import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-reset',
  imports: [
    FloatLabel,
    ButtonModule,
    MessageModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
  templateUrl: './password-reset.html',
  styleUrls: ['./password-reset.scss', '../../style/auth.scss'],
})
export class PasswordReset {
  formSubmitted = false;
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  passwordResetForm = new FormGroup(
    {
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordPattern),
      ]),
      confirmPassword: new FormControl(null, Validators.required),
    },
    { validators: this.passwordsMatchValidator }
  );

  get password() {
    return this.passwordResetForm.get('password')!;
  }
  get confirmPassword() {
    return this.passwordResetForm.get('confirmPassword')!;
  }

  isInvalid(controlName: string) {
    const control = this.passwordResetForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw && cpw && pw !== cpw ? { passwordsMismatch: true } : null;
  }

  onPasswordReset() {
    if (this.passwordResetForm.valid) {
      console.log(this.passwordResetForm.value);
    } else {
      this.passwordResetForm.markAllAsTouched();
    }
  }
}
