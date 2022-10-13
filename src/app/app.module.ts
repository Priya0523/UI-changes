import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { CompanyListComponent } from './features/company-list/company-list.component';
import { AddorRegisterCompanyComponent } from './features/addor-register-company/addor-register-company.component';
import { SearchComponent } from './features/search/search.component';
import { httpInterceptor } from './shared/Interceptor/httpInterceptor';
import { AuthGuard } from './shared/guards/auth-guard';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    CompanyListComponent,
    AddorRegisterCompanyComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : httpInterceptor, multi: true},
    AuthGuard,
    AuthService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
