function convertNumToWords(){

    var destination = document.getElementById("numToWordArticle");
    const oneName=["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const specialName=["","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tenName = ["", "ten", "twenty", "thirty", "forty", "fifty",
                 "sixty", "seventy", "eighty", "ninety"];
    const hundredName = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred",
                 "six hundred", "seven hundred", "eight hundred", "nine hundred"]; 
     var numInWord="";  
     var tmpNumInStr="";      
    for (let i=0;i<1000;i++)
     {
        tmpNumInStr=""+(i+1);
        var len=tmpNumInStr.length;
        var special=false;
        if  (((i+1)%100)>10 && ((i+1)%100)<20){
            special=true;
        }
        if ((i+1)>10 && (i+1)<20)
           {
            numInWord= specialName[i-9];
           } 
        else if (len==4){
             numInWord="One Thousand";
        }  
        else {  
            if (len==3) {
                if (special)
                   numInWord=""+hundredName[parseInt(tmpNumInStr[0])]+" and "+specialName[parseInt(tmpNumInStr[2])];
                else 
                   numInWord=""+hundredName[parseInt(tmpNumInStr[0])]+" and "+tenName[parseInt(tmpNumInStr[1])]+" "+oneName[parseInt(tmpNumInStr[2])];
            }
            else if (len==2){
                if (special)
                   numInWord=""+hundredName[parseInt(tmpNumInStr[0])]+" and "+specialName[parseInt(tmpNumInStr[1])];
                else   
                   numInWord=""+tenName[parseInt(tmpNumInStr[0])]+" "+oneName[parseInt(tmpNumInStr[1])];  
            }else{
                numInWord=""+oneName[parseInt(tmpNumInStr[0])];
            }

        }
        let newElement = document.createElement("div");
        let tmpStr= "       "+(i+1) +": "+ numInWord;
        let newText = document.createTextNode(tmpStr);
        newElement.appendChild(newText);
        destination.appendChild(newElement);    
        }
}
   
