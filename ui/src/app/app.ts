import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello there, {{ title() }}</h1>

    <p style="font-size: 0.8rem; color: #666;">
      Version: {{ version }} | Deployed: {{ buildDate }}
    </p>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Mandir App UI');
  protected readonly version = environment.version;
  protected readonly buildDate = environment.buildDate;
}
