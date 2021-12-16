import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './features/item/list-item/list-item.component';

const routes: Routes = [

  { path: 'listItems', component: ListItemComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'listItems'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
