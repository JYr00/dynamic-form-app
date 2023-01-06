import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { IControlBase } from '../controls/control-base';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Input() control!: IControlBase;
  @Input() form!: FormGroup;

}
