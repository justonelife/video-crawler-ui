import { Component } from '@angular/core';
import { VcuHeaderComponent } from '@project/vcu-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VcuHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
