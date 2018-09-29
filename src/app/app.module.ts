import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { CollaborationComponent } from './components/collaboration/collaboration.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyComponent } from './components/property/property.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDetailCard } from './components/userdetail-card/userdetail-card.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { DataTablesModule } from 'angular-datatables';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ThirdNavigationComponent } from './components/third-navigation/third-navigation.component';
import { NoticesComponent } from './components/notices/notices.component';
import { NoticePanelComponent } from './components/notice-panel/notice-panel.component';
import { EventsComponent } from './components/events/events.component';
import { DiscussionForumComponent } from './components/discussion-forum/discussion-forum.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HelpDeskComponent } from './components/help-desk/help-desk.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { AppPagerComponent } from './components/app-pager/app-pager.component';
import { CreateNewComponent } from './components/create-new/create-new.component';
import { CreatenewhelpComponent } from './components/createnewhelp/createnewhelp.component';
import { NewDatatableComponent } from './components/new-datatable/new-datatable.component';
import { AddResidentModalComponent } from './components/add-resident-modal/add-resident-modal.component';
import { UserdetailCardRegistComponent } from './components/userdetail-card-regist/userdetail-card-regist.component';
import { CommonPagerComponent } from './components/common-pager/common-pager.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { 
    path: 'collaboration', 
    component: CollaborationComponent,
  },
  { 
    path: 'dashboard', 
    component: BodyComponent,
  },
  { 
    path: 'property', 
    component: PropertyComponent 
  },
  {
    path: 'residents',
    component: ResidentsComponent
  },
  {
    path: 'documents', 
    component: DocumentsComponent,
  },
  {
    path: 'help-desk',
    component: HelpDeskComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    HeaderComponent,
    BodyComponent,
    CollaborationComponent,
    HomeComponent,
    PropertyComponent,
    FooterComponent,
    UserDetailCard,
    ResidentsComponent,
    DataTableComponent,
    ThirdNavigationComponent,
    NoticesComponent,
    NoticePanelComponent,
    EventsComponent,
    DiscussionForumComponent,
    GroupsComponent,
    GroupCardComponent,
    HelpDeskComponent,
    DocumentsComponent,
    AppPagerComponent,
    CreateNewComponent,
    CreatenewhelpComponent,
    NewDatatableComponent,
    AddResidentModalComponent,
    UserdetailCardRegistComponent,
    CommonPagerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
