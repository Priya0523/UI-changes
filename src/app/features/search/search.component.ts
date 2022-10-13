import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { StockHttpService } from 'src/app/services/stock-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public companyList : any;
  public stockDetails : any;
  public minStockPrice : any;
  public maxStockPrice : any;
  public avgStockPrice : any;
  public stockListEmptyMessage = " The values is empty";
  public showStockDetails = false;

  constructor(private stockService: StockHttpService,
    private readonly form: FormBuilder) { }


    searchForm = this.form.group({
      companyCode: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
  });

  ngOnInit(): void {
    console.log("entered search component");
    
    this.fetchListOfCompany();
  }

  fetchListOfCompany() {
    console.log("started loading list");
    
    this.stockService.getListofCompany().subscribe({
      next: (companyList: any) => {        
        this.companyList = companyList.companyList ? companyList.companyList : [];
        console.log("data:",this.companyList);
      },
      error: (error) => {
        this.companyList = [];
      }
    })
  }
  searchCompanyDetails() {
    console.log("1", this.searchForm.controls.companyCode.value);
    console.log("2", this.searchForm.controls.startDate.value);
    console.log("3", this.searchForm.controls.endDate.value);
    this.stockService.searchByCompanyCodeAndDate(this.searchForm.controls.companyCode.value + '/',
      this.searchForm.controls.startDate.value + '/',this.searchForm.controls.endDate.value).subscribe({
      next: (stockDetails: any) => {
        this.stockDetails = stockDetails.stockPriceList ? stockDetails.stockPriceList : [];
        this.minStockPrice = stockDetails.min;
        this.maxStockPrice = stockDetails.max;
        this.avgStockPrice = stockDetails.average;
        this.showStockDetails = true;
      },
      error: (error) => {
        this.companyList = [];
      }
    })
  }
}
