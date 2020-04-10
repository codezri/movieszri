import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppscreenComponent } from './components/appscreen/appscreen.component';


const routes: Routes = [
  {
    path: '',
    component: AppscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
