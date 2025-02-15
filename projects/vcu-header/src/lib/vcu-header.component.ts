import { Component } from '@angular/core';
import { VcuThemeSwitcherComponent } from '@project/vcu-theme-switcher';

@Component({
  selector: 'lib-vcu-header',
  standalone: true,
  imports: [
    VcuThemeSwitcherComponent
  ],
  templateUrl: "./vcu-header.component.html",
  styleUrl: "./vcu-header.component.scss",
})
export class VcuHeaderComponent {

}
