"use strict";

init();

 function init () {
     console.log("it starts here")
     hextorgb("#aa3456");
 }

 function hextorgb(hex) {
     const toR = hex.substring(1,3);
     const toG = hex.substring(3,5);
     const toB = hex.substring(5,7);

     const r = Number.parseInt(toR,16);
     const g = Number.parseInt(toG,16);
     const b = Number.parseInt(toB,16);

     console.log( "this is r value : "+ r + " this is g value :"+  g + " this is b value :" + b );

     toHex(r,g,b);
 }


 function toHex (r,g,b) {
     const hexR = r.toString(16);
     const hexG = g.toString(16);
     const hexB = b.toString(16);

     const hex = "#" + hexR + hexG + hexB ;
     console.log(hex);
     convert(); 

 }
 
 function convert () {

    const colorV = document.getElementById("colorBox");
    const colorBox = window.getComputedStyle( colorV ,null).getPropertyValue('background-color');

    console.log(colorBox);

    const rFirstIndex = colorBox.indexOf("(");
    const rSecondIndex = colorBox.indexOf(",");
    const gSecondIndex = colorBox.lastIndexOf(",");
    const bSecondIndex = colorBox.lastIndexOf(")");


 
    const r = colorBox.substring(rFirstIndex+1,rSecondIndex);
    const g = colorBox.substring(rSecondIndex+2,gSecondIndex);
    const b = colorBox.substring(gSecondIndex+2,bSecondIndex);
    console.log("Red: " + r);
    console.log("Green: " + g);
    console.log("Blue: " + b);

 }

