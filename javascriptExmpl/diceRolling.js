function mainFunction(){
    var dice1=0;
    var dice2=0
    var countDice = new Array(12);
    countDice.fill(0,0,12);
    
    for (let i=0;i<1000;i++){
        dice1=Math.floor((Math.random() * 6) + 1); 
        dice2=Math.floor((Math.random() * 6) + 1); 
        sum = dice1+dice2;
        
        /*for (let j=0;j<12;j++)
         {
             if (sum==(j+1))
                countDice[j]+=1;
         }*/
         countDice[sum-1]=countDice[sum-1]+1;
    } 
    var destination = document.getElementById("mainSection");
    let newElement1 = document.createElement("div");
    destination.appendChild(newElement1);
    var tmpStr= ""
    for (let j=1;j<12;j++)
    {
        let newElement2 = document.createElement("div");
        var tmpStr= (j+1) +": "+ countDice[j];
        var newText = document.createTextNode(tmpStr);
        newElement1.appendChild(newText);
        newElement1.appendChild(newElement2);
   }   
}