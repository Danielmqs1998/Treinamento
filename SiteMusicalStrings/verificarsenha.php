<?php
    if(isset($_POST['usuariologado']) && !(isset($_SESSION['login'])))
    {
        $login = $_POST['usuariologado'];
        $_SESSION['login'] = $login;           
    }
    else if(isset($_SESSION['login']))
    {
        $login = $_SESSION['login'];           
    }       
    if(isset($_POST['senha']) && !(isset($_SESSION['senha'])))
    {
        $senha = password_hash($_POST['senha']);
        $_SESSION['senha'] = $senha;
    }
    else if(isset($_SESSION['senha']))
        $senha = $_SESSION['senha'];
    
    try
    {
        $sql = "SELECT idusuario FROM usuario WHERE nome='$login' AND senha='$senha'";
        $result=$conexao->query($sql);
        $row = $result->fetch_assoc();
        $idusuario = $row['idusuario'];  
    }
    catch(Exception $e)
    {
        echo $e;
    }
?>