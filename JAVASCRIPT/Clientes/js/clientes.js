
var check = false;
var total = 1;


function adicionar()
{
	if(check==true)
	{
		var nome = prompt("DIGITE UM NOME PARA O CLIENTE: ");
		var idade = prompt("DIGITE UMA IDADE PARA O CLIENTE: ");
		var telefone = prompt("DIGITE UM TELEFONE PARA O CLIENTE: ");
		var email = prompt("DIGITE UM EMAIL PARA O CLIENTE: ");
		
		
		var novo = document.createElement("div");
		novo.setAttribute("class","form1");
		novo.setAttribute("id","cliente"+total);
		
		//insere id
		var valorid = document.createTextNode("ID: "+total);		
		var insereid = document.createElement("p");
		insereid.appendChild(valorid);
		novo.appendChild(insereid);
	
		//insere nome
		var valornome = document.createTextNode("NOME: "+nome);		
		var inserenome = document.createElement("p");
		inserenome.appendChild(valornome);
		novo.appendChild(inserenome);
	
		//insere idade
		var valoridade = document.createTextNode("IDADE: "+idade);		
		var insereidade = document.createElement("p");
		insereidade.appendChild(valoridade);
		novo.appendChild(insereidade);
	
		//insere idade
		var valortel = document.createTextNode("TELEFONE: "+telefone);		
		var inseretel = document.createElement("p");
		inseretel.appendChild(valortel);
		novo.appendChild(inseretel);
	
		//insere idade
		var valoremail = document.createTextNode("EMAIL: "+email);		
		var insereemail = document.createElement("p");
		insereemail.appendChild(valoremail);
		novo.appendChild(insereemail);
	
		document.body.appendChild(novo);
		total++;
	}
	else
	{	
		var nome = prompt("DIGITE UM NOME PARA O CLIENTE: ");
		var idade = prompt("DIGITE UMA IDADE PARA O CLIENTE: ");
		var telefone = prompt("DIGITE UM TELEFONE PARA O CLIENTE: ");
		var email = prompt("DIGITE UM EMAIL PARA O CLIENTE: ");
		
		document.getElementById("idcod").innerText = "ID: "+total;
		document.getElementById("nome").innerText = "NOME: "+nome;
		document.getElementById("idade").innerText = "IDADE: "+idade;
		document.getElementById("telefone").innerText = "TELEFONE: "+telefone;
		document.getElementById("email").innerText = "EMAIL: "+email;
		
		check=true;
		total++;
		
	}	
}

function excluir()
{
	var id = prompt("DIGITE O ID DO CLIENTE A SER DELETADO: ");
	document.getElementById("cliente"+id).remove();
	alert("CLIENTE DE ID: "+id+" FOI DELETADO COM SUCESSO!");
}


