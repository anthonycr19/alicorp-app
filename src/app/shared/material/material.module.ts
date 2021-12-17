import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorIntlCro } from 'src/app/features/item/list-item/customClass';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MODULES =[
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    BrowserAnimationsModule,
    ...MODULES
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
})
export class MaterialModule { }
