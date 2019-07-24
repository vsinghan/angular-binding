import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from './test/test.component';
import { VishalComponent } from './vishal/vishal.component';


const routes: Routes = [
  {path:'', redirectTo:'heroes',  pathMatch: 'full'},
  {path: 'heroes', component: TestComponent},
  {path: 'home', component: VishalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
