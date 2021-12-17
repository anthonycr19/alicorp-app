import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { ListItemComponent } from './features/item/list-item/list-item.component';
import { DialogComponent } from './features/item/list-item/dialog/dialog.component';

const COMPONENTS = [
  ListItemComponent
]

const ENTRYCOMPONENTS = [
  DialogComponent
]

const MODULES = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  SharedModule,
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...ENTRYCOMPONENTS,
  ],
  imports: [
    ...MODULES
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[...ENTRYCOMPONENTS]
})
export class AppModule { }
