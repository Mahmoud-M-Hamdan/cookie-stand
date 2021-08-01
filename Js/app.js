'use strict';



var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


var storeNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
var minCustomers = [23, 3, 11, 20, 2];
var maxCustomers = [65, 24, 38, 38, 16];
var avgSalePerCustomer = [6.3, 1.2, 3.7, 2.3, 4.6];



function CookieStore(name, minCust, maxCust, avgSale){
  this.customersEachHour = [];
  this.cookieSalesEachHour = [];
  this.cookieSalesTotal = 0;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.render();
}


CookieStore.prototype.createRandomNumberOfCustomers = function(){
  for(var i = 0; i < hours.length; i++){
    this.customersEachHour.push( Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};


CookieStore.prototype.populateCookieSalesEachHour = function(){
  this.createRandomNumberOfCustomers();
  for(var i = 0; i < hours.length; i++){
    this.cookieSalesEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgSale));
    this.cookieSalesTotal += this.cookieSalesEachHour[i];
  }
};



