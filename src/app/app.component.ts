import { Component } from '@angular/core';
import { ItemService } from './core/services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alicorp-app';

  constructor(private itemService: ItemService){

  }

  ngOnInit(): void {
    this.initData()
  }

  initData(){
    
    this.itemService.getItems().subscribe(products=>{
      

      localStorage.setItem('products', JSON.stringify(products['products']) );
      console.log("products: ", products);
    })
  }
}
