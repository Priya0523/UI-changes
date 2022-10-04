import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { StockHttpService } from 'src/app/services/stock-http.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-addor-register-company',
  templateUrl: './addor-register-company.component.html',
  styleUrls: ['./addor-register-company.component.scss']
})
export class AddorRegisterCompanyComponent implements OnInit {

  public companyStockExchangeList: string[] = [];

  constructor(private readonly stockService: StockHttpService,
    private readonly form: FormBuilder,
    private readonly validate: ValidationService) { }

  ngOnInit(): void {
    this.companyStockExchangeList.push("NSE");
    this.companyStockExchangeList.push("BSE");

    this.registerCompany();
  }

  registerForm = this.form.group({
    companyCode: new FormControl(),
    companyName: new FormControl(),
    companyCeo: new FormControl(),
    companyTurnover: new FormControl(),
    companyWebsite: new FormControl(),
    companyStockExchange: new FormControl(),
  })

  registerCompany() {
    const registerCompanypayload = {
      companyName :this.registerForm.controls.companyName.value,
      companyCode: this.registerForm.controls.companyCode.value,
      companyCeo: this.registerForm.controls.companyCeo.value,
      companyTurnover: this.registerForm.controls.companyTurnover.value,
      companyWebsite: this.registerForm.controls.companyWebsite.value,
      companyStockExchange: this.registerForm.controls.companyStockExchange.value,
    };
    console.log("data entered:",registerCompanypayload);
    
    this.stockService.registerCompany(registerCompanypayload).subscribe({
      next: (response: any) => {
        console.log("The new company has been registered Successfully");
        this.registerForm.reset();
        console.log("Form Values resetted successfully");
        
      },
      error: (error) => {
        console.log("Error occured while registering the company");

      }
    })
  }

  allowOnlyNumeric(event: any) {
    this.validate.allowOnlyNumeric(event);
  }

  enableRegister() {

    const isCompanyCode = Boolean(this.registerForm.controls.companyCode.value);
    const isCompanyCeo = Boolean(this.registerForm.controls.companyCeo.value);
    const isCompanyTurnOver = Boolean(this.registerForm.controls.companyTurnover.value);
    const isCompanyWebsite = Boolean(this.registerForm.controls.companyWebsite.value);
    const isCompanyStockExchange = Boolean(this.registerForm.controls.companyStockExchange.value);
    return (isCompanyCode && isCompanyCeo && isCompanyTurnOver && isCompanyWebsite && isCompanyStockExchange);
  }
}