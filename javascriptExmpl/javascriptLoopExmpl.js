$(document).ready(function (){

for (var i = 1; i < 1001 ; i++){
    var tmp="";
    if ((i%2==0) && (i%3==0))
          tmp = "<strong><font color='red'>" + i + "</font></strong>,";  
    else if (i%2==0)
        if (i==1000)
          tmp=" <strong>" + i + "</strong>";  
        else      
        tmp=" <strong>" + i + "</strong>,"; 
    else if (i%3==0)
        tmp=" <font color='red'>" + i + "</font>,"; 
    else    
        tmp= " "+i+",";
    document.getElementById("content").innerHTML += tmp; 
}
}); 