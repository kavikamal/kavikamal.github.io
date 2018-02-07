function convertNumToWords(){

    var destination = document.getElementById("numToWordArticle");
    for (let i=1;i<=10;i++){
        let newElement = document.createElement("div");
        var tmpStr= (i) +": "+ "hello";
        var newText = document.createTextNode(tmpStr);
        newElement.appendChild(newText);
        destination.appendChild(newElement);
   }
}