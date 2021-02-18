"use strict";

randomBackground();
function randomBackground () {
     
     const theColor = randomColor();
     const theString = rgbToCss(theColor);
     document.getElementById("colorBox1").style.backgroundColor = theString ;

}
function randomColor () {
     const r = Math.floor(Math.random()*256) ;
     const g = Math.floor(Math.random()*256) ;
     const b = Math.floor(Math.random()*25) ;
     return {r,g,b};
}
function rgbToCss (theColor) {
     const finalString = "rgb("+ theColor.r.toString()+", " + theColor.g.toString()+", " + theColor.b.toString() +")";
     console.log(finalString);
     return finalString;
}

document.querySelector("#colorPicker").addEventListener("input",init);


 function init () {
     const harmonie = document.querySelector("#harmonyChoice").value ;
     const input = document.querySelector("#colorPicker").value ;
     console.log(input);
     let rgbObject = hextorgb(input);
     console.log(rgbObject);

     let rgbShow = convert(rgbObject);
     let theShow = rgbToCss(rgbObject);
     let finalHex = toHex(rgbObject);
     
     let finalHsl = toHls(rgbObject);
     //let finalrgb = hslToRgb(finaltHsl);
     
     

     for ( let index = 1 ; index <= 5 ; index++ ) {
      if ( harmonie === "analogous" , index == 2 ) {
        theShow = "rgb("+ (rgbObject.r.toString()-40 )+", " + rgbObject.g.toString()+", " + rgbObject.b.toString() +")" ;
      console.log(theShow);
      showRgb(rgbShow , index) ; 
      changeBack (theShow , index) ;
      showHex(finalHex , index) ;
      showHsl(finalHsl , index) ;
      } else if ( harmonie === "analogous"   ) {
      
      showRgb(rgbShow , index) ; 
      changeBack (theShow , index) ;
      showHex(finalHex , index) ;
      showHsl(finalHsl , index) ;
        
      }
      
     }
     //more steps 
     
     
     
 }

function showRgb (rgb , index) {
     document.querySelector(`#colorBox${index} .rgbC`).textContent = rgb ;
}
function showHex (hex , index) {
    document.querySelector(`#colorBox${index} .hexC`).textContent = hex ; 
}
function showHsl (hsl , index) {
    document.querySelector(`#colorBox${index} .hsl`).textContent = hsl ;
}
function changeBack (change , index) {
    document.getElementById(`colorBox${index}`).style.backgroundColor = change ;
}

 function hextorgb(hex) {
     const toR = hex.substring(1,3);
     const toG = hex.substring(3,5);
     const toB = hex.substring(5,7);

     const r = Number.parseInt(toR,16);
     const g = Number.parseInt(toG,16);
     const b = Number.parseInt(toB,16);

     console.log( "this is r value : "+ r + " this is g value :"+  g + " this is b value :" + b );
     return {r,g,b} 
     
 }

 function toHex (rgbObject) {
     const hexR = rgbObject.r.toString(16).padStart(2,"0");
     const hexG = rgbObject.g.toString(16).padStart(2,"0");
     const hexB = rgbObject.b.toString(16).padStart(2,"0");

     const hex = "#" + hexR + hexG + hexB ;
     console.log(hex);
     return hex ;

 }

 
 
 function convert (rgbObject) {
    const colorBox = "(" + rgbObject.r + ", " + rgbObject.g+ ", " + rgbObject.b+ ")" ;

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
    return  "this is r value : "+ r + " this is g value :"+  g + " this is b value :" + b ;
    

 }


 function hslToRgb( hsl ) {
  const h = hsl.h;
  const s = hsl.s / 100;
  const l = hsl.l / 100;
 
let c = (1 - Math.abs(2 * l - 1)) * s,
x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
m = l - c / 2,
r = 0,
g = 0,
b = 0;
if (0 <= h && h < 60) {
r = c;
g = x;
b = 0;
} else if (60 <= h && h < 120) {
r = x;
g = c;
b = 0;
} else if (120 <= h && h < 180) {
r = 0;
g = c;
b = x;
} else if (180 <= h && h < 240) {
r = 0;
g = x;
b = c;
} else if (240 <= h && h < 300) {
r = x;
g = 0;
b = c;
} else if (300 <= h && h < 360) {
r = c;
g = 0;
b = x;
}
r = Math.round((r + m) * 255);
g = Math.round((g + m) * 255);
b = Math.round((b + m) * 255);

return {r,g,b};
}


 function toHls (rgbObject) {
     let r = rgbObject.r
     let g = rgbObject.g 
     let b = rgbObject.b

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
    h = h.toFixed()
    s = s.toFixed()
    l = l.toFixed()
    return {h,s,l}
 }

