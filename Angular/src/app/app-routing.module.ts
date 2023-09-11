import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes }from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes:Routes = [

  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", component:HomeComponent},
];
@NgModule({
  declarations: [],
  imports: [
    // /#/category/details/1 ,{ useHash: true } == {provide: LocationStrategy, useClass: HashLocationStrategy}
    CommonModule, RouterModule.forRoot(routes, { useHash: true })
  ], 
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule { }
