'use strict';






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

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const shop = document.getElementById('shop');
let all=[]
function cookie (local, minCustomers, maxCustomers, avgspc,) {
  this.local =local,
  this.minCustomers =minCustomers,
  this.maxCustomers = maxCustomers,
  this.avgspc =avgspc,
  this.total = 0 ,
  this.cookiessale =[]
  all.push(this);
}
cookie.prototype.getAge = function(){
  for (let i=0 ; i<hours.length ; i++) {
    
   this.cookiessale.push(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc));
   this.total +=(Math.ceil(randomnum(this.minCustomers,this.maxCustomers)*this.avgspc))
  }
}




cookie.prototype.render = function(){

  
  let trEl = document.createElement('tr');
  shop.appendChild(trEl)

  let thEl = document.createElement('th');
  thEl.textContent = this.local;
  trEl.appendChild(thEl);
  
  for(var i = 0; i < hours.length; i++){
    let tdEl = document.createElement('td');
    tdEl.textContent = this.cookiessale[i];
    trEl.appendChild(tdEl);
    
  }
  
    let tdEl = document.createElement('td');
    tdEl.textContent = this.total;
    trEl.appendChild(tdEl);
}


function tableHeader(){

  let trEl = document.createElement('tr');
  shop.appendChild(trEl)

hours.unshift('');
hours.push('Daily Total');

  for(var i = 0; i < hours.length; i++){
    let thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    
  }
  hours.shift();
  hours.pop()
}


function tableFooter(){

  let trEl = document.createElement('tr');
  shop.appendChild(trEl)

  let totalelement = document.createElement('th');
    totalelement.textContent = 'totalOfTotal';
    trEl.appendChild(totalelement);
  
  for(var i = 0; i < hours.length; i++){
    let dailyTotal=0;
    for (let j=0 ; j<all.length;j++){
    dailyTotal += all[j].cookiessale[i]
  }
    let thEl = document.createElement('th');
    thEl.textContent = dailyTotal;
    trEl.appendChild(thEl);
  }
  let totalOfTotal =0
  for (let j=0 ; j<all.length;j++){
totalOfTotal +=all[j].total
}

let thEl = document.createElement('th');
    thEl.textContent = totalOfTotal;
    trEl.appendChild(thEl);

  }



/*cookie.prototype.render = function() {
  let articleElement = document.createElement('article');
  kittenProfiles.appendChild(articleElement);*/

  let seattle = new cookie('seattle', 23, 65,6.3);
  let Tokyo = new cookie('Tokyo', 3, 24,1.2);
  let Dubai = new cookie('Dubai', 11,	38,	3.7);
  let Paris = new cookie('Paris', 20,	38,	2.3);
  let Lima = new cookie('Lima', 2,	16,	4.6);
 
  tableHeader()

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

 
  tableFooter()
 
 
 
 
  function randomnum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);}