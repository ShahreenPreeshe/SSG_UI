import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './helpdesk/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"user",
    pathMatch:"full"
  },
  {
    path:"user",
    loadChildren:() =>
    import("./user/user.module").then(m=> m.UserModule)
 },
  {
    path:"helpdesk",
    loadChildren:() =>
    import("./helpdesk/helpdesk.module").then(m=> m.HelpdeskModule)
   },
 
  {
    path:"**",
    component:PagenotfoundComponent
  },
  // 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
