<?php

$a[] = "Arroz com Feijão";
$a[] = "Arroz com Cenoura";
$a[] = "Macarronada";
$a[] = "Banana";
$a[] = "Beringela";
$a[] = "Camarão";
$a[] = "Carambola";
$a[] = "Espinafre ";
$a[] = "Feijoada";
$a[] = "Suco de pêssego";
$a[] = "Suco de limão";
$a[] = "Suco de frutas vermelhas";
$a[] = "Yogurt";


$q = $_REQUEST["q"];

$hint = "";

if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name) {
      if (stristr($q, substr($name, 0, $len))) {
        if ($hint === "") {
          $hint = "<p id='opcao' onclick='selecionar(\"".$name."\")'>$name<p>";
        } else {
          $hint .= ", <p id='opcao' onclick='selecionar(\"".$name."\")'>$name<p>";
        }
      }
    }
  }
  
  // Caso não tenha nenhum dos pratos mencionados.
  echo $hint === "" ? "sem opções..." : $hint;
 
?>
