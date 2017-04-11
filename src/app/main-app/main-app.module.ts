

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule, DropdownModule, CollapseModule, ModalModule } from 'ng2-bootstrap';



import { RoutesPageComponent } from './routesPage/routesPage.component';
import { UsersComponent } from './users/users.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

@NgModule({
  declarations: [
    
    RoutesPageComponent,
    UsersComponent,
    HeaderPageComponent,
    FooterPageComponent
    
  ],
  imports: [
    TabsModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class AppModule { }
