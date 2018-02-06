
function mainFunction(){
   var sampleArray = randomArray(50,500);
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
   kata11(sampleArray);
   kata12(sampleArray);
   kata13(sampleArray);
   kata14(sampleArray);
   kata15(sampleArray);
   kata16(sampleArray);
   kata17(sampleArray);
   kata18(sampleArray);
   kata19();
   kata20();
   kata21(sampleArray);
   kata22(sampleArray);
   kata23(sampleArray);
}
function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}
// Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)
function kata1(){
       
        let newElement = document.createElement("article");
        newElement.className = "articleClass";
        let headingElement= document.createElement("h1");
        headingElement.className = "subHeadingClass";
        headingElement.appendChild(document.createTextNode("1--Display the numbers from 1 to 20."));
        newElement.appendChild(headingElement);
        var tmpStr="";
        
        for (let i=1;i<=20;i++){
            tmpStr+=i + ", ";
        }
        tmpStr=tmpStr.slice(0, -2);
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
    headingElement.appendChild(document.createTextNode("2--Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=2;i<=20;i=i+2){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
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
    headingElement.appendChild(document.createTextNode("3--Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=1;i<=20;i=i+2){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
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
    headingElement.appendChild(document.createTextNode("4--Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    
    for (let i=5;i<=100;i=i+5){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
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
    headingElement.appendChild(document.createTextNode("5--Display the square numbers up to 100. (1, 4, 9, ..., 81, 100)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    let check=true;
    let tmpNumber=1
    while (check){
        perfectSquareNumber=tmpNumber*tmpNumber
        tmpStr+= perfectSquareNumber + ", ";
        tmpNumber=tmpNumber+1;
        if (perfectSquareNumber>=100)
           check =false;
    }
    tmpStr=tmpStr.slice(0, -2);
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
    headingElement.appendChild(document.createTextNode("6--Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)"));
    newElement.appendChild(headingElement);
    var tmpStr="";
    
    for (let i=20;i>=1;i--){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
function kata7(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("7--Display the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)"));
    newElement.appendChild(headingElement);
    var tmpStr="";
    
    for (let i=20;i>1;i=i-2){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
function kata8(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("8--Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)"));
    newElement.appendChild(headingElement);
    var tmpStr="";
    
    for (let i=19;i>=1;i=i-2){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
function kata9(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("9--Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)"));
    newElement.appendChild(headingElement);
    var tmpStr="";
     for (let i=100;i>=5;i=i-5){
        tmpStr+=i + ", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)
function kata10(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("10--Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    for (let i=10;i>=1;i--)
    {
        tmpStr+=(i*i)+", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)
function kata11(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("11--Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    for (let i=0;i<20;i++)
    {
        tmpStr+=smplArr[i]+", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)
function kata12(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("12--Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    for (let i=0,j=0;i<smplArr.length && j<20;i++)
    {
        if ((smplArr[i]%2)==0){
            tmpStr+=smplArr[i]+", ";
            j++;
        }   
    }
    tmpStr=tmpStr.slice(0, -2);
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)
function kata13(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("13--Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    for (let i=0,j=0;i<smplArr.length && j<20;i++)
    {
        if ((smplArr[i]%2)!=0){
            tmpStr+=smplArr[i]+", ";
            j++;
        }   
    }
    tmpStr=tmpStr.slice(0, -2);
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the square of each element in sampleArray. (219961, 570025, ..., 222784)
function kata14(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("14--Display the square of each element in sampleArray. (219961, 570025, ..., 222784)"));
    newElement.appendChild(headingElement);
    let tmpStr="";
    for (let i=0;i<20;i++)
    {
        tmpStr+=(smplArr[i]*smplArr[i])+", ";
    }
    tmpStr=tmpStr.slice(0, -2);
    let newText = document.createTextNode(tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the sum of all the numbers from 1 to 20.
function kata15(){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("15--Display the sum of all the numbers from 1 to 20."));
    newElement.appendChild(headingElement);
    var tmpStr="";
    let j=0;
    for (let i=1;i<=20;i++){
        j=j+i;
    }
    tmpStr+=j;
    
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the sum of all the elements in sampleArray.
function kata16(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("16--Display the sum of all the elements in sampleArray."));
    newElement.appendChild(headingElement);
    var tmpStr="";
    let j=0;
    for (let i=0;i<20;i++){
        j=j+smplArr[i];
    }
    tmpStr+=j;
    
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the smallest element in sampleArray.
function kata17(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("17--Display the smallest element in sampleArray."));
    newElement.appendChild(headingElement);
    var tmpStr="";
    let j=smplArr[0];
    for (let i=0;i<20;i++){
        if (smplArr[i]<j)
          j=smplArr[i];
    }
    tmpStr+=j;
    
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display the largest element in sampleArray.
function kata18(smplArr){
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("18--Display the largest element in sampleArray."));
    newElement.appendChild(headingElement);
    var tmpStr="";
    let j=smplArr[0];
    for (let i=0;i<20;i++){
        if (smplArr[i]>j)
          j=smplArr[i];
    }
    tmpStr+=j;
    var newText = document.createTextNode( tmpStr);
    newElement.appendChild(newText);
    var destination = document.getElementById("mainSection");
    destination.appendChild(newElement);
}
// Display 20 solid gray rectangles, each 20px high and 100px wide.
function kata19(){
    let newElement = document.createElement("section");
    newElement.setAttribute("id", "section1");
    newElement.className = "sectionClass";
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("19--Display 20 solid gray rectangles, each 20px high and 100px wide."));
    
    var destination = document.getElementById("mainSection");
    destination.appendChild(headingElement);
    destination.appendChild(newElement);
     
    destination = document.getElementById("section1");
    
    for (i=0;i<20;i++){
        let newElement1 = document.createElement("div");
        let newElement2 = document.createElement("div");
        newElement1.className = "drawRect";
        newElement2.className="spaceClass";
        destination.appendChild(newElement1);
        destination.appendChild(newElement2);
    }
    
     
}
//20--Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
function kata20(){
    let newElement = document.createElement("section");
    newElement.setAttribute("id", "section2");
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("20--Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above)."));
    
    var destination = document.getElementById("mainSection");
    destination.appendChild(headingElement);
    destination.appendChild(newElement);
     
    destination = document.getElementById("section2");
    let widthDiv=105;
    for (i=0;i<20;i++){
        let newElement1 = document.createElement("div");
        let newElement2 = document.createElement("div");
        newElement1.style.width = widthDiv+'px';
        widthDiv+=5;
         newElement1.className = "drawRect1";
        newElement2.className="spaceClass";
        destination.appendChild(newElement1);
        destination.appendChild(newElement2);
    }
    
}
//21--Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
function kata21(smplArr){
    let newElement = document.createElement("section");
    newElement.setAttribute("id", "section3");
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("21--Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray."));
    
    var destination = document.getElementById("mainSection");
    destination.appendChild(headingElement);
    destination.appendChild(newElement);
     
    destination = document.getElementById("section3");
    let widthDiv;
    for (i=0;i<20;i++){
        let newElement1 = document.createElement("div");
        let newElement2 = document.createElement("div");
        widthDiv=smplArr[i];
        newElement1.style.width = widthDiv+'px';
        newElement1.className = "drawRect1";
        newElement2.className="spaceClass";
        destination.appendChild(newElement1);
        destination.appendChild(newElement2);
    }
    
}
//22--As in #21, but alternate colors so that every other rectangle is red.
function kata22(smplArr){
    let newElement = document.createElement("section");
    newElement.setAttribute("id", "section4");
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("22--As in #21, but alternate colors so that every other rectangle is red."));
    
    var destination = document.getElementById("mainSection");
    destination.appendChild(headingElement);
    destination.appendChild(newElement);
     
    destination = document.getElementById("section4");
    let widthDiv;
    for (i=0;i<20;i++){
        let newElement1 = document.createElement("div");
        let newElement2 = document.createElement("div");
        widthDiv=smplArr[i];
        newElement1.style.width = widthDiv+'px';
        if (i%2!=0)
         newElement1.style.backgroundColor="red";
        newElement1.className = "drawRect1";
        newElement2.className="spaceClass";
        destination.appendChild(newElement1);
        destination.appendChild(newElement2);
    }
    
}
//23--As in #21, but color the rectangles with even widths red. 
function kata23(smplArr){
    let newElement = document.createElement("section");
    newElement.setAttribute("id", "section5");
    let headingElement= document.createElement("h1");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("22--As in #21, but alternate colors so that every other rectangle is red."));
    
    var destination = document.getElementById("mainSection");
    destination.appendChild(headingElement);
    destination.appendChild(newElement);
     
    destination = document.getElementById("section5");
    let widthDiv;
    for (i=0;i<20;i++){
        let newElement1 = document.createElement("div");
        let newElement2 = document.createElement("div");
        widthDiv=smplArr[i];
        newElement1.style.width = widthDiv+'px';
        if (widthDiv%2==0)
          newElement1.style.backgroundColor="red";
        newElement1.className = "drawRect1";
        newElement2.className="spaceClass";
        destination.appendChild(newElement1);
        destination.appendChild(newElement2);
    }
}