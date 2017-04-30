import { LoginService } from './service/login.service';
import { SignupService } from './service/signup.service';
import { RoutesPageComponent } from './main-app/routesPage/routesPage.component';
import { HeaderPageComponent } from './main-app/header-page/header-page.component';
import { FooterPageComponent } from './main-app/footer-page/footer-page.component';
import { UsersComponent } from './main-app/users/users.component';
import { router, routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TabsModule, DropdownModule, CollapseModule, ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { MainAppComponent } from './main-app/main-app.component';

import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    RoutesPageComponent,
    FooterPageComponent,
    HeaderPageComponent,
    UsersComponent,
    AppComponent,
    LoginPageComponent,
    MainAppComponent,
    SignUpComponent,
  ],
  imports: [
    
    routes,
    TabsModule.forRoot(),
    DropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SignupService,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
