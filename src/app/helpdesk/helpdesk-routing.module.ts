import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTmComponent } from './create-tm/create-tm.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchCaseComponent } from './search-case/search-case.component';
import { SearchCaseBasicComponent } from './search-case-basic/search-case-basic.component';
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
import { AddNotesComponent } from './add-notes/add-notes.component';
import { AssignCaseComponent } from './assign-case/assign-case.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { CreatePartRequestComponent } from './create-part-request/create-part-request.component';
import { CreateSkillRequestComponent } from './create-skill-request/create-skill-request.component';
import { ChargeableEventComponent } from './chargeable-event/chargeable-event.component';
import { CaseCreationComponent } from './case-creation/case-creation.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CaseStatusComponent } from './case-status/case-status.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {
    path:"createT&M",
    component:CreateTmComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"searchcase",
    component:SearchCaseComponent
  },
  {
    path:"basic",
    component:SearchCaseBasicComponent
  },
  {
    path:"summary",
    component:SummaryComponent
  },
  {
    path:"customized_chp",
    component:CustomizedChpComponent
  },
  {
    path:"previous_cases",
    component:PreviousCasesComponent
  },
   {
    path:"followers",
    component:FollowersComponent
  },
  {
    path:"add_follower",
    component:AddFollowerComponent
  },
  {
    path:"service_job",
    component:ServiceJobComponent
  },
  {
    path:"parts_info",
    component:PartInfoComponent
  },
  {
    path:"sub_service_cases",
    component:SubServiceCasesComponent
  },
  {
    path:"casebook",
    component:CasebookComponent
  },
  {
    path:"viewcasebook",
    component:ViewCasebookComponent
  },
  {
    path:"add_notes",
    component:AddNotesComponent
  },
  {
    path:"assign_case",
    component:AssignCaseComponent
  },
  {
    path:"add_schedule",
    component:AddScheduleComponent
  },
  {
    path:"create_part_request",
    component:CreatePartRequestComponent
  },
  {
    path:"create_skill_request",
    component:CreateSkillRequestComponent
  },
  {
    path:"chargeable_event",
    component:ChargeableEventComponent
  },
  {
    path:"case_creation",
    component:CaseCreationComponent
  },
  {
    path:"helpdesk",
    component:DashBoardComponent
  },
  {
    path:"case_status",
    component:CaseStatusComponent
  },
  {
    path:"forgot_password",
    component:ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
