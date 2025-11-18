import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import { AuthFlow } from './@auth/service/auth-flow';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet],
})
export class App implements OnInit {
  protected readonly title = signal('fitnote');
  private authFlow = inject(AuthFlow);

  ngOnInit(): void {
    this.test();
    this.authFlow.handleRedirectCallback();
  }

  test() {
    const colorSematics = {};
    updatePreset();
  }
}
