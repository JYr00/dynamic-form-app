import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { IDropdownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() meta!: IDropdownControl;
  @Input() form!: FormGroup;
}
