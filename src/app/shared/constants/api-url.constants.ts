const API = '/api/v1.0/';
const MARKET = 'market';
const COMPANY = '/company';
const STOCK_SERVICE = '/stock';
const LOCAL_URL_COMPANY = 'http://localhost:8090';
const LOCAL_URL_STOCK = 'http://localhost:8091';
const GATEWAY_URL = 'http://localhost:8093';

export const COMPANY_SERVICE_URL = {
    GET_ALL_COMAPNIES : `${GATEWAY_URL}${COMPANY}${API}${MARKET}${COMPANY}/getall`,
    REGISTER_COMAPNIES : `${GATEWAY_URL}${COMPANY}${API}${MARKET}${COMPANY}/registerCompany`,
    GET_COMPANY_INFO_BY_CODE : `${GATEWAY_URL}${COMPANY}${API}${MARKET}${COMPANY}/companyInfo`,
    DELETE_COMPANY : `${GATEWAY_URL}${COMPANY}${API}${MARKET}${COMPANY}/delete`,
}

export const STOCK_SERVICE_URL = {
    ADD_STOCK : `${GATEWAY_URL}${STOCK_SERVICE}${API}${MARKET}${STOCK_SERVICE}/addStock`,
    GET_STOCK_ON_DATES : `${GATEWAY_URL}${STOCK_SERVICE}${API}${MARKET}${STOCK_SERVICE}/get/`,
}

export const USER_URL = {
    LOGIN : `${GATEWAY_URL}${API}${MARKET}${COMPANY}/login`,
    REGISTER_USER : `${GATEWAY_URL}${API}${MARKET}${COMPANY}/register`,
}