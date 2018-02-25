import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { AlertType } from './alert-type';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
    @Input() heading: string;
    @Input() message: string;
    @Input("type") alertType: AlertType;

    alertClass: string;

    ngOnInit(): void {
        switch (this.alertType) {
            case AlertType.Success:
                this.alertClass = "alert-success";
                break;
            case AlertType.Warning:
                this.alertClass = "alert-warning";
                break;
        }
    }

}
