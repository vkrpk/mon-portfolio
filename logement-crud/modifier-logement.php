<?php include_once 'header.php';
include_once 'config_bdd.php';

try {
    $bdd = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $user, $password);
} catch (PDOException $e) {
    header('location: creer-logement.php');
    die;
}
$requete = 'SELECT * FROM logement WHERE id_logement = ?';
$statement = $bdd->prepare($requete);

$statement->bindParam(1, $_GET['id']);

$statement->execute();

$logement = $statement->fetch();

?>

<form action="modifier-logement-handler.php?id=<?php echo $_GET['id'] ?>" method="post" enctype="multipart/form-data">
    <ul class="form-style-1">
        <li>
            <label>Titre <span class="required">*</span></label>
            <input type="text" name="titre" class="field-long" value="<?php echo $logement['titre'] ?>" />
        </li>
        <li>
            <label>Type<span class="required">*</span></label>
            <select name="type" class="field-select">
                <option value="location">Location</option>
                <option value="vente">Vente</option>
            </select>
        </li>
        <li>
            <label>Adresse <span class="required">*</span></label>
            <input type="text" name="adresse" cols="30" rows="10" required class="field-long" value="<?php echo $logement['adresse'] ?>" />
        </li>
        <li>
            <label>Ville <span class="required">*</span></label>
            <input type="text" name="ville" required class="field-long" value="<?php echo $logement['ville'] ?>" />
        </li>
        <li>
            <label>Code Postal <span class="required">*</span></label>
            <input type="number" name="cp" min="01000" max="99999" step="1" required class="field-long" value="<?php echo $logement['cp'] ?>" />
        </li>
        <li>
            <label>Surface <span class="required">*</span></label>
            <input type="number" name="surface" min="0" step="1" required class="field-long" value="<?php echo $logement['surface'] ?>" />
        </li>
        <li>
            <label>Prix <span class="required">*</span></label>
            <input type="number" name="prix" min="0" step="1" required class="field-long" value="<?php echo $logement['prix'] ?>" />
        </li>
        <li>
            <label>Description</label>
            <textarea name="description" id="field5" class="field-long field-textarea"><?php echo $logement['description'] ?></textarea>
        </li>
        <input type="submit" value="Modifier cette annonce">
    </ul>
</form>
</body>

</html>