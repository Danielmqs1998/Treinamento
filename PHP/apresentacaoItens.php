

$result = $conexao->query($sql);

if($result->num_rows >0)
{
    while($row = $result->fetch_assoc())
    {
        echo "<div id='itens'>
        <img src='data:image/jpeg;base64," . base64_encode( $row['imagem'] ) . " '/>  
        <p>ID:".$row["idprod"]."</p><p><strong>".$row["nome"]."</strong></p>
                <p id='preco'> R$ ".str_replace(".",",",$row["preco"])."</p> 
                <p>".$row["descricao"]."</p>
                <form action='a'>
                    <input type='submit' value='PONHA NO CARRINHO'>
                    <input type='submit' value='COMPRAR'>
                </form>
                </div>";
    }
}