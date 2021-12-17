import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';


const COMPONENTS = [
  HeaderComponent
]

const MODULES = [
  MaterialModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
