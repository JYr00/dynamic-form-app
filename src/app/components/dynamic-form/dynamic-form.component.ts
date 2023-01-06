import { MetaService } from './../../service/meta.service';
import { FormGroup } from '@angular/forms';
import { IControlBase } from './../../components/controls/control-base';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {
  @Input() meta: IControlBase[] = [];
  @Input() data: any = {};
  form!: FormGroup;
  payload = '';

  constructor(
    private metaService: MetaService
  ) { }

  ngOnChanges() { 
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  } 

  onSubmit() { 
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}
