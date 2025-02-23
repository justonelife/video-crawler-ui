import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VcuButtonDirective } from '@project/vcu-button';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'lib-vcu-theme-switcher',
  standalone: true,
  imports: [
    SvgIconComponent,
    VcuButtonDirective,
  ],
  templateUrl: "./vcu-theme-switcher.component.html",
  styleUrl: "./vcu-theme-switcher.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcuThemeSwitcherComponent {

}
