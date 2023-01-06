import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/controls/text-input/text-input.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { DropdownComponent } from './components/controls/dropdown/dropdown.component';
import { LabelComponent } from './components/controls/label/label.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    CheckboxComponent,
    DropdownComponent,
    LabelComponent,
    DynamicFormComponent,
    ControlComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
