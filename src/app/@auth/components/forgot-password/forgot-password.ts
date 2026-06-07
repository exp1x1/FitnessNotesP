import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-forgot-password',
  imports: [FloatLabel, ButtonModule, MessageModule, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.scss', '../../style/auth.scss'],
})
export class ForgotPassword {
  formSubmitted = false;
  passwordResetForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get email() {
    return this.passwordResetForm.get('email');
  }

  isInvalid(controlName: string) {
    const control = this.passwordResetForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }

  onPasswordReset() {
    if (this.passwordResetForm.valid) {
      console.log(this.passwordResetForm.value);
    } else {
      this.passwordResetForm.markAllAsTouched();
    }
  }
}
