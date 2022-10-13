import { Component, OnInit } from '@angular/core';
import { StockHttpService } from 'src/app/services/stock-http.service';
import { COMMON_MESSAGE } from 'src/app/shared/constants/message.constants';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  
  public companylist : any;
  public companylistEmptymessage = COMMON_MESSAGE.NO_COMPANY_AVAILABLE;
  
  constructor(private readonly stockService : StockHttpService) { }

  ngOnInit(): void {
    this.fetchListOfCompany();
  }

  fetchListOfCompany(){
    console.log("method called");
    
      this.stockService.getListofCompany().subscribe({
        next: (companyList : any) => {
          console.log("response:",companyList.companyDetailsList);          
          this.companylist = companyList.companyList ? companyList.companyList : [];
        },
        error: (error) => {
          this.companylist = [];
        }
      })
  }
}
