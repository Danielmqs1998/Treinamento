<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="estiloLoja.css">
    <title>SITE COMPLETO</title>
</head>
<body>
<?php
    require 'conexao.php';   
?>
<header>
    <h1>Musical Strings</h1>
    <div id="areaMenu">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CONTATO</a></li>
        </ul>
        <ul id="botoesconta">                         
            <form action='login.php'>
                <input type='submit' value='Login'>
            </form>
            <form action='cadastro.php'>
                <input type='submit' value='Cadastro'></input>
            </form>
        </ul>
    </div>
</header>
<div id="area">
    <div id="filtros">
        <p align="center">Filtros</p>
        <hr>
        <form action="" method="get">
            <input type="checkbox" name="checkCordas" id=""><p> Cordas </p>
            <input type="checkbox" name="checkSopro" id=""><p> Sopro </p>
            <input type="checkbox" name="checkMadeiras" id=""><p> Madeiras </p>
            <input type="checkbox" name="checkMetais" id=""><p> Metais </p>
            <input type="checkbox" name="checkAcessorios" id=""><p> Acessórios </p>
            <hr>
            <p>Valores</p>
            Min:<input type="text" name="max" id="setMax" style="width: 45px" maxlength="4">
            Máx:<input type="text" name="min" id="setMin" style="width: 45px" maxlength="4">
            <input type="submit" name="aplicar" id="btnAplicar" value="APLICAR">
        </form>
    </div>
    <div id="areaItens">
    <div id="pesquisar">
        <form action="loja.php?visualizacao=false" method="GET">
            <input type="text" name="campoPesquisa" id="pesquisa" placeholder="Procurar por..."> 
            <input type="submit" value="PESQUISAR">          
            <span>Ordernar por: </span>
            
            <select name="" id="" style="margin-right: 10px;">
                <option value="">Menor preço</option>
                <option value="">Maior preço</option>
            </select>
        </form>
    </div>
    <?php


    if(!empty($_GET["campoPesquisa"]))
    {
        $sql = "SELECT * FROM instrumentos WHERE nome like"+$_GET["campoPesquisa"];        
    }

    else
        $sql = "SELECT * FROM instrumentos";        

    $result = $conexao->query($sql);

    if($result->num_rows>0)
    {
        while($row = $result->fetch_assoc())
        {
            $idprod = $row["idprod"];
            echo "<div id='itens'>
                <img src='data:image/jpeg;base64," . base64_encode( $row['imagem'] ) . " '/>  
                <p>ID:".$row["idprod"]."</p><p><strong>".uft8_encode($row["nome"])."</strong></p>
                    <p id='preco'> R$ ".str_replace(".",",",$row["preco"])."</p> 
                    <p>".$row["descricao"]."</p>
                    <form method='POST' action='carrinho?idcarrinho='/'$idprod'.php'>
                        <input type='submit' value='PONHA NO CARRINHO' name='$idprod'>
                    </form>
                    <form method='POST' action='compras.php'>
                        <input type='submit' value='COMPRAR' name='$idprod'>
                    </form>
                </div>";
        }
    }
    ?>
    </div>
</div>
<script>

function buscarConteudoRP(texto)
{
    if(texto.length==0)
    {
        document.getElementById("sugestaoRefeicaoprincipal").innerHtml="";
        return;
    }
  
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if(this.readyState ==4 && this.status == 200)
            {
                document.getElementById("usuario").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET",".php?q="+texto,true);
        xhttp.send();  
}
</script>
</body>
</html>