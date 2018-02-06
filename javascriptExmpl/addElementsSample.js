
function mainFunction(){
   kata1();
   kata2();
   kata3();
   kata4();
   kata5();
   kata6();
   kata7();
   kata8();
   kata9();
   kata10();
   kata11();
   kata12();
   kata13();
   kata14();
   kata15();
   kata16();
   kata17();
   kata18();
   kata19();
   kata20();
   kata21();
   kata22();
   kata23();
}

// Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)
function kata1(){
       
        let newElement = document.createElement("article");
        newElement.className = "articleClass";
        let headingElement= document.createElement("h1");
        headingElement.className = "subHeadingClass";
        headingElement.appendChild(document.createTextNode("Display the numbers from 1 to 20."));
        newElement.appendChild(headingElement);
        var tmpStr="";
        
        for (let i=1;i<=20;i++){
            tmpStr+=i + " ";
        }
        
        var newText = document.createTextNode( tmpStr);
        newElement.appendChild(newText);
        var destination = document.getElementById("mainSection");
        destination.appendChild(newElement);
  
}
// Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)
function kata2(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=2;i<=20;i=i+2){
        tmpStr+=i + " ";
    }
    
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);

}
// Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)
function kata3(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=1;i<=20;i=i+2){
        tmpStr+=i + " ";
    }
    
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
function kata4(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=5;i<=100;i=i+5){
        tmpStr+=i + " ";
    }
    
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the square numbers up to 100. (1, 4, 9, ..., 81, 100)
function kata5(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("Display the square numbers up to 100. (1, 4, 9, ..., 81, 100)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    let check=true;
    let tmpNumber=1
    while (check){
        perfectSquareNumber=tmpNumber*tmpNumber
        tmpStr+= perfectSquareNumber + " ";
        tmpNumber=tmpNumber+1;
        if (perfectSquareNumber>=100)
           check =false;
    }
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
function kata6(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)"));
    newElement.appendChild(headingElement);
    var tmpStr="";
    
    for (let i=20;i>=1;i--){
        tmpStr+=i + " ";
    }
    
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
function kata7(){

}
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
function kata8(){

}
// Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
function kata9(){

}
// Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)
function kata10(){

}
// Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)
function kata11(){

}
// Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)
function kata12(){

}
// Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)
function kata13(){

}
// Display the square of each element in sampleArray. (219961, 570025, ..., 222784)
function kata14(){

}
// Display the sum of all the numbers from 1 to 20.
function kata15(){

}
// Display the sum of all the elements in sampleArray.
function kata16(){

}
// Display the smallest element in sampleArray.
function kata17(){

}
// Display the largest element in sampleArray.
function kata18(){

}
// Display 20 solid gray rectangles, each 20px high and 100px wide.
function kata19(){

}
// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
function kata20(){

}
// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
function kata21(){

}
// As in #21, but alternate colors so that every other rectangle is red.
function kata22(){

}
// As in #21, but color the rectangles with even widths red. 
function kata23(){

}