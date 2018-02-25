import { Component, Input } from '@angular/core'
import { AlertType } from '../alert-type';

@Component({
    selector: 'app-alert-success',
    template: '<app-alert [heading]="heading" [message]="message" [type]="alertType"><app-alert>'
})
export class AlertSuccessComponent {
    @Input() heading: string;
    @Input() message: string;

    alertType = AlertType.Success;
}