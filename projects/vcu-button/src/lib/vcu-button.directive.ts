import { Directive, input } from "@angular/core";
import { VcuSeverityDirective } from "@project/vcu-severity";

export type VcuButtonSize = 'small' | 'medium' | 'large';

@Directive({
  selector: 'button[lib-vcu-button]',
  standalone: true,
  hostDirectives: [
    {
      directive: VcuSeverityDirective,
      inputs: ['severity']
    }
  ],
  host: {
    '[class]': 'klass'
  }
})
export class VcuButtonDirective {

  size = input<VcuButtonSize>('small');

  get klass() {
    const size = this.size();
    return `vcu-button vcu-button--${size}`;
  }
}
