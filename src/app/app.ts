import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet],
})
export class App implements OnInit {
  protected readonly title = signal('fitnote');

  ngOnInit(): void {
    this.test();
  }

  test() {
    const colorSematics = {
      
    }
    updatePreset();
  }
}
