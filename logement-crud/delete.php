<?php
include_once 'config_bdd.php';

try {
    $bdd = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $user, $password);
} catch (PDOException $e) {
    header('location: creer-logement.php');
    die;
}
$id = $_GET['id'];

$requete = 'DELETE FROM logement WHERE id_logement = ?';

$statement = $bdd->prepare($requete);

$statement->bindParam(1, $id);

$statement->execute();

header('location: index.php');
