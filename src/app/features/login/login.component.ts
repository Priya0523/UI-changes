import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly form:FormBuilder, private readonly router:Router,
    private readonly authService : AuthService) { }

  loginForm=this.form.group({
    userName: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    console.log("login comp");
    
  }

  loginSuccess(){
    console.log("on success");
    
    this.authService.login(this.loginForm.value.userName, this.loginForm.value.password)
    .subscribe(data => {
      if(data.code == 400){
        console.log("UserName or Password is incorrect");
      }
      else{
        const fullName = data.firstName + " " + data.lastName;
        this.authService.storeUserData(
          fullName,
          data.emailId,
          data.user.userName,
          data.jwt
        );
        this.router.navigate(["/home"]);
      }
    });
  }
}