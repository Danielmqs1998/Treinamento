<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";

try
{
	$conexao = new mysqli($servidor, $usuario, $senha,  "bancophp");
	echo "CONEXÃO EFETUADA COM SUCESSO!";
}
catch(Exception $e)
{
	echo "A CONEXÃO FALHOU: ".$e->getMessage();
}
$sql = "SELECT * FROM instrumentos";
$result = $conexao->query($sql);

if($result->num_rows >0)
{
	while($row = $result->fetch_assoc())
	{
		echo "\n ID: ".$row["idprod"]." \n idcliente: ".$row["idcliente"]."\n nome: ".$row["nome"]." \n preco: ".$row["preco"]." \n 
		quantidade: ".$row["qtd"]." \n descricao: ".$row["descricao"];
	}
}


?>