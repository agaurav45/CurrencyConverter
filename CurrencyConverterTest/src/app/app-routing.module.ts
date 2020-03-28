import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';


const routes: Routes = [
  { path: 'currencyConverter', component: CurrencyConverterComponent },
  { path: '**', redirectTo: '/currencyConverter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
