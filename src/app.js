/*
* File:app.js
* Author: Verebélyi Ivett
* Copyright: 2023, Verebélyi Ivett
* Group: Szoft I-2  E
* Date: 2023-01-26
* Github: https://github.com/IvettAdel/Trapter
* Licenc: GNU GPL
*/

const asideElem = document.querySelector("#aside");
const asideElem = document.querySelector("#bside");
const asideElem = document.querySelector("#cside");
const asideElem = document.querySelector("#dside");
cons calcButton = document.querySelector("#calcButton");
const asideElem = document.querySelector("#area");

calcButton.addEventlistener('click', () => {
   // console.log('működik')
    let aside = Number(asideElem.value);
    let aside = Number(asideElem.value);
    let aside = Number(asideElem.value);
    let aside = Number(asideElem.value);
    let area = calcArea(aside, bside, cside, dside);
    HTMLTextAreaElement.value = area;
    //console.log(area)
});
function calcArea(a,b,c,d) {
    let terulet = ( (a+c)/(4*(a-c))) 
    * Math.sqrt(
        (a+b-c+d)*
        (a-b-c+d)*
        (a+b-c-d)*
        (-a+b+c+d)
        )
    
    return terület;
}