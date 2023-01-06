import { Component, Input } from '@angular/core';
import { ILabelControl } from './label-control';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() meta!: ILabelControl;

}
