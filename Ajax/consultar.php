<?php

$host = 'localhost';
$dbname = 'bdajax';
$user = 'root';
$password = '';

$conn = new mysqli($host, $user, $password, $dbname);

if($conn->connect_error){
    die('Erro na conexão: ' . $conn->connect_error);
}

$sql = "SELECT * FROM tbpessoa";

$result = $conn->query($sql);

if($result->num_rows > 0){
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>E-mail</th>
            </tr>
    ";

    while($row = $result->fetch_assoc()){
        echo "<tr aling='center'>
                <td>{$row['id']}</td>
                <td>{$row['nome']}</td>
                <td>{$row['idade']}</td>
                <td>{$row['email']}</td>
              </tr>
        ";
    }
    echo "</table>";
}else{
    echo "Nenhum usuário cadastrado";
}

$conn->close();