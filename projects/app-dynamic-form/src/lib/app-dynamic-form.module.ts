import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDynamicFormComponent } from './app-dynamic-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppDynamicFormComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCommonModule,
    MatFormFieldModule,
  ],
  exports: [AppDynamicFormComponent],
})
export class AppDynamicFormModule {}
