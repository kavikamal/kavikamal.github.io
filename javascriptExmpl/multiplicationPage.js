function myFunction()
{
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    var color = document.getElementById("color1").value;
    var tmp="";
    var tableHeadStyle="tableHeadingClass";
    if (color==1)
        tableHeadStyle+="1";
    else if (color==2)
         tableHeadStyle+="2";  
    else if (color==3)
         tableHeadStyle+="3";
    else if (color==4)
         tableHeadStyle+="4";                

    document.getElementById("mutiplicationTable").innerHTML = "";
    tmp+= "<br><br>";
    tmp +="<table class='multiTableClass'>";
    for (row=-1; row<=x; row++) {
            tmp +="<tr>";
            if (row==-1)
              tmp +="<th class='"+tableHeadStyle+"'> * </th>";
            else
              tmp +="<th class='"+tableHeadStyle+"'>" + row  + "</th>";
            for (col=0; col<=y; col++) {
              if (row==-1)
                  tmp +="<th class='"+tableHeadStyle+"'>" + col + "</th>";
             else
                tmp +="<td>" + row*col  + "</td>"; 
            }  
            tmp +="</tr>";
    }
   tmp +="</table>";

   document.getElementById("mutiplicationTable").innerHTML +=tmp

   console.log(tmp);
}


