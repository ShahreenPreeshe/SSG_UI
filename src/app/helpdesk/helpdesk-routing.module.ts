import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SearchCaseBasicComponent } from './search-case-basic/search-case-basic.component';

const routes: Routes = [
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
