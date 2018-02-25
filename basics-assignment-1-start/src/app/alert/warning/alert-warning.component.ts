import { Component, Input } from '@angular/core'
import { AlertType } from '../alert-type';

@Component({
    selector: 'app-alert-warning',
    template: '<app-alert [heading]="heading" [message]="message" [type]="alertType"><app-alert>'
})
export class AlertWarningComponent {
    @Input() heading: string;
    @Input() message: string;

    alertType = AlertType.Warning;
}