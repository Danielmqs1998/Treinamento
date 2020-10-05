function mudarcor1(){
		
		document.getElementById("seletor-cores").style.backgroundColor="rgb(20,150,200)";
		document.getElementById("form1").style.backgroundColor= "rgb(20,150,200)";
		document.getElementById("form2").style.backgroundColor= "rgb(20,150,200)";
}
function mudarcor2(){
	
		document.getElementById("seletor-cores").style.backgroundColor="green";
		document.getElementById("form1").style.backgroundColor="green";
		document.getElementById("form2").style.backgroundColor="green";
}
function mudarcor3(){

		document.getElementById("seletor-cores").style.backgroundColor="orange";
		document.getElementById("form1").style.backgroundColor="orange";
		document.getElementById("form2").style.backgroundColor="orange";
}
function soma(){
    var a = +document.getElementById("numa").value;
	var b = +document.getElementById("numb").value;
	var c = a + b;

	res = c;
	document.getElementById("res").innerHTML = c;
	
	var res = document.createElement("li");
	var texto = document.createTextNode(c);
	res.appendChild(texto);
	document.getElementById("listares").appendChild(res);
	
	
	if((document.getElementById("listares").childElementCount >15))
	{
		document.getElementById("listares").firstElementChild.remove();
	}
	
	
}
function sub(){
    
    var a = +document.getElementById("numa").value;
	var b = +document.getElementById("numb").value;
	var c = a - b;
	var texto;
	texto = c;
	document.getElementById("res").innerHTML = c;
	

	var res = document.createElement("li");
	var texto = document.createTextNode(c);
	res.appendChild(texto);
	document.getElementById("listares").appendChild(res);
	
	
	if((document.getElementById("listares").childElementCount >15))
	{
		document.getElementById("listares").firstElementChild.remove();
	}
	
	
}
function mult(){
    
    var a = +document.getElementById("numa").value;
	var b = +document.getElementById("numb").value;
	var c = a * b;
	var texto;
	texto = c;
	document.getElementById("res").innerHTML = c;
	
	var res = document.createElement("li");
	var texto = document.createTextNode(c);
	res.appendChild(texto);
	document.getElementById("listares").appendChild(res);
	
	
	if((document.getElementById("listares").childElementCount >15))
	{
		document.getElementById("listares").firstElementChild.remove();
	}
}
function div(){
    
    var a = +document.getElementById("numa").value;
	var b = +document.getElementById("numb").value;
	var c = a / b;
	var texto;
	texto = c;
	document.getElementById("res").innerHTML = c;	
	
	var res = document.createElement("li");
	var texto = document.createTextNode(c);
	res.appendChild(texto);
	document.getElementById("listares").appendChild(res);
	
	
	if((document.getElementById("listares").childElementCount >15))
	{
		document.getElementById("listares").firstElementChild.remove();
	}
}