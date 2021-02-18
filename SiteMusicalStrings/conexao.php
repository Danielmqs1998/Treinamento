<?php
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";

    try
    {
        $conexao = new mysqli($servidor, $usuario, $senha,  "bancophp");      
    }
    catch(Exception $e)
    {
        echo "A CONEXÃO FALHOU: ".$e->getMessage();
    }
?>