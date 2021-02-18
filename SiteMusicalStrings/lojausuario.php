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
    session_start();
    require 'conexao.php';   
    require 'verificarsenha.php';
    require 'carrinho.php';
    if(!isset($_GET['precos']))
        $_GET['precos'] = 'relevancia'
?>
<header>
    <h1>Musical Strings</h1>
    <img src="logo.png" style="width: 3%; margin-top:1%">
    <ul id="botoesMenu">
        <li><a href="#">HOME</a></li>
        <li><a href="#">CONTATO</a></li>
        <li><a href="#">SOBRE</a></li>
    </ul>
    <ul id="botoesConta">
        <?php
            if(empty($login))
            {
                echo "<form action='login.php'>
                            <input type='submit' value='Login'>
                    </form>
                    <form action='cadastro.php'>
                            <input type='submit' value='Cadastro'></input>
                    </form>";
            
            }
            else if(!empty($login))
            {
            echo "<form id='conta' style='margin-top:10px' method='POST' action='contausuario.php'>                         
                        <input style='border: none; background: 0; font-weight: bold' type='submit' value='$login'>  
                        | <img style='width:15px;height: 15px;' src='iconecarrinho.png'><input id='carrinho' type='submit' value='$qtditens itens'>                      
                    </form>";
            }
        ?>
    </ul>
    
</header>
<h2>A Musical Strings é a loja de música que você está buscando. 
    De instrumetos de cordas a percursão, acessórios diversos e 
    equipamentos para tornar maravilhosa sua experiência musical.   
</h2>
  <!-- Full-width images with number and caption text -->
<div style="margin:-1%">
    <img src="img1.jpg" style="width:100%">

</div>
  <!-- Next and previous buttons -->

<div id="area" style="background-image:url('background.png');">
    <div id="filtros">
        <p>Filtros</p>
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
    <form action="lojausuario.php" method="GET">
        <input class type="text" name="campoPesquisa" id="pesquisa" placeholder="Procurar por...">
  
        <input type="submit" value="PESQUISAR" style="
            border: none;
            background-color: rgb(163 89 8);
            padding: 5px;
            color: white;
            border-radius: 5px;
        ">         
        <span style="color:white; margin-left:5px">Ordernar por: </span>         
        <select name="precos" id="preco" style="margin-right: 10px;">
            <option value="maior">Maior preço</option>
            <option value="menor">Menor preço</option>
            <option value="relevancia">Relevância</option>
            
        </select>
        <script type="text/javascript">
            document.getElementById('preco').value = "<?php echo $_GET['precos'];?>";
        </script>
    </form>
    </div>
    <?php

    if(!empty($_GET["campoPesquisa"]))
    {
        $nome = $_GET["campoPesquisa"];
        if($_GET['precos']=='maior')
            $sql = "SELECT * FROM instrumentos WHERE nome like '%$nome%' ORDER BY preco desc";   
        else if($_GET['precos']=='menor')
            $sql = "SELECT * FROM instrumentos WHERE nome like '%$nome%' ORDER BY preco";   
        else
            $sql = "SELECT * FROM instrumentos WHERE nome like '%$nome%'"; 
                
    }
    else
    {
        if($_GET['precos']=='maior')
            $sql = "SELECT * FROM instrumentos ORDER BY preco desc";   
        else if($_GET['precos']=='menor')
            $sql = "SELECT * FROM instrumentos ORDER BY preco";   
        else
            $sql = "SELECT * FROM instrumentos";   
            

    }

    $result = $conexao->query($sql);

    if($result->num_rows>0)
    {
        while($row = $result->fetch_assoc())
        {
            $idprod = $row["idprod"];
            echo "<div id='itens'>
                <img src='data:image/jpeg;base64," . base64_encode( $row['imagem'] ) . " '/>  
                <p>ID:".$row["idprod"]."</p><p><strong>".utf8_encode($row["nome"])."</strong></p>
                    <p id='preco'> R$ ".str_replace(".",",",$row["preco"])."</p> 
                    <p style='height:18%'>".utf8_encode($row["descricao"])."</p>
                    <form method='POST' action='lojausuario.php'>
                        <input type='hidden' value='$idprod' name='itemcarrinho'>
                        <input type='submit' value='PONHA NO CARRINHO' name='porcarrinho'>
                    </form>
                    <form method='POST' action='compras.php'>
                        <input type='hidden' value='$idprod' name='itemcarrinho'>
                        <input type='submit' value='COMPRAR' name='comprar'>
                    </form>
                </div>";
        }
    }
    ?>
    </div>
</div>


<footer>
<div>Desenvolvido por Daniel Marques </div>

</footer>
</body>
</html>