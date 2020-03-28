import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,flatMap,mergeMap,switchMap,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  url = "https://api.exchangeratesapi.io/latest";
  baseUrl = "https://api.exchangeratesapi.io/latest?base=";
	
  constructor(private http:HttpClient) { }							
	
  getAllCountryCurrency(callback){
	return this.http.get(this.url)
	  .pipe(map(resp=>resp)).subscribe(result => {
		callback(result);
	  },
	  error => {
		callback(error);
	  },
	  () => {

	  });
  }


  getCurrencyExchangeData(selectedFromCurrency, callback) {
    return this.http.get(this.baseUrl+selectedFromCurrency)
	  .pipe(map(resp=>resp)).subscribe(result => {
		callback(result);
	  },
	  error => {
		callback(error);
	  },
	  () => {

	  });
  }

}
