var numero = prompt("Digite um número: ");

function tabuada()
{
	document.write("<ul>");
	for(var i=1; i<=10; i++)
	{
		document.write("<li>"+(numero*i)+"</li>");
	}
	document.write("</ul>");
}

tabuada();