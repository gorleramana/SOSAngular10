import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
	{ path:'test-home', component:TestHomeComponent },
	  { path:'**',redirectTo:'test-home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
