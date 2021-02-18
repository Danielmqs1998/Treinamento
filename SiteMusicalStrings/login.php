<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="estiloLogin.css">
</head>
<body>
    <?php
        echo " ";
    ?>
    <div id='login'>
        <form action="lojausuario.php" method="POST" >
            <p align="center" for="usuariologado">USUÁRIO</p>
            <input type="text" name='usuariologado'>
            <p align="center" for="usuariologado">SENHA</p>
            <input type="password" name='senha'>
            <input type="submit" value='LOGAR' name='logar'>         
        </form>
    </div>
</body>
</html>