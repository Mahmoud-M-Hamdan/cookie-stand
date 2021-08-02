'use strict';




var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];



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

