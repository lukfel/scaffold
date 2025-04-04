import { Component, Input } from '@angular/core';
import { PlaceholderConfig } from '../../../models';

@Component({
    selector: 'lf-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.scss'],
    standalone: false
})
export class PlaceholderComponent {

  @Input() public placeholderConfig: PlaceholderConfig;
}
