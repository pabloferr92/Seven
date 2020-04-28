import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component'


const routes: Routes = [
  { path: 'user-detail/:id', component: UserDetailComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})




export class AppRoutingModule {}