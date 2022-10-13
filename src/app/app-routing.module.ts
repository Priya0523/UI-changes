import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorRegisterCompanyComponent } from './features/addor-register-company/addor-register-company.component';
import { CompanyListComponent } from './features/company-list/company-list.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { SearchComponent } from './features/search/search.component';
// import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [  
  { path:"", component:LoginComponent},
  { path:"home", component: HomeComponent},
  { path:"companylist", component: CompanyListComponent},
  { path: "registerCompany", component: AddorRegisterCompanyComponent},
  { path: "search", component: SearchComponent},
  { path:"login", component:LoginComponent},

];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
