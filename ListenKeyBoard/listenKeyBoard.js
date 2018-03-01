'use strict';
var boxtop=200;
var boxleft=200;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName=="ArrowDown"){
  boxtop=boxtop+10;    
  document.getElementById("box").style.top = boxtop + "px";
  document.getElementById("box").style.backgroundImage= "url(smiley1.jpeg)";
  }
  else if (keyName=="ArrowUp"){
    boxtop=boxtop-10;    
    document.getElementById("box").style.top = boxtop + "px";
    document.getElementById("box").style.backgroundImage= "url(smiley2.jpeg)";
    }
  else if (keyName=="ArrowLeft"){
        boxleft=boxleft-10;    
        document.getElementById("box").style.left = boxleft + "px";
        document.getElementById("box").style.backgroundImage= "url(smiley3.jpeg)";
    } 
  else if (keyName=="ArrowRight"){
            boxleft=boxleft+10;    
            document.getElementById("box").style.left = boxleft + "px";
            document.getElementById("box").style.backgroundImage= "url(smiley4.jpeg)";
    }      
  console.log('keydown event\n\n' + 'key: ' + keyName);
});