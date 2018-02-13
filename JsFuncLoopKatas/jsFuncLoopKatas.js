function mainFunction(){
    var dest=document.getElementById("mainSection");
    var formDest = document.createElement("form");
    formDest.setAttribute("id", "myForm");
    //formDest.setAttribute("onsubmit","formSubmit()")
    dest.appendChild(formDest);
  
    //Add 2 numbers
    var divDest=document.createElement("div");
    divDest.setAttribute("id","sumDiv");
    var head=document.createElement("h3");
    head.textContent="Sum of 2 numbers";

    var input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","sumNum1");
    input1.setAttribute("name","sumNum1");
    input1.setAttribute("class","inputClass");

    var input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("name","sumNum2");
    input2.setAttribute("class","inputClass");

    var submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","addSubmit");
    submitBtn.setAttribute("value","Add");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","formSubmit(1)")
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(input2);
    divDest.appendChild(submitBtn);
    formDest.appendChild(divDest);

    //Multiply 2 numbers
    divDest=document.createElement("div");
    divDest.setAttribute("id","mutiplyDiv");
    head=document.createElement("h3");
    head.textContent="Multiply 2 numbers";

    input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("name","mutiplyNum1");
    input1.setAttribute("class","inputClass");

    input2=document.createElement("input");
    input2.setAttribute("type","text");
    input2.setAttribute("name","mutiplyNum2");
    input2.setAttribute("class","inputClass");

    submitBtn=document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("name","mutiplySubmit");
    submitBtn.setAttribute("value","Multiply");
    submitBtn.setAttribute("class","inputClass");
    submitBtn.setAttribute("onClick","formSubmit(2)");
    
    divDest.appendChild(head);
    divDest.appendChild(input1);
    divDest.appendChild(input2);
    divDest.appendChild(submitBtn);
    formDest.appendChild(divDest);

    console.log("sum",add(4,5));
    console.log("multiply",multiply(4,5));
    console.log("power",power(2,3));
    console.log("factorial",factorial(4));
    console.log("fibonacci", fibonacci(8));

}
    
function formSubmit(funcName){
    alert(funcName);
    let num1=0;
    let num2=0;
  if (Number(funcName)==1){
        num1=Number(document.getElementById("myForm").elements.namedItem("sumNum1").value);
        num2=Number(document.getElementById("myForm").elements.namedItem("sumNum2").value);
        console.log("inside add");
        alert(add(num1,num2));
  } else if (Number(funcName)==2){
        num1=Number(document.getElementById("myForm").elements.namedItem("multiplyNum1").value);
        num2=Number(document.getElementById("myForm").elements.namedItem("multiplyNum2").value);
        console.log(num2, num1);
        alert(multiply(num1,num2));
        
} 
}

function add(num1,num2){
    var result=num1+num2;
    return result;
}
function multiply(num1,num2){
    var result=0;
    for (let i=0;i<num1;i++)
     {
      result=add(result,num2);
     }
    return result;
}
function power(num1,num2){
    var result=0;
    for (let i=0;i<num2;i=i+2){
        result=add(result,multiply(num1,num1));
    }
    return result;
}

function factorial(num1){
    var result=1;
    for (let i=1;i<=num1;i=i+2){
        result=multiply(result,multiply(i,i+1));
    }
    return result;
}

function fibonacci(num1){
  var a=[0,1]; 
  for (let i=2;i<num1;i++){
      a[i]= add(a[i-2],a[i-1]);
    }
    return(a[num1-1]);
}