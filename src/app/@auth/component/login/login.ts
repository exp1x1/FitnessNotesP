import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss', '../../style/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  onSignIn() {}

  onForgotPassword() {}

  onSignupRedirect() {}
}
