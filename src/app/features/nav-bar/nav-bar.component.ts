import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private readonly router : Router, 
    public readonly authService : AuthService) { }

  ngOnInit(): void {
  }

  /**
   * redirectToHomePage is used to navigate back to home screen
   */
  redirectToHomePage(){
    this.router.navigate(['/home']);
  }

  /**
   * redirectTolistOfCompany used to navigate to the list of company available in list tab
   */
  redirectTolistOfCompany(){
    this.router.navigate(['/companylist']);
  }

  /**
   * redirectToregisterNewCompany used to navigate to register new company component
   */
  redirectToregisterNewCompany(){
    this.router.navigate(['/registerCompany']);
  }

  /**
   * redirectToSearch used to navigate to search component
   */
   redirectToSearch(){
    this.router.navigate(['/search']);
  }

  /**
   * logout method is used to logout the user from the session
   */
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log("User logged out successfully");
    return false;
  }

}
