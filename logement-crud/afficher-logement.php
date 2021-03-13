<?php
include_once 'header.php';
include_once 'config_bdd.php';

if (!empty($_GET['id'])) $id = $_GET['id'];
else {
	echo 'Il manque l\'id !';
	die;
}


try {
	$bdd = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $user, $password);
} catch (PDOException $e) {
	header('location: creer-logement.php');
	die;
}

$requete = 'SELECT * FROM logement WHERE id_logement = ?';
$statement = $bdd->prepare($requete);

$statement->bindParam(1, $id);

$statement->execute();

$logement = $statement->fetch();

?>
<div class="logement">
	<h1><?php echo $logement['titre'] ?></h1>
	<img src="<?php echo $logement['photo'] ?>">

	<p>
		Surface : <?php echo $logement['surface'] . ' m²' ?><br>
		Prix : <?php echo $logement['prix'] ?> € (<?php echo $logement['type'] ?>)<br>
		Adresse : <?php echo $logement['adresse'] ?> - <?php echo $logement['cp'] ?> - <?php echo $logement['ville'] ?>
	</p>

	<p>Description: <br><?php echo $logement['description'] ?></p>
</div>

</body>

</html>