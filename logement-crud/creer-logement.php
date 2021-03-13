<?php include_once 'header.php';
?>
<form action="creer-logement-handler.php" method="post" enctype="multipart/form-data">
	<ul class="form-style-1">
		<li>
			<label>Titre <span class="required">*</span></label>
			<input type="text" name="titre" class="field-long" />
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
			<input type="text" name="adresse" cols="30" rows="10" required class="field-long" />
		</li>
		<li>
			<label>Ville <span class="required">*</span></label>
			<input type="text" name="ville" required class="field-long" />
		</li>
		<li>
			<label>Code Postal <span class="required">*</span></label>
			<input type="number" name="cp" min="01000" max="99999" step="1" required class="field-long" />
		</li>
		<li>
			<label>Surface <span class="required">*</span></label>
			<input type="number" name="surface" min="0" step="1" required class="field-long" />
		</li>
		<li>
			<label>Prix <span class="required">*</span></label>
			<input type="number" name="prix" min="0" step="1" required class="field-long" />
		</li>
		<li>
			<label>Photo</label>
			<input type="file" name="photo" class="field-long" />
		</li>
		<li>
			<label>Description</label>
			<textarea name="description" id="field5" class="field-long field-textarea"></textarea>
		</li>
		<input type="submit" value="Publier une annonce">
	</ul>
</form>
</body>

</html>