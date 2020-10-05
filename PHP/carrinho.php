<?php

if(isset($_POST['usuariologado']) || isset($_SESSION['login']))
{
    if(isset($_POST['porcarrinho']) && isset($_POST['itemcarrinho']))
    {
        $_POST['porcarrinho'] = array();
        $idproduto = $_POST['itemcarrinho'];
        try
        {
            $sql = "INSERT INTO carrinho (idusuario, idprod) VALUES ($idusuario, $idproduto)";
            $conexao->query($sql);
           
        }
        catch(Exception $e)
        {
            echo $e;
        }
        header('Location: lojausuario.php');
    }
    $sql2 = "SELECT COUNT(idprod) AS qtd FROM carrinho WHERE idusuario = $idusuario";
    $result = $conexao->query($sql2);
    $row = $result->fetch_assoc();
    $qtditens = $row['qtd'];
    
}

?>