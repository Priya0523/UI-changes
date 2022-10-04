const API = '/api/v1.0/';
const MARKET = 'market';
const COMPANY = '/company';
const STOCK_SERVICE = '/stock';
const LOCAL_URL_COMPANY = 'http://localhost:8090';
const LOCAL_URL_STOCK = 'http://localhost:8091'


export const COMPANY_SERVICE_URL = {
    GET_ALL_COMAPNIES : `${LOCAL_URL_COMPANY}${API}${MARKET}${COMPANY}/getall`,
    REGISTER_COMAPNIES : `${LOCAL_URL_COMPANY}${API}${MARKET}${COMPANY}/registerCompany`,
    GET_COMPANY_INFO_BY_CODE : `${LOCAL_URL_COMPANY}${API}${MARKET}${COMPANY}/companyInfo`,
}

export const STOCK_SERVICE_URL = {
    ADD_STOCK : `${LOCAL_URL_STOCK}${API}${MARKET}${STOCK_SERVICE}/addStock`,
    GET_STOCK_ON_DATES : `${LOCAL_URL_STOCK}${API}${MARKET}${STOCK_SERVICE}/get/`,
}

export const USER_URL = {
    LOGIN : `${LOCAL_URL_COMPANY}${API}${MARKET}${COMPANY}/login`,
    REGISTER_USER : `${API}${MARKET}/register`,
}