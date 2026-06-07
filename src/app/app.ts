import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { updatePreset, updateSurfacePalette } from '@primeuix/themes';
import { AuthFlow } from './@auth/service/auth-flow';
import { UiDnaLoader } from './shared/components/ui/ui-dna-loader/ui-dna-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, UiDnaLoader],
})
export class App implements OnInit {
  protected readonly title = signal('fitnote');
  authFlow = inject(AuthFlow);

  ngOnInit(): void {
    this.test();
    this.authFlow.handleRedirectCallback();
  }

  test() {
    const colorSematics = {};
    updatePreset();
  }
}
