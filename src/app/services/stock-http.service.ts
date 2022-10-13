import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { COMPANY_SERVICE_URL, STOCK_SERVICE_URL, USER_URL } from '../shared/constants/api-url.constants';

@Injectable({
  providedIn: 'root'
})
export class StockHttpService {
  headerOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private readonly http:HttpClient) { }

  /**
   * getListofCompany is used to fetch the list of company
   * @returns 
   */
  getListofCompany(){
    return this.http.get(COMPANY_SERVICE_URL.GET_ALL_COMAPNIES, {...this.headerOptions});
  }

  /**
   * registerCompany is used to register a new company to the company list
   */
  registerCompany(payload : any){
    return this.http.post(COMPANY_SERVICE_URL.REGISTER_COMAPNIES,payload, {...this.headerOptions})
  }

  searchByCompanyCode(payload : any){
    return this.http.post(COMPANY_SERVICE_URL.GET_COMPANY_INFO_BY_CODE+payload, {...this.headerOptions});
  }

  addStockPriceForaCompany(payload : any){
    return this.http.post(STOCK_SERVICE_URL.ADD_STOCK,payload, {...this.headerOptions})
  }

  searchByCompanyCodeAndDate(companyCode : any, startDate : any, endDate : any){
    return this.http.get(STOCK_SERVICE_URL.GET_STOCK_ON_DATES+companyCode+startDate+endDate
      , {...this.headerOptions})
  }

  registerUser(payload : any){
    this.http.post(USER_URL.REGISTER_USER,payload, {...this.headerOptions});
  }

  loginUser(payload :any){
    this.http.post(USER_URL.LOGIN, payload, {...this.headerOptions});
  }

  deleteCompany(companyCode : any){
    return this.http.post(COMPANY_SERVICE_URL.REGISTER_COMAPNIES+companyCode, {...this.headerOptions})
  }


}
