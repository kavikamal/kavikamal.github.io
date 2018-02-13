function mainFunction(){
    var dest=document.getElementById("mainSection");
    //Add 2 numbers
    var divDest=document.createElement("div");
    divDest.setAttribute("id","sumDiv");
    var head=document.createElement("h3");
    head.textContent="Sum of 2 numbers";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","sumNum1");
    input1.setAttribute("class","inputClass");

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","sumNum2");
    input2.setAttribute("class","inputClass");

    var submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","addSubmit");
    submitBtn.setAttribute("value","Add");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","jsFunction(1)")
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(input2);
    divDest.appendChild(submitBtn);
    dest.appendChild(divDest);

    //Multiply 2 numbers
    divDest=document.createElement("div");
    divDest.setAttribute("id","multiplyDiv");
    head=document.createElement("h3");
    head.textContent="Multiply 2 numbers";

    input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","multiplyNum1");
    input1.setAttribute("class","inputClass");

    input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","multiplyNum2");
    input2.setAttribute("class","inputClass");

    submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","multiplySubmit");
    submitBtn.setAttribute("value","Multiply");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","jsFunction(2)");
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(input2);
    divDest.appendChild(submitBtn);
    dest.appendChild(divDest);
    
    // Power 
    divDest=document.createElement("div");
    divDest.setAttribute("id","powerDiv");
    head=document.createElement("h3");
    head.textContent="Raise number1 to the number2 power";

    input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","powerNum1");
    input1.setAttribute("class","inputClass");

    input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("id","powerNum2");
    input2.setAttribute("class","inputClass");

    submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","powerSubmit");
    submitBtn.setAttribute("value","Power");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","jsFunction(3)");
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(input2);
    divDest.appendChild(submitBtn);
    dest.appendChild(divDest);

    // Factorial 
    divDest=document.createElement("div");
    divDest.setAttribute("id","factorDiv");
    head=document.createElement("h3");
    head.textContent="Factorial of a number";

    input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","factorNum1");
    input1.setAttribute("class","inputClass");

    submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","factorSubmit");
    submitBtn.setAttribute("value","Factor");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","jsFunction(4)");
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(submitBtn);
    dest.appendChild(divDest);

    // Fibonacci 
    divDest=document.createElement("div");
    divDest.setAttribute("id","fiboDiv");
    head=document.createElement("h3");
    head.textContent="Find the nth fibonacci number";

    input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","fiboNum1");
    input1.setAttribute("class","inputClass");

    submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","fibosubmit");
    submitBtn.setAttribute("value","Fibonacci");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","jsFunction(5)");
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(submitBtn);
    dest.appendChild(divDest);

    fibo2(8);
    fibo2(9);
    fibo2(7);

}
    
function jsFunction(funcNo){
    let num1=0;
    let num2=0;
    var divDest;
    switch (parseInt(funcNo)){
    case 1:
        num1=Number(document.getElementById("sumNum1").value);
        num2=Number(document.getElementById("sumNum2").value);
        divDest=document.getElementById("sumDiv");
        appendResult(divDest,add(num1,num2));
        console.log("inside add",add(num1,num2));
        break;
    case 2:
        num1=Number(document.getElementById("multiplyNum1").value);
        num2=Number(document.getElementById("multiplyNum2").value);
        divDest=document.getElementById("multiplyDiv");
        appendResult(divDest,multiply(num1,num2));
        console.log("inside multiply",multiply(num1,num2));
        break;
    case 3:
        num1=Number(document.getElementById("powerNum1").value);
        num2=Number(document.getElementById("powerNum2").value);
        divDest=document.getElementById("powerDiv");
        appendResult(divDest,power(num1,num2));
        console.log("inside power",power(num1,num2));
        break;
    case 4:
        num1=Number(document.getElementById("factorNum1").value);
        divDest=document.getElementById("factorDiv");
        appendResult(divDest,factorial(num1));
        console.log("inside factor",factorial(num1));
        break;
    case 5: 
        num1=Number(document.getElementById("fiboNum1").value);
        divDest=document.getElementById("fiboDiv");
        appendResult(divDest,fibonacci(num1));
        console.log("inside fibonaci",fibonacci(num1));
        break;        
        
    }
}
//ADD
function add(num1,num2){
    var result=num1+num2;
    return result;
}
//MULTIPLY
function multiply(num1,num2){
    var result=0;
    for (let i=0;i<num1;i++)
     {
      result=add(result,num2);
     }
    return result;
}
//POWER
function power(num1,num2){
    var result=1;
    for (let i=0;i<num2;i=i+1){
       // result=multiply(result,multiply(num1,num1));
       result= multiply(result,num1);
    }
    return result;
}
//FACTORIAL
function factorial(num1){
    var result=1;
    while (num1>=2){
        result=multiply(result,multiply(num1,num1-1));
        num1=num1-2;
    }
    return result;
}
//FIBONACCI
function fibonacci(num1){
  var a=[0,1]; 
  for (let i=2;i<num1;i++){
      a[i]= add(a[i-2],a[i-1]);
    }
    return(a[num1-1]);
}

function appendResult(destDiv,result){
    var d=document.createElement("p");
    d.setAttribute("class","pClass");
    d.textContent="Result ===>  "+result;
    destDiv.appendChild(d);
    return;
}


function fibo2(num){
    result1=0;
    result2=1;
    for (i=2;i<num;i++)
         {
           finalResult= result1+result2;
           result1=result2;
           result2=finalResult;  
         }
         console.log("Fibo Vlaue ",num,"----",finalResult);
}