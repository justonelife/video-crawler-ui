import { ChangeDetectionStrategy, Component } from '@angular/core';
import { VcuLazyLoadVideoDirective } from '@project/vcu-core';
import { VcuThemeSwitcherComponent } from '@project/vcu-theme-switcher';

@Component({
  selector: 'lib-vcu-header',
  standalone: true,
  imports: [
    VcuThemeSwitcherComponent,
    VcuLazyLoadVideoDirective,
  ],
  templateUrl: "./vcu-header.component.html",
  styleUrl: "./vcu-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcuHeaderComponent {

}
