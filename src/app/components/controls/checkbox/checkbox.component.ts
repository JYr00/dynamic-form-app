import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICheckboxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() meta!: ICheckboxControl;
  @Input() form!: FormGroup;

}
