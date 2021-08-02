'use strict';




var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*

const shop = document.getElementById('shop');
const  seattle = {
  local :'Seattle',
  minCustomers :23,
  maxCustomers : 65,
  avgspc :6.3,
  total : 0 ,
  cookiessale :[],
  getcookies : function(){
    for (let i=0 ; i<hours.length ; i++) {
      
     this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc));
     this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
    }
  },
  render : function(){

   const h2Element=document.createElement('h2');
   h2Element.textContent=this.local;
   shop.appendChild(h2Element);

   const ulElement=document.createElement('ul')
   shop.appendChild(ulElement);
   for(let i=0 ; i<hours.length ; i++){
     const liElement=document.createElement('li')
   liElement.textContent=` ${hours[i]} : ${this.cookiessale[i]}   cookies`
   ulElement.appendChild(liElement)


   }
   const totali=document.createElement('li');
   totali.textContent=` The total  ${this.total} cookies`;
   ulElement.appendChild(totali)
  },



}
const  Tokyo = {
  local :'Tokyo',
  minCustomers :23,
  maxCustomers : 65,
  avgspc :6.3,
  total : 0 ,
  cookiessale :[],
  getcookies : function(){
    for (let i=0 ; i<hours.length ; i++) {
      
     this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
     this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
    }
  },
  render : function(){

   const h2Element=document.createElement('h2');
   h2Element.textContent=this.local;
   shop.appendChild(h2Element);

   const ulElement=document.createElement('ul')
   shop.appendChild(ulElement);
   for(let i=0 ; i<hours.length ; i++){
     const liElement=document.createElement('li')
   liElement.textContent=` ${hours[i]} : ${this.cookiessale[i]}   cookies`
   ulElement.appendChild(liElement)


   }
   const totali=document.createElement('li');
   totali.textContent=` The total  ${this.total} cookies`;
   ulElement.appendChild(totali)
  },



}
const  Dubai = {
  local :'Dubai',
  minCustomers :23,
  maxCustomers : 65,
  avgspc :6.3,
  total : 0 ,
  cookiessale :[],
  getcookies : function(){
    for (let i=0 ; i<hours.length ; i++) {
      
     this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
     this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
    }
  },
  render : function(){

   const h2Element=document.createElement('h2');
   h2Element.textContent=this.local;
   shop.appendChild(h2Element);

   const ulElement=document.createElement('ul')
   shop.appendChild(ulElement);
   for(let i=0 ; i<hours.length ; i++){
     const liElement=document.createElement('li')
   liElement.textContent=` ${hours[i]} : ${this.cookiessale[i]}   cookies`
   ulElement.appendChild(liElement)


   }
   const totali=document.createElement('li');
   totali.textContent=` The total  ${this.total} cookies`;
   ulElement.appendChild(totali)
  },



}
const  Paris = {
  local :'Paris',
  minCustomers :23,
  maxCustomers : 65,
  avgspc :6.3,
  total : 0 ,
  cookiessale :[],
  getcookies : function(){
    for (let i=0 ; i<hours.length ; i++) {
      
     this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
     this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
    }
  },
  render : function(){

   const h2Element=document.createElement('h2');
   h2Element.textContent=this.local;
   shop.appendChild(h2Element);

   const ulElement=document.createElement('ul')
   shop.appendChild(ulElement);
   for(let i=0 ; i<hours.length ; i++){
     const liElement=document.createElement('li')
   liElement.textContent=` ${hours[i]} : ${this.cookiessale[i]}   cookies`
   ulElement.appendChild(liElement)


   }
   const totali=document.createElement('li');
   totali.textContent=` The total  ${this.total} cookies`;
   ulElement.appendChild(totali)
  },



}
const  Lima = {
  local :'Lima',
  minCustomers :23,
  maxCustomers : 65,
  avgspc :6.3,
  total : 0 ,
  cookiessale :[],
  getcookies : function(){
    for (let i=0 ; i<hours.length ; i++) {
      
     this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
     this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
    }
  },
  render : function(){

   const h2Element=document.createElement('h2');
   h2Element.textContent=this.local;
   shop.appendChild(h2Element);

   const ulElement=document.createElement('ul')
   shop.appendChild(ulElement);
   for(let i=0 ; i<hours.length ; i++){
     const liElement=document.createElement('li')
   liElement.textContent=` ${hours[i]} : ${this.cookiessale[i]}   cookies`
   ulElement.appendChild(liElement)


   }
   const totali=document.createElement('li');
   totali.textContent=` The total  ${this.total} cookies`;
   ulElement.appendChild(totali)
  },



}
seattle.getcookies();
seattle.render();
console.log(seattle.cookiessale);

Tokyo.getcookies();
Tokyo.render();
console.log(Tokyo.cookiessale);


Dubai.getcookies();
Dubai.render();
console.log(Dubai.cookiessale);


Paris.getcookies();
Paris.render();
console.log(Paris.cookiessale);


Lima.getcookies();
Lima.render();
console.log(Lima.cookiessale);



function randomnum(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
   
}

*/
const shop = document.getElementById('shop');
function cookie (local, minCustomers, maxCustomers, avgspc,) {
  this.local =local,
  this.minCustomers =minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgspc =avgspc,
  this.total = 0 ,
  this.cookiessale =[]
}
cookie.prototype.getAge = function(){
  for (let i=0 ; i<hours.length ; i++) {
    
   this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc));
   this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
  }
}




cookie.prototype.render = function(){

  let tableE1=document.createElement('table')
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tdEl.textContent = this.local;
  shop.appendChild(tableE1);
  tableE1.appendChild(trEl);
  for(var i = 1; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiessale[i];
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cookiessale[i]
  }}








/*cookie.prototype.render = function() {
  let articleElement = document.createElement('article');
  kittenProfiles.appendChild(articleElement);*/

  let seattle = new cookie('seattle', 23, 65,6.3);
  let Tokyo = new cookie('Tokyo', 3, 24,1.2);
  let Dubai = new cookie('Dubai', 11,	38,	3.7);
  let Paris = new cookie('Paris', 20,	38,	2.3);
  let Lima = new cookie('Lima', 2,	16,	4.6);
  
   seattle.getAge();
  console.log(seattle)
 seattle.render();

 Tokyo.getAge();
 console.log(Tokyo)
 Tokyo.render();
 
 Dubai.getAge();
  console.log(Dubai)
 Dubai.render();

  Paris.getAge();
  console.log(Paris)
  Paris.render();

  Lima.getAge();
  console.log(Lima)
  Lima.render();

 
 
 
 
 
 
  function randomnum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);}