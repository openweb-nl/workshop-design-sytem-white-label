import { Component, Input } from '@angular/core';

@Component({
  selector: 'design-system-theme-wrapper',
  templateUrl: './theme-wrapper.component.html',
  styleUrls: ['./theme-wrapper.component.scss'],
})
export class ThemeWrapperComponent {
  @Input() brand = 'default';
  @Input() theme = 'light';
}
