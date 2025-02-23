import { Directive } from "@angular/core";
import { VcuSeverityDirective } from "@project/vcu-severity";

@Directive({
  selector: 'button[lib-vcu-button]',
  standalone: true,
  hostDirectives: [
    {
      directive: VcuSeverityDirective,
      inputs: ['severity']
    }
  ]
})
export class VcuButtonDirective {

}
