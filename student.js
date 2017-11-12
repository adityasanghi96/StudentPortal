
function res()
{
document.getElementById("name").innerHTML="";
document.getElementById("email").innerHTML="";
document.getElementById("rollno").innerHTML="";
}
function edits()
{
var a=document.getElementsByTagName("tr");
var i=1;
while(i<a.length)
{
	var row=a[i].firstChild.innerHTML;
	if(row==document.getElementById("rollno").value)
	{
		a[i].childNodes[1].innerHTML=document.getElementById("name").value;
		a[i].childNodes[2].innerHTML=document.getElementById("email").value;
	}
	i++;
}

var frm = document.getElementsByName('form1')[0];
frm.reset();
}

function editsub()
{
var array=document.getElementsByTagName("tr");
var flag=1;	
var i=1;

while(i<array.length)
{
	
	var row=array[i].firstChild.innerHTML;	
	if(row==document.getElementById("rollno").value)
	{flag=0;}
	i++;
}
if(flag==1)
{
window.alert("Record doesnt exist");
}
else
{
document.getElementById("bname").style.display="block";
document.getElementById("bemail").style.display="block";
document.getElementById("brollno").style.display="none";
document.getElementById("ed").style.display="inline";
document.getElementById("sub").style.display="none";
document.getElementById("res").style.display="inline";
document.getElementById("esub").style.display="none";
document.getElementById("edel").style.display="none";
}

}
function delstu()
{
var a=document.getElementsByTagName("tr");
var table=document.getElementById("table");
var i=1;
while(i<a.length)
{
	var row=a[i].firstChild.innerHTML;
	if(row==document.getElementById("rollno").value)
	{
		table.deleteRow(i);
	}
	i++;
}
}

function del()
{
document.getElementById("bname").style.display="none";
document.getElementById("bemail").style.display="none";
document.getElementById("brollno").style.display="block";
document.getElementById("esub").style.display="none";
document.getElementById("edel").style.display="block";
document.getElementById("sub").style.display="none";
document.getElementById("res").style.display="none";
document.getElementById("ed").style.display="none";

}
function Reg()
{
document.getElementById("bname").style.display="block";
document.getElementById("bemail").style.display="block";
document.getElementById("brollno").style.display="block";
document.getElementById("sub").style.display="inline";
document.getElementById("res").style.display="inline";
document.getElementById("esub").style.display="none";
document.getElementById("edel").style.display="none";
document.getElementById("ed").style.display="none";
}
function edit()
{
document.getElementById("bname").style.display="none";
document.getElementById("bemail").style.display="none";
document.getElementById("brollno").style.display="block";
document.getElementById("esub").style.display="block";
document.getElementById("edel").style.display="none";
document.getElementById("sub").style.display="none";
document.getElementById("res").style.display="none";
document.getElementById("ed").style.display="none";
}
function abc()
{
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var rollno=document.getElementById("rollno").value;
var pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
var pttrn2=/[a-z A-Z]+\.[a-z A-Z]+[@gmail.com]/;
var pttrn3=/^[0-9]{10}$/;
if(name == "")
	{
	window.alert("NAME CANNOT BE NULL");
	}
	
else if(email == "")
	{
	window.alert("EMAIL CANNOT BE NULL");
	}
else if(rollno == "")
	{
	window.alert("ROLLNO CANNOT BE NULL");
	}
else if(!pttrn1.test(name))
	{
	window.alert("ENTER NAME IN CORRECT FORMAT");
	}
else if(!pttrn2.test(email))
	{
	window.alert("ENTER EMAIL IN CORRECT FORMAT");
	}
else if(!pttrn3.test(rollno))
	{
	window.alert("ENTER ROLL NO IN CORRECT FORMAT");
	}
else{
var array=document.getElementsByTagName("tr");
var flag=1;	
var i=1;

while(i<array.length)
{
	
	var row=array[i].firstChild.innerHTML;	
	if(row==document.getElementById("rollno").value)
	{flag=0;}
	i++;
}

if(flag == 0)
{
	window.alert("RECORD ALREADY EXISTS");
}
else{
var a=document.createElement("tr");
var b=document.createElement("td");
var c=document.createTextNode(rollno);
b.appendChild(c);
a.appendChild(b);
var e=document.createElement("td");
var f=document.createTextNode(name);
e.appendChild(f);
a.appendChild(e);
var m=document.createElement("td");
var n=document.createTextNode(email);
m.appendChild(n);
a.appendChild(m);

var  z=document.getElementById("tbody");
z.appendChild(a);

var frm = document.getElementsByName('form1')[0];
frm.reset();
}
}
}
