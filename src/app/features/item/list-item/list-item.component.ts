import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from 'src/app/core/interfaces/item';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
  constructor(private router: Router) { }

  
  ngOnInit(): void {
    this.initData()
  }

  initData(){
    
  }
}
