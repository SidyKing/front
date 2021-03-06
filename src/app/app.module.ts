import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { BasicAuthInterceptorService } from './services/_helpers/basic-auth-interceptor.service';


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { EtudiantComponent } from './views/etudiant/etudiant.component';
import { EtudiantModule } from './views/etudiant/etudiant.module';
import { ForgetPasswordComponent } from './views/forget-password/forget-password.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminModule } from './views/admin/admin.module';
import { ProfesseurComponent } from './views/professeur/professeur.component';
import { ProfesseurModule } from './views/professeur/professeur.module';
import { RespFormComponent } from './views/resp-form/resp-form.component';
import { RespFormModule } from './views/resp-form/resp-form.module';
import { DownloadMemoireComponent } from './views/download-memoire/download-memoire.component';
import { DownloadMemoireModule } from './views/download-memoire/download-memoire.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    FormsModule,
    ReactiveFormsModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    EtudiantModule,
    AdminModule,
    ProfesseurModule,
    RespFormModule,
    DownloadMemoireModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    EtudiantComponent,
    ForgetPasswordComponent,
    AdminComponent,
    ProfesseurComponent,
    RespFormComponent,
    DownloadMemoireComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : BasicAuthInterceptorService , multi:true},
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
