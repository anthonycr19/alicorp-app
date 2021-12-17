import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import { BankService } from '@core/services/banks/bank.service';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  dataRecieved:any;

  constructor(
    // public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any
  ) {
    this.dataRecieved = data;
  }

  ngOnInit(): void {
  }


}
