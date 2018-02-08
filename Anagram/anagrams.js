function getAnagram() {
    
    document.getElementById("anagram2").innerHTML="";
    var typedText = document.getElementById("textInput").value;
    var anagramWordList="";
    var j=0;
    for(word in words) {
        if (alphabetize(typedText)==alphabetize(words[word])){
            anagramWordList+= "  "+words[word]+", ";
            j++;
        }
     }
     anagramWordList=anagramWordList.slice(0,-2);
     var span = document.createElement("span");
        var textContent = document.createTextNode('List of Anagrams :' + anagramWordList );
        span.appendChild(textContent);
        document.getElementById("anagram2").appendChild(span);
 }
 
 
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}