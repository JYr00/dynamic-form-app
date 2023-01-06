import { IControlBase } from './../components/controls/control-base';
import { lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private http: HttpClient) {}

  async getMeta() {
    return lastValueFrom(
      this.http
        .get('http://localhost:8080/meta.json')
        .pipe(
          map((meta: any) => meta.sort((a: any, b: any) => a.order - b.order))
        )
    );
  }

  toFormGroup(controls: IControlBase[], data: any) {
    const group: any = {};
    controls.forEach((control: IControlBase) => {
      if (control.controlType !== 'label') {
        group[control.key] = control.required
          ? new FormControl(data[control.key] || '', Validators.required)
          : new FormControl(data[control.key] || '');
      }
    });
    return new FormGroup(group);
  }
}
