<?php

$host = 'localhost';
$dbname = 'bdajax';
$user = 'root';
$password = '';

$conn = new mysqli($host, $user, $password, $dbname);

if($conn->connect_error){
    die('Erro na conexão: ' . $conn->connect_error);
}

$nome = $_POST['nome'];
$idade = $_POST['idade'];
$email = $_POST['email'];

$sql = "INSERT INTO tbpessoa (nome,idade,email) VALUES ('$nome', '$idade', '$email')";

if($conn->query($sql) === TRUE){
    echo "Cadastro realizado com sucesso";
} else{
    echo "Erro: " . $conn->error;
}

$conn->close();