<?php
include_once 'header.php';
include_once 'config_bdd.php';
try {
	$bdd = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $user, $password);
} catch (PDOException $e) {
	header('location: creer-logement.php');
	die;
}
include_once 'header.php';
$requete = 'SELECT * FROM logement';
$statement = $bdd->query($requete);
$logements = $statement->fetchAll();
?>
<table class="blueTable">
	<thead>
		<tr>
			<th>Titre</th>
			<th>Type</th>
			<th>Adresse</th>
			<th>Ville</th>
			<th>Code Postal</th>
			<th>Surface</th>
			<th>Prix</th>
			<th>Photo</th>
			<th>Description</th>
			<th>Action</th>
			<th>Action</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<?php foreach ($logements as $annonce) { ?>
			<tr>
				<td class="voir"><a href="afficher-logement.php?id=<?php echo $annonce['id_logement'] ?>">
						<?php echo $annonce['titre'] ?>
					</a></td>
				<td><?php echo $annonce['type'] ?></td>
				<td><?php echo $annonce['adresse'] ?></td>
				<td><?php echo $annonce['ville'] ?></td>
				<td><?php echo $annonce['cp'] ?></td>
				<td><?php echo $annonce['surface'] . ' m²' ?></td>
				<td><?php echo $annonce['prix'] ?></td>
				<td><img src="<?php echo $annonce['photo'] ?>" style="width: 100px; height: 100px;"></td>
				<td><?php echo substr($annonce['description'], 0, 150) . '...' ?></td>
				<td class="voir"><a href="afficher-logement.php?id=<?php echo $annonce['id_logement'] ?>">Voir cet annonce</a></td>
				<td id="modifier"><a href="modifier-logement.php?id=<?php echo $annonce['id_logement']; ?>">Modifier</a></td>
				<td id="supprimer" onclick="if(window.confirm('Voulez-vous vraiment supprimer cette annonce?')){return true;}else{return false;}"><a href="delete.php?id=<?php echo $annonce['id_logement']; ?>">Supprimer</a></td>
			</tr>
		<?php } ?>
	</tbody>
	</tr>
</table>
</body>

</html>