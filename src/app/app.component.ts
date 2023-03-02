import { Component } from '@angular/core';

@Component({
  selector: 'design-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system';

  brands = ['default', 'openweb'];
  themes = ['light', 'dark'];
}
