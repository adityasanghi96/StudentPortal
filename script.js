let chk,c,row2;

$(document).ready(()=>{
    chk=0;
	c=0;
});

$(document).on('click', '#delb',()=>  
{
	let table=document.getElementById("table");
	let a=document.getElementById("tbody").childNodes;
	let count=0,flag=0;
	for(const ar of a)
	{
		count=count+1;
		let row=ar.firstChild.innerHTML;
		if(row==document.getElementById("rollno3").value)
		{
			table.deleteRow(count);
			window.alert("Record Deleted");
			flag=1;
			$('#delm').modal('hide');
		}
	}
	if(flag==0)
		window.alert("NO SUCH RECORD IN DATABASE");
	document.getElementsByName('form3')[0].reset();
	
});


$(document).on('click', '#editb', ()=> 
{
	if(chk==0)
	{
		let count=0;
		let table=document.getElementById("table");
		let arr=document.getElementById("tbody").childNodes;
		let flag=0;
		for(const ar of arr)
		{
			count=count+1;
			row2=ar;
			if(row2.firstChild.innerHTML==document.getElementById("rollno2").value)
			{
				flag=1;
				break;
			}
		}
		if(flag==0)
		{
			window.alert("NO SUCH RECORD IN DATABASE");
			document.getElementsByName('form2')[0].reset();
		}
		else
		{
		document.getElementById("bname2").style.display="block";
		document.getElementById("bemail2").style.display="block";
		document.getElementById("brollno2").style.display="none";
		chk=1;
		}
	}
	else
	{
		let pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
		let pttrn2=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		let name=document.getElementById("name2").value;
		let email=document.getElementById("email2").value;
		if(name == "")
		{
			window.alert("NAME CANNOT BE NULL");
		}
			
		else if(email == "")
		{
			window.alert("EMAIL CANNOT BE NULL");
		}
		else if(!pttrn1.test(name))
		{
			window.alert("ENTER FULL NAME IN CORRECT FORMAT");
		}
		else if(!pttrn2.test(email))
		{
			window.alert("ENTER EMAIL IN CORRECT FORMAT");
		}
		else
		{
		row2.childNodes[1].innerHTML=name;
		row2.childNodes[2].innerHTML=email;
		window.alert("Record Edited");
		document.getElementsByName('form2')[0].reset();
		chk=0;
		$('#editm').modal('hide');
		}
	}
	
});

$(document).on('click', '#submit', ()=> 
{

	let name=document.getElementById("name").value;
	let email=document.getElementById("email").value;
	let rollno=document.getElementById("rollno").value;
	let pttrn1=/[a-z A-Z]+\s[a-z A-Z]+/;
	let pttrn2=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	let pttrn3=/^[0-9]{10}$/;
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
		window.alert("ENTER FULL NAME IN CORRECT FORMAT");
	}
	else if(!pttrn2.test(email))
	{
		window.alert("ENTER EMAIL IN CORRECT FORMAT");
	}
	else if(!pttrn3.test(rollno))
	{
		window.alert("ENTER ROLL NO IN CORRECT FORMAT (10 digits)");
	}
	else
	{
		let a=document.createElement("tr");
		let b=document.createElement("td");
		let c=document.createTextNode(rollno);
		b.appendChild(c);
		a.appendChild(b);
		let e=document.createElement("td");
		let f=document.createTextNode(name);
		e.appendChild(f);
		a.appendChild(e);
		let m=document.createElement("td");
		let n=document.createTextNode(email);
		m.appendChild(n);
		a.appendChild(m);

		let  z=document.getElementById("tbody");
		z.appendChild(a);

		window.alert("Record Inserted");
		$('#regm').modal('hide');
		let frm = document.getElementsByName('form1')[0];
		frm.reset();
	}
});

let fn2 = () => {
	chk=0;
	document.getElementById("bname2").style.display="none";
	document.getElementById("bemail2").style.display="none";
	document.getElementById("brollno2").style.display="block";
	document.getElementsByName('form2')[0].reset();
};
