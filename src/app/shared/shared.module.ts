import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class SharedModule { }
