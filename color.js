"use strict";
document.querySelector("input").addEventListener("input",init);


 function init () {
     const input = document.querySelector("input").value ;
     console.log(input);
     hextorgb(input);
     
     
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
     convert(r,g,b);
 }


 function toHex (r,g,b) {
     const hexR = r.toString(16);
     const hexG = g.toString(16);
     const hexB = b.toString(16);

     const hex = "#" + hexR + hexG + hexB ;
     console.log(hex);
     document.querySelector("#hexC").textContent = hex ;

 }
 
 function convert (rr,gg,bb) {
    const colorBox = "(" + rr + ", " + gg + ", " + bb + ")"

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
    document.querySelector("#rgbC").textContent = "this is r value : "+ r + " this is g value :"+  g + " this is b value :" + b ;
    toHls( r , g , b);

 }

 function toHls (r,g,b) {
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
  
    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    document.querySelector("#hsl").textContent = "hsl("+h+"%,"+s+"%,"+l+"%)" ;
 }

