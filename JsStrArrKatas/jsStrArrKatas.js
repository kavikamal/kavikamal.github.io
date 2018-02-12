const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
var lotrCitiesArray1 =lotrCitiesArray;
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
var goCitiesArray = gotCitiesCSV.split(",");
var bestThingArray = bestThing.split(" ");
var tmpStr="";
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
   kata24();
   kata25();
   kata26();
   kata27();
   kata28();
   kata29();
   kata30();
   kata31();
   kata32();
}
// 1. Display an array from the cities in gotCitiesCSV
function kata1(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("1. Display an array from the cities in gotCitiesCSV"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    console.log(goCitiesArray);
    let newLineElement = document.createElement("br");
    /*var tmpStr="";
    for (let i=0;i<goCitiesArray.length;i++){
        tmpStr= (i+1)+". "+goCitiesArray[i];
        var newText = document.createTextNode(tmpStr);
        newElement.appendChild(newText);
        let newLineElement = document.createElement("br");
        newElement.appendChild(newLineElement);
    }*/
    newElement.textContent = JSON.stringify(goCitiesArray);
    destination.appendChild(newElement);
}
// 2. Display an array of words from the sentence in bestThing
function kata2(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("2. Display an array of words from the sentence in bestThing"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.appendChild(newLineElement);
  
    newElement.textContent = JSON.stringify(bestThingArray);
    destination.appendChild(newElement);
}
// 3. Display a string separated by semi-colons instead of commas from gotCitiesCSV
function kata3(){
    var citiesString=gotCitiesCSV.replace(/,/g,":");
    console.log("gotCitiesCSV--"+gotCitiesCSV);
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("3. Display a string separated by semi-colons instead of commas from gotCitiesCSV"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    newElement.textContent = JSON.stringify(citiesString);
    destination.appendChild(newElement);
}
// 4. Display a CSV (comma-separated) string from the lotrCitiesArray
function kata4(){
    var lotrCitiesStr= lotrCitiesArray.join(", ");
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("4. Display a CSV (comma-separated) string from the lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    newElement.textContent = JSON.stringify(lotrCitiesStr);
    destination.appendChild(newElement);
}
// 5. Display the first 5 cities in lotrCitiesArray
function kata5(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("5. Display the first 5 cities in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(lotrCitiesArray.slice(0,5));
    destination.appendChild(newElement);
}
// 6. Display the last 5 cities in lotrCitiesArray
function kata6(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("6. Display the last 5 cities in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(lotrCitiesArray1.slice(Math.max(lotrCitiesArray1.length - 5, 0)));
    destination.appendChild(newElement);
}
// 7. Display the 3rd to 5th city in lotrCitiesArray
function kata7(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("7. Display the 3rd to 5th city in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(lotrCitiesArray.slice(2,5));
    destination.appendChild(newElement);
}
// 8. Using splice, remove "Rohan" from lotrCitiesArray
function kata8(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("8. Using splice, remove 'Rohan' from lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.splice(2,1);
    newElement.textContent = JSON.stringify(lotrCitiesArray1);
    destination.appendChild(newElement);
}
// 9. Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray
function kata9(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("9. Using splice, remove all cities after 'Dead Marshes' in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.splice(5);
    newElement.textContent = JSON.stringify(lotrCitiesArray1);
    destination.appendChild(newElement);
}
// 10. Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"
function kata10(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("10. Using splice, add 'Rohan' back to lotrCitiesArray right after 'Gondor'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.splice(2,0,"Rohan");
    newElement.textContent = JSON.stringify(lotrCitiesArray1);
    destination.appendChild(newElement);
}
// 11. Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray
function kata11(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("11. Using splice, rename 'Dead Marshes' to 'Deadest Marshes' in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.splice(5,1,"Deadest Marshes");
    console.log("In 11",lotrCitiesArray1);
    newElement.textContent = JSON.stringify(lotrCitiesArray1);
    destination.appendChild(newElement);
}
// 12. Using slice, display the first 14 characters from bestThing
function kata12(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("12. Using slice, display the first 14 characters from bestThing"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(bestThing.slice(0,14));
    destination.appendChild(newElement);
}
// 13. Using slice, display the last 12 characters from bestThing
function kata13(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("13. Using slice, display the last 12 characters from bestThing"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(bestThing.slice(-12));
    destination.appendChild(newElement);
}
// 14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even"
function kata14(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("14. Using slice, display characters between the 23rd and 38th position of bestThing (i.e., 'boolean is even'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(bestThing.slice(23,38));
    destination.appendChild(newElement);
}
// 15. Repeat #13 using substring instead of slice.
function kata15(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("15. Repeat #13 using substring instead of slice."));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(bestThing.substring(bestThing.length-12));
    destination.appendChild(newElement);
}
// 16. Repeat #14 using substr instead of slice.
function kata16(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("16. Repeat #14 using substr instead of slice."));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(bestThing.substr(23,15));
    destination.appendChild(newElement);
}
// 17. Find and display the index of "only" in bestThing
function kata17(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("17. Find and display the index of 'only' in bestThing"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = "Index of 'only' is "+ bestThing.indexOf("only");
    destination.appendChild(newElement);
}
// 18. Find and display the index of the last word in bestThing
function kata18(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("18. Find and display the index of the last word in bestThing"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = "Index of the last word in best thing is "+ (bestThing.lastIndexOf(" ")+1);
    destination.appendChild(newElement);
}
// 19. Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)'

function kata19(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("19. Find and display all cities from gotCitiesCSV  that use double vowels ('aa','ee', etc.)"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmparr=[];
    var k=0;
    for (let i=0;i<goCitiesArray.length;i++){
        var b = ["aa","ee","ii","oo","uu"];
        console.log(goCitiesArray[i]);
        for (let j=0;j<b.length;j++){
            if  (goCitiesArray[i].includes(b[j]))
               tmparr[k++]=goCitiesArray[i]; 
    }
    }
    newElement.textContent = JSON.stringify(tmparr);
    destination.appendChild(newElement);
}
// 20. Find and display all cities from lotrCitiesArray that end with "or"
function kata20(){
    lotrCitiesArray1 =lotrCitiesArray;
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("20. Find and display all cities from lotrCitiesArray that end with 'or'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
   var tmparr=[];
    var k=0;
    for (let i=0;i<lotrCitiesArray1.length;i++){
            if  (lotrCitiesArray1[i].endsWith("or"))
               tmparr[k++]=lotrCitiesArray1[i]; 
    }
    newElement.textContent = JSON.stringify(tmparr);  
    destination.appendChild(newElement);
}

// 21. Find and display all the words in bestThing that start with a "b"
function kata21(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("21. Find and display all the words in bestThing that start with a 'b'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmpStr="";
   
    for (let i=0;i<bestThingArray.length;i++){
            if  (bestThingArray[i].startsWith("b"))
               tmpStr+=bestThingArray[i]+" "; 
    }
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 22. Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"
function kata22(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("22. Display 'Yes' or 'No' if lotrCitiesArray includes 'Mirkwood'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmpStr="No";
   if (lotrCitiesArray1.indexOf("Mirkwood")>-1)
                tmpStr="Yes"  
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 23. Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
function kata23(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("23. Display 'Yes' or 'No' if lotrCitiesArray includes 'Hollywood'"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmpStr="No";
    if (lotrCitiesArray1.indexOf("Hollywood")>-1)
         tmpStr="Yes" 
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 24. Display the index of "Mirkwood" in lotrCitiesArray
function kata24(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("24. Display the index of 'Mirkwood' in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmpStr="";
    tmpStr=lotrCitiesArray1.indexOf("Mirkwood");
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 25. Find and display the first city in lotrCitiesArray that has more than one word
function kata25(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("25. Find and display the first city in lotrCitiesArray that has more than one word"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    var tmpStr="";
    for (let i=0;i<lotrCitiesArray1.length;i++){
        if  (lotrCitiesArray1[i].includes(" ")){
           tmpStr+=lotrCitiesArray1[i];
           break;
        } 
    }
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 26. Reverse the order in lotrCitiesArray
function kata26(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("26. Reverse the order in lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(lotrCitiesArray1.reverse());  
    destination.appendChild(newElement);
}
// 27. Sort lotrCitiesArray alphabetically
function kata27(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("27. Sort lotrCitiesArray alphabetically"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    newElement.textContent = JSON.stringify(lotrCitiesArray1.sort());  
    destination.appendChild(newElement);
}
// 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
function kata28(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode(" 28. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    // sort by length
    tmpArr=lotrCitiesArray1.sort(function(a, b) {
    var lenA = a.length; 
    var lenB = b.length; 
    if (lenA < lenB) {
      return -1;
    }
    if (lenA > lenB) {
      return 1;
    }
    return 0;
    });
    newElement.textContent = JSON.stringify(tmpArr);  
    destination.appendChild(newElement);
}
// 29. Using pop, remove the last city from lotrCitiesArray
function kata29(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("29. Using pop, remove the last city from lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    tmpStr=lotrCitiesArray1.pop();
    newElement.textContent = JSON.stringify(tmpStr);  
    destination.appendChild(newElement);
}
// 30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
function kata30(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("30. Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.push(tmpStr)
    newElement.textContent = JSON.stringify(lotrCitiesArray1);  
    destination.appendChild(newElement);
}
// 31. Using shift, remove the first city from lotrCitiesArray
function kata31(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("31. Using shift, remove the first city from lotrCitiesArray"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    tmpStr=lotrCitiesArray1.shift();
    newElement.textContent = JSON.stringify(lotrCitiesArray1);  
    destination.appendChild(newElement);
}
// 32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
function kata32(){
    var destination = document.getElementById("mainSection");
    let headingElement= document.createElement("h3");
    headingElement.className = "subHeadingClass";
    headingElement.appendChild(document.createTextNode("32. Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array"));
    destination.appendChild(headingElement);
    let newElement = document.createElement("article");
    newElement.className = "articleClass";
    let newLineElement = document.createElement("br");
    lotrCitiesArray1.unshift(tmpStr)
    newElement.textContent = JSON.stringify(lotrCitiesArray1);  
    destination.appendChild(newElement);
}