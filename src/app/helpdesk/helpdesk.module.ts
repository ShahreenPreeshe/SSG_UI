import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { SearchCaseComponent } from './search-case/search-case.component';
import { SearchCaseBasicComponent } from './search-case-basic/search-case-basic.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SummaryComponent } from './summary/summary.component';
import { CustomizedChpComponent } from './customized-chp/customized-chp.component';
import { PreviousCasesComponent } from './previous-cases/previous-cases.component';
import { FollowersComponent } from './followers/followers.component';
import { AddFollowerComponent } from './add-follower/add-follower.component';
import { ServiceJobComponent } from './service-job/service-job.component';
import { PartInfoComponent } from './part-info/part-info.component';
import { SubServiceCasesComponent } from './sub-service-cases/sub-service-cases.component';
import { CasebookComponent } from './casebook/casebook.component';
import { ViewCasebookComponent } from './view-casebook/view-casebook.component';
import { AssignCaseComponent } from './assign-case/assign-case.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { CreatePartRequestComponent } from './create-part-request/create-part-request.component';
import { CreateSkillRequestComponent } from './create-skill-request/create-skill-request.component';
import { ChargeableEventComponent } from './chargeable-event/chargeable-event.component';
import { CaseCreationComponent } from './case-creation/case-creation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateTmComponent } from './create-tm/create-tm.component';

@NgModule({
  declarations: [
    SearchCaseComponent,
    SearchCaseBasicComponent,
    AddNotesComponent,
    SidebarComponent,
    SummaryComponent,
    CustomizedChpComponent,
    PreviousCasesComponent,
    FollowersComponent,
    AddFollowerComponent,
    ServiceJobComponent,
    PartInfoComponent,
    SubServiceCasesComponent,
    CasebookComponent,
    ViewCasebookComponent,
    AssignCaseComponent,
    AddScheduleComponent,
    CreatePartRequestComponent,
    CreateSkillRequestComponent,
    ChargeableEventComponent,
    CaseCreationComponent,
    LoginComponent,
    PagenotfoundComponent,
    CreateTmComponent,
    
  ],
  imports: [
    CommonModule,
    HelpdeskRoutingModule,
  ]
})
export class HelpdeskModule { }
