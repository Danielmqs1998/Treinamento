<?php

$nome = $_POST["nome"];
$idade = $_POST["idade"];
$servidor="localhost";
$bancodados="bancophp";
$usuario = "root";
$senha="";

echo "NOME: ".$nome;
echo "IDADE: ".$idade;

try
{
	$conexao = new mysqli($servidor,$usuario,$senha,$bancodados);
	echo "CONEXÃO EFETUADA COM SUCESSO!";
	$sql = "SELECT * FROM funcionarios";
	$result = $conexao->query($sql);
	while($row=$result->fetch_assoc())
	{
		echo "<p>$row[idfunc]</p>"+"<p>$row[nome]</p>"+"<p>$row[tel]</p>"+"<p>$row[email]</p>";
	}
}
catch(Exception $e)
{
	echo $e;
}


?>