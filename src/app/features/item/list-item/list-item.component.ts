import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from 'src/app/core/interfaces/item';
import { Router} from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: any = null;
  details: Item[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  constructor(
    private router: Router, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { 
    
    this.displayedColumns = ['id', 'name', 'characteristic', 'action'];
    this.dataSource = JSON.parse(localStorage.getItem('results') || '{}');
  }

  dataItems: Array<string> = [];
  
  ngOnInit(): void {
    this.initData()
  }

  initData(){
    this.details = JSON.parse(localStorage.getItem('results') || '[]');
    this.setDataSource();
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(this.details);
    this.dataSource.paginator = this.paginator;
  }

  deleteProductSelect(event: any){

    if(this.details){
      this.details.splice(event, 1);
      console.log(this.details);
    } 

    localStorage.setItem('results', JSON.stringify(this.details))
    this.dataSource = new MatTableDataSource(this.details);
  }

  openDialog(i:any): void{

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
   

    dialogConfig.data = i;
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    const message = "Producto eliminado";
    const action = "Hecho";

    dialogRef.afterClosed().subscribe(
      (data: boolean) => {
        if (data == true) {
          this.deleteProductSelect(i);
          this.openSnackBar(message, action)
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
