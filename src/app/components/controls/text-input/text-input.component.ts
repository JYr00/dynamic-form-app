import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControlBase } from '../control-base';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() meta!: IControlBase;
  @Input() form!: FormGroup;

}
