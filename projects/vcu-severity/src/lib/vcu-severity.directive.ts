import { Directive, input } from "@angular/core";
import { VcuSeverity } from "@project/vcu-types";

@Directive({
  selector: 'lib-vcu-severity',
  standalone: true,
  host: {
    '[class]': 'klass'
  }
})
export class VcuSeverityDirective {
  readonly CLASS_MAPPER: Record<VcuSeverity, string> = {
    'neutral': 'severity--neutral',
    'info': 'severity--info',
    'danger': 'severity--danger',
    'warning': 'severity--warning',
    'success': 'severity--success',
  }

  severity = input<VcuSeverity>();

  get klass() {
    const severity = this.severity();
    if (severity) {
      return this.CLASS_MAPPER[severity];
    }
    return '';
  }
}
