import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from './../../service/currency-converter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public allCurrency:any = [];
  public selectedFromCurrency:string = '';
  public selectedToCurrency:string = '';
  public currencyValue:number = 0;
  public convertedCurrencyValue:number = 0;


  constructor(public _currencyConverterService: CurrencyConverterService) { }

  ngOnInit() {
    this._currencyConverterService.getAllCountryCurrency(result => {
      this.allCurrency = Object.keys(result.rates);	
    });
  }

  convertCurrency() {
  	this._currencyConverterService.getCurrencyExchangeData(this.selectedFromCurrency, result => {
  	  this.convertedCurrencyValue = this.currencyValue*result.rates[this.selectedToCurrency];
      this.allCurrency = Object.keys(result.rates);
    });
  }


}
