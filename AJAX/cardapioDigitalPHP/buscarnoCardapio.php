<?php

$a[] = "Arroz com Feijão";
$a[] = "Macarronada";
$a[] = "Arroz com Cenoura";

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
  
  // Output "no suggestion" if no hint was found or output correct values
  echo $hint === "" ? "no suggestion" : $hint;
 
?>