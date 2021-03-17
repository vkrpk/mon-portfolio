<?php
include_once 'config_bdd.php';
if (

    !empty($_POST['titre'])
    && !empty($_POST['adresse'])
    && !empty($_POST['ville'])
    && !empty($_POST['cp'])
    && !empty($_POST['surface'])
    && !empty($_POST['prix'])
    && !empty($_POST['type'])

    && is_numeric($_POST['cp'])
    && is_numeric($_POST['prix'])
    && is_numeric($_POST['surface'])

    && ($_POST['type'] == 'vente' || $_POST['type'] == 'location')

    && intval($_POST['cp']) >= 01000
    && intval($_POST['cp']) <= 99999

) {

    if (empty($_POST['description'])) $description = null;
    else $description = $_POST['description'];

    if (
        !empty($_FILES['photo'])
        && $_FILES['photo']['error'] == 0
        && $_FILES['photo']['size'] <= 2097152    // 2 Mo
        && ($_FILES['photo']['type'] == 'image/jpeg'
            || $_FILES['photo']['type'] == 'image/png')
    ) {

        if ($_FILES['photo']['type'] == 'image/jpeg') $extension = 'jpg';
        else $extension = 'png';

        $photo = 'uploads/logement_' . time() . '.' . $extension;

        if (!is_dir('uploads')) mkdir('uploads');

        move_uploaded_file($_FILES['photo']['tmp_name'], $photo);
    } else {
        $photo = null;
    }

    try {
        $bdd = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $user, $password);
    } catch (PDOException $e) {
        header('location: creer-logement.php');
        die;
    }
    $requete = 'UPDATE logement SET titre=?, adresse=?, ville=?, cp=?, surface=?, prix=?, type=?, description=? WHERE id_logement=?';

    $statement = $bdd->prepare($requete);

    $statement->bindParam(1, $_POST['titre']);
    $statement->bindParam(2, $_POST['adresse']);
    $statement->bindParam(3, $_POST['ville']);
    $statement->bindParam(4, $_POST['cp']);
    $statement->bindParam(5, $_POST['surface']);
    $statement->bindParam(6, $_POST['prix']);
    $statement->bindParam(7, $_POST['type']);
    $statement->bindParam(8, $description);
    $statement->bindParam(9, $_GET['id']);

    $statement->execute();
    header('location: index.php');
} else {
    header('location: modifier-logement.php');
}
