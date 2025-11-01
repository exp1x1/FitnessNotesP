import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-register',
  imports: [InputTextModule, FloatLabelModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss', '../../style/auth.scss'],
})
export class Register {
  onCreateAccount() {}

  onSigninRedirect() {}
}
