const sousmenuqvt = `<button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireqvt')">Questionnaire Individuel</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireqvtindividuel')">Analyse Individuelle</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireqvtgroupe')">Analyse d'un Groupe</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireqvtcollectif')">Comparaison de Collectifs</button>`;
const sousmenuviolentometre = `<button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('referentielviolentometre')">R&eacute;f&eacute;rentiel</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireviolentometre'); melanger(1)">Questionnaire</button>`;
const sousmenurps = `<button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('referentielrps')">R&eacute;f&eacute;rentiel</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnairerps'); melanger(2)">Questionnaire</button>`;
const sousmenuencadrant = `<button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('referentielencadrant')">R&eacute;f&eacute;rentiel</button><button class="sousmenu" onclick="sousmenuButtonClick(event); sousmenu('questionnaireencadrant'); melanger(0)">Questionnaire</button>`;
const sousmenuapropos = ``;
const apropos = `<h2>Des outils <a href="https://ugictcgt.fr" target="ugictcgt"><img src="ugictcgt.svg" height="64px" width="88px" style="background-color:#ffffff"></svg></a></h2><ul><li>Respectueux de la vie privée et de l'anonymat</li><li>Bas&eacute;s sur :</li><ul><li>Sociom&egrave;tre de l'encadrant : <a href="https://www.cgtservicespublics.fr/la-federation/ufict/elections-professionnelles-2022/article/ufict-marque-pages-sociometres-de-l-encadrant-et-des-risques-psycho-sociaux" target="_sociometre">le marque-page "le Sociom&egrave;tre de l'encadrant" de l'UFICT F&eacute;d&eacute;ration des Services Publics</a></li><li>Violentom&egrave;tre : <a href="https://www.egalite-professionnelle.cgt.fr/sexisme/" target="_violentometre">le marque-page "le Violentom&egrave;tre" CGT</a></li><li>Sociom&egrave;tre RPS : <a href="https://www.cgtservicespublics.fr/la-federation/ufict/elections-professionnelles-2022/article/ufict-marque-pages-sociometres-de-l-encadrant-et-des-risques-psycho-sociaux" target="_rps">le marque-page "le Sociom&egrave;tre RPS" de l'UFICT F&eacute;d&eacute;ration des Services Publics</a></li><li>QVT & Num&eacute;rique : <a href="https://lenumeriqueautrement.fr/" target="_qvt">campagne "Construire le Num&eacute;rique Autrement" UGICT CGT</a></li><li>Pour l'<a href="https://www.anact.fr/" target="_anact">ANACT</a> et le <a href="https://www.anact.fr/lanact-lance-son-1er-appel-projet-fact-sur-qualite-de-vie-au-travail-et-numerique" target="_fact">FACT</a></li><li><a href="Methodologie-QVTNumerique-UGICT-CGT.pdf" target="_methodo">Méthodologie de Karasek-Siegrist</a></li><li><a href="Tutoriel-QVTNumerique.pdf" target="_tutoriel">Tutoriel</a></li></ul>
<li>Mis à disposition selon les termes :<br/><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" target="cc">
<svg viewBox="0 0 30 30" height="32px" width="32px"><g id="cc-logo"><path d="M14.972 0c4.196 0 7.769 1.465 10.715 4.393A14.426 14.426 0 0128.9 9.228C29.633 11.04 30 12.964 30 15c0 2.054-.363 3.978-1.085 5.772a13.77 13.77 0 01-3.2 4.754 15.417 15.417 0 01-4.983 3.322A14.932 14.932 0 0114.973 30c-1.982 0-3.88-.38-5.692-1.14a15.087 15.087 0 01-4.875-3.293c-1.437-1.437-2.531-3.058-3.281-4.862A14.71 14.71 0 010 15c0-1.982.38-3.888 1.138-5.719a15.062 15.062 0 013.308-4.915C7.303 1.456 10.812 0 14.972 0zm.055 2.706c-3.429 0-6.313 1.196-8.652 3.589a12.896 12.896 0 00-2.72 4.031 11.814 11.814 0 00-.95 4.675c0 1.607.316 3.156.95 4.646a12.428 12.428 0 002.72 3.992 12.362 12.362 0 003.99 2.679c1.483.616 3.037.924 4.662.924 1.607 0 3.164-.312 4.675-.937a12.954 12.954 0 004.084-2.705c2.339-2.286 3.508-5.152 3.508-8.6 0-1.66-.304-3.231-.91-4.713a11.994 11.994 0 00-2.651-3.965c-2.412-2.41-5.314-3.616-8.706-3.616zm-.188 9.803l-2.01 1.045c-.215-.445-.477-.758-.79-.937-.312-.178-.602-.268-.87-.268-1.34 0-2.01.884-2.01 2.652 0 .803.17 1.446.509 1.928.34.482.84.724 1.5.724.876 0 1.492-.43 1.85-1.286l1.847.937a4.407 4.407 0 01-1.634 1.728c-.696.42-1.464.63-2.303.63-1.34 0-2.42-.41-3.242-1.233-.821-.82-1.232-1.964-1.232-3.428 0-1.428.416-2.562 1.246-3.401.83-.84 1.879-1.26 3.147-1.26 1.858 0 3.188.723 3.992 2.17zm8.652 0l-1.983 1.045c-.214-.445-.478-.758-.79-.937-.313-.178-.613-.268-.897-.268-1.34 0-2.01.884-2.01 2.652 0 .803.17 1.446.51 1.928.338.482.838.724 1.5.724.874 0 1.49-.43 1.847-1.286l1.875.937a4.606 4.606 0 01-1.66 1.728c-.696.42-1.455.63-2.277.63-1.357 0-2.441-.41-3.253-1.233-.814-.82-1.22-1.964-1.22-3.428 0-1.428.415-2.562 1.246-3.401.83-.84 1.879-1.26 3.147-1.26 1.857 0 3.18.723 3.965 2.17z" fill="#ffffff" stroke="#000000"></path></g></svg><svg viewBox="0 0 30 30" height="32px" width="32px"><g id="cc-by"><path d="M14.973 0c4.213 0 7.768 1.446 10.66 4.34C28.544 7.25 30 10.803 30 15c0 4.215-1.43 7.723-4.287 10.526C22.678 28.51 19.098 30 14.973 30c-4.054 0-7.571-1.474-10.553-4.42C1.474 22.633 0 19.107 0 15S1.474 7.34 4.42 4.34C7.313 1.446 10.83 0 14.973 0zm.054 2.706c-3.41 0-6.295 1.196-8.652 3.589-2.447 2.5-3.67 5.402-3.67 8.706 0 3.321 1.214 6.196 3.642 8.624 2.429 2.429 5.322 3.642 8.679 3.642 3.339 0 6.25-1.222 8.732-3.67 2.358-2.267 3.536-5.133 3.536-8.598 0-3.41-1.197-6.311-3.589-8.705-2.392-2.392-5.285-3.588-8.678-3.588zm4.018 8.57v6.134H17.33v7.286h-4.66V17.41h-1.714v-6.134a.93.93 0 01.28-.683.933.933 0 01.684-.281h6.161c.25 0 .474.093.67.28a.912.912 0 01.294.684zM12.91 7.42c0-1.41.696-2.116 2.09-2.116s2.09.705 2.09 2.116c0 1.393-.697 2.09-2.09 2.09-1.393 0-2.09-.697-2.09-2.09z" fill="#ffffff" stroke="#000000"></path></g></svg><svg viewBox="0 0 30 30" height="32px" width="32px"><g id="cc-nc"><path d="M14.973 0c4.214 0 7.768 1.446 10.66 4.339C28.544 7.232 30 10.786 30 15c0 4.215-1.429 7.723-4.287 10.527C22.678 28.51 19.097 30 14.973 30c-4.072 0-7.59-1.482-10.553-4.446C1.474 22.607 0 19.09 0 15c0-4.107 1.474-7.66 4.42-10.66C7.313 1.446 10.83 0 14.973 0zM3.375 10.956c-.446 1.232-.67 2.58-.67 4.045 0 3.321 1.214 6.196 3.642 8.624 2.447 2.412 5.34 3.617 8.679 3.617 3.375 0 6.285-1.223 8.733-3.67.875-.839 1.561-1.714 2.061-2.626l-5.651-2.518a3.866 3.866 0 01-1.433 2.317c-.76.598-1.657.943-2.693 1.031v2.304h-1.74v-2.304c-1.661-.017-3.18-.615-4.554-1.794l2.063-2.089c.981.91 2.098 1.366 3.348 1.366.517 0 .96-.116 1.326-.349.366-.231.55-.615.55-1.151 0-.376-.135-.68-.402-.911l-1.447-.617-1.767-.804-2.384-1.044-7.661-3.427zm11.652-8.278c-3.41 0-6.295 1.206-8.652 3.616-.59.59-1.143 1.26-1.66 2.01l5.732 2.571a3.513 3.513 0 011.42-1.888c.695-.473 1.508-.737 2.437-.79V5.893h1.741v2.304c1.376.071 2.625.535 3.75 1.392L17.84 11.6c-.84-.59-1.697-.884-2.572-.884-.464 0-.88.09-1.245.267-.366.179-.55.483-.55.911 0 .125.045.25.134.375l1.902.858 1.313.59 2.41 1.07 7.687 3.429c.25-1.054.375-2.125.375-3.214 0-3.447-1.196-6.349-3.588-8.707-2.375-2.41-5.27-3.616-8.68-3.616z" fill="#ffffff" stroke="#000000"></path></g></svg><svg viewBox="0 0 30 30" height="32px" width="32px"><g id="cc-sa"><path d="M14.973 0c4.196 0 7.75 1.455 10.66 4.366C28.544 7.26 30 10.804 30 15c0 4.197-1.43 7.714-4.287 10.553C22.696 28.518 19.115 30 14.973 30c-4.054 0-7.571-1.473-10.553-4.42C1.474 22.634 0 19.108 0 15c0-4.088 1.474-7.633 4.42-10.633C7.33 1.455 10.848 0 14.973 0zm.054 2.706c-3.41 0-6.295 1.205-8.652 3.616-2.447 2.483-3.67 5.375-3.67 8.678 0 3.34 1.214 6.214 3.642 8.625 2.429 2.43 5.322 3.643 8.679 3.643 3.339 0 6.25-1.223 8.732-3.67 2.358-2.285 3.536-5.151 3.536-8.598 0-3.428-1.197-6.321-3.589-8.678-2.375-2.412-5.268-3.616-8.678-3.616zM8.33 12.884c.286-1.84 1.026-3.264 2.223-4.273 1.196-1.008 2.651-1.513 4.366-1.513 2.356 0 4.232.76 5.625 2.277 1.393 1.517 2.09 3.464 2.09 5.839 0 2.304-.724 4.219-2.17 5.745-1.447 1.526-3.321 2.29-5.626 2.29-1.696 0-3.16-.508-4.392-1.527-1.233-1.018-1.973-2.464-2.224-4.339H12c.09 1.822 1.187 2.733 3.295 2.733 1.053 0 1.902-.456 2.544-1.366.644-.91.965-2.126.965-3.643 0-1.59-.294-2.799-.883-3.63-.59-.83-1.437-1.245-2.545-1.245-2.001 0-3.126.884-3.375 2.651h1.098l-2.973 2.973-2.973-2.973H8.33z" fill="#ffffff" stroke="#000000"></path></g></svg>
 Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International</a></li>
<li><a href="https://github.com/leithleith/sociometres" target="github"><svg height="32" fill="#ffffff" stroke="#000000" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> Code</a> sous licence MIT dont bibliothèque graphique <a href="https://github.com/plotly/plotly.js" target="plotly">Plotly.js</a> modifi&eacute;e</li>
<li>Pour toute demande ou remarque : <a href="mailto:contact@ugictcgt.fr?subject=sociometres">contacter l'UGICT CGT</a></li></ul>`;
const questionnaireqvt = `<h2>Questionnaire Individuel QVT Numérique</h2>
				<h3>A. Niveau des Exigences</h3>
				<p>1. Je suis constamment press&eacute;-e par le temps &agrave; cause d’une forte charge de travail :<br/><input type="radio" name="A1" value="0" id="A10"/> pas d'accord<input type="radio" name="A1" value="1" id="A11"/> plut&ocirc;t pas d'accord<input type="radio" name="A1" value="2" id="A12"/> plut&ocirc;t d'accord<input type="radio" name="A1" value="3" id="A13"/> d'accord</p><p>2. J’effectue des t&acirc;ches r&eacute;p&eacute;titives dans mon travail :<br/><input type="radio" name="A2" value="0" id="A20"/> pas d'accord<input type="radio" name="A2" value="1" id="A21"/> plut&ocirc;t pas d'accord<input type="radio" name="A2" value="2" id="A22"/> plut&ocirc;t d'accord<input type="radio" name="A2" value="3" id="A23"/> d'accord</p><p>3. Je trouve le volume des sollicitations raisonnable (nombre de courriels, demandes clients externes ou internes, coll&egrave;gues ou hi&eacute;rarchiques, etc.) :<br/><input type="radio" name="A3" value="3" id="A30"/> pas d'accord<input type="radio" name="A3" value="2" id="A31"/> plut&ocirc;t pas d'accord<input type="radio" name="A3" value="1" id="A32"/> plut&ocirc;t d'accord<input type="radio" name="A3" value="0" id="A33"/> d'accord</p><p>4. Je suis fr&eacute;quemment interrompu-e et d&eacute;rang&eacute;-e dans mon travail :<br/><input type="radio" name="A4" value="0" id="A40"/> pas d'accord<input type="radio" name="A4" value="1" id="A41"/> plut&ocirc;t pas d'accord<input type="radio" name="A4" value="2" id="A42"/> plut&ocirc;t d'accord<input type="radio" name="A4" value="3" id="A43"/> d'accord</p><p>5. Je suis souvent contraint-e &agrave; faire des heures suppl&eacute;mentaires :<br/><input type="radio" name="A5" value="0" id="A50"/> pas d'accord<input type="radio" name="A5" value="1" id="A51"/> plut&ocirc;t pas d'accord<input type="radio" name="A5" value="2" id="A52"/> plut&ocirc;t d'accord<input type="radio" name="A5" value="3" id="A53"/> d'accord</p><p>6. Je suis souvent sollicit&eacute;-e en dehors de mes heures normales de travail :<br/><input type="radio" name="A6" value="0" id="A60"/> pas d'accord<input type="radio" name="A6" value="1" id="A61"/> plut&ocirc;t pas d'accord<input type="radio" name="A6" value="2" id="A62"/> plut&ocirc;t d'accord<input type="radio" name="A6" value="3" id="A63"/> d'accord</p><p>7. Je traite souvent ma messagerie apr&egrave;s le travail, le soir ou le week end :<br/><input type="radio" name="A7" value="0" id="A70"/> pas d'accord<input type="radio" name="A7" value="1" id="A71"/> plut&ocirc;t pas d'accord<input type="radio" name="A7" value="2" id="A72"/> plut&ocirc;t d'accord<input type="radio" name="A7" value="3" id="A73"/> d'accord</p><p>8. Je suis soumis &agrave; des al&eacute;as, je reçois des sollicitations et des demandes de plusieurs personnes :<br/><input type="radio" name="A8" value="0" id="A80"/> pas d'accord<input type="radio" name="A8" value="1" id="A81"/> plut&ocirc;t pas d'accord<input type="radio" name="A8" value="2" id="A82"/> plut&ocirc;t d'accord<input type="radio" name="A8" value="3" id="A83"/> d'accord</p><p>9. J’ai des objectifs atteignables :<br/><input type="radio" name="A9" value="3" id="A90"/> pas d'accord<input type="radio" name="A9" value="2" id="A91"/> plut&ocirc;t pas d'accord<input type="radio" name="A9" value="1" id="A92"/> plut&ocirc;t d'accord<input type="radio" name="A9" value="0" id="A93"/> d'accord</p><p>10. Je dispose de suffisamment de moyens et de temps pour bien faire mon travail :<br/><input type="radio" name="A10" value="3" id="A100"/> pas d'accord<input type="radio" name="A10" value="2" id="A101"/> plut&ocirc;t pas d'accord<input type="radio" name="A10" value="1" id="A102"/> plut&ocirc;t d'accord<input type="radio" name="A10" value="0" id="A103"/> d'accord</p><p>11. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre charge de travail a augment&eacute; ?<br/><input type="radio" name="A11" value="0" id="A110"/> pas d'accord<input type="radio" name="A11" value="1" id="A111"/> plut&ocirc;t pas d'accord<input type="radio" name="A11" value="2" id="A112"/> plut&ocirc;t d'accord<input type="radio" name="A11" value="3" id="A113"/> d'accord</p><p>12. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre temps de travail hebdomadaire a augment&eacute; (en incluant le temps de travail dans les transports, au domicile, etc.) :<br/><input type="radio" name="A12" value="0" id="A120"/> pas d'accord<input type="radio" name="A12" value="1" id="A121"/> plut&ocirc;t pas d'accord<input type="radio" name="A12" value="2" id="A122"/> plut&ocirc;t d'accord<input type="radio" name="A12" value="3" id="A123"/> d'accord</p>
				<h3>Commentaires sur le niveau des Exigences :</h3><textarea name="commentairesExigences" id="commentairesExigences" rows="3" cols="50" maxlength="512"></textarea>
				<h3>B. Degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle</h3>
				<p>1. J’ai la possibilit&eacute; de discuter, de proposer des alternatives &agrave; ce que l’on me demande sans me mettre en difficult&eacute; :<br/><input type="radio" name="B1" value="0" id="B10"/> pas d'accord<input type="radio" name="B1" value="1" id="B11"/> plut&ocirc;t pas d'accord<input type="radio" name="B1" value="2" id="B12"/> plut&ocirc;t d'accord<input type="radio" name="B1" value="3" id="B13"/> d'accord</p><p>2. J’ai la possibilit&eacute; de d&eacute;cider l’organisation de mon temps de travail :<br/><input type="radio" name="B2" value="0" id="B20"/> pas d'accord<input type="radio" name="B2" value="1" id="B21"/> plut&ocirc;t pas d'accord<input type="radio" name="B2" value="2" id="B22"/> plut&ocirc;t d'accord<input type="radio" name="B2" value="3" id="B23"/> d'accord</p><p>3. Je reçois rarement une demande n&eacute;cessitant une r&eacute;ponse imm&eacute;diate :<br/><input type="radio" name="B3" value="0" id="B30"/> pas d'accord<input type="radio" name="B3" value="1" id="B31"/> plut&ocirc;t pas d'accord<input type="radio" name="B3" value="2" id="B32"/> plut&ocirc;t d'accord<input type="radio" name="B3" value="3" id="B33"/> d'accord</p><p>4. Je passe peu de temps sur le reporting :<br/><input type="radio" name="B4" value="0" id="B40"/> pas d'accord<input type="radio" name="B4" value="1" id="B41"/> plut&ocirc;t pas d'accord<input type="radio" name="B4" value="2" id="B42"/> plut&ocirc;t d'accord<input type="radio" name="B4" value="3" id="B43"/> d'accord</p><p>5. Les proc&eacute;dures sont complexes :<br/><input type="radio" name="B5" value="3" id="B50"/> pas d'accord<input type="radio" name="B5" value="2" id="B51"/> plut&ocirc;t pas d'accord<input type="radio" name="B5" value="1" id="B52"/> plut&ocirc;t d'accord<input type="radio" name="B5" value="0" id="B53"/> d'accord</p><p>6. Je dispose de marge de manœuvre pour r&eacute;aliser mon travail :<br/><input type="radio" name="B6" value="0" id="B60"/> pas d'accord<input type="radio" name="B6" value="1" id="B61"/> plut&ocirc;t pas d'accord<input type="radio" name="B6" value="2" id="B62"/> plut&ocirc;t d'accord<input type="radio" name="B6" value="3" id="B63"/> d'accord</p><p>7. Le SI (Syst&egrave;me d’Information) et les applications professionnelles sont fiables et op&eacute;rationnelles pour mon travail :<br/><input type="radio" name="B7" value="0" id="B70"/> pas d'accord<input type="radio" name="B7" value="1" id="B71"/> plut&ocirc;t pas d'accord<input type="radio" name="B7" value="2" id="B72"/> plut&ocirc;t d'accord<input type="radio" name="B7" value="3" id="B73"/> d'accord</p><p>8. Les outils num&eacute;riques facilitent mon travail :<br/><input type="radio" name="B8" value="0" id="B80"/> pas d'accord<input type="radio" name="B8" value="1" id="B81"/> plut&ocirc;t pas d'accord<input type="radio" name="B8" value="2" id="B82"/> plut&ocirc;t d'accord<input type="radio" name="B8" value="3" id="B83"/> d'accord</p><p>9. Je peux facilement suivre les formations utiles &agrave; mon travail :<br/><input type="radio" name="B9" value="0" id="B90"/> pas d'accord<input type="radio" name="B9" value="1" id="B91"/> plut&ocirc;t pas d'accord<input type="radio" name="B9" value="2" id="B92"/> plut&ocirc;t d'accord<input type="radio" name="B9" value="3" id="B93"/> d'accord</p><p>10 Je me forme sur des sujets professionnels sur mon temps personnel :<br/><input type="radio" name="B10" value="3" id="B100"/> pas d'accord<input type="radio" name="B10" value="2" id="B101"/> plut&ocirc;t pas d'accord<input type="radio" name="B10" value="1" id="B102"/> plut&ocirc;t d'accord<input type="radio" name="B10" value="0" id="B103"/> d'accord</p><p>11 Je maîtrise les moments et les lieux où je juge n&eacute;cessaire de me d&eacute;connecter ou me connecter afin de pr&eacute;server mon &eacute;quilibre vie priv&eacute;e / vie professionnelle :<br/><input type="radio" name="B11" value="0" id="B110"/> pas d'accord<input type="radio" name="B11" value="1" id="B111"/> plut&ocirc;t pas d'accord<input type="radio" name="B11" value="2" id="B112"/> plut&ocirc;t d'accord<input type="radio" name="B11" value="3" id="B113"/> d'accord</p><p>12 J’utilise ma messagerie et les autres outils num&eacute;riques pour des raisons professionnelles sur mon temps personnel :<br/><input type="radio" name="B12" value="3" id="B120"/> pas d'accord<input type="radio" name="B12" value="2" id="B121"/> plut&ocirc;t pas d'accord<input type="radio" name="B12" value="1" id="B122"/> plut&ocirc;t d'accord<input type="radio" name="B12" value="0" id="B123"/> d'accord</p>
				<h3>Commentaires sur le degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle :</h3><textarea name="commentairesAutonomie" id="commentairesAutonomie" rows="3" cols="50" maxlength="512"></textarea>
				<h3>C. Niveau de Soutien (coll&egrave;gues et manager)</h3>
				<p>1. J’ai le sentiment d’&ecirc;tre int&eacute;gr&eacute; au collectif :<br/><input type="radio" name="C1" value="0" id="C10"/> pas d'accord<input type="radio" name="C1" value="1" id="C11"/> plut&ocirc;t pas d'accord<input type="radio" name="C1" value="2" id="C12"/> plut&ocirc;t d'accord<input type="radio" name="C1" value="3" id="C13"/> d'accord</p><p>2. Les coll&egrave;gues avec qui je travaille sont des gens professionnellement comp&eacute;tents :<br/><input type="radio" name="C2" value="0" id="C20"/> pas d'accord<input type="radio" name="C2" value="1" id="C21"/> plut&ocirc;t pas d'accord<input type="radio" name="C2" value="2" id="C22"/> plut&ocirc;t d'accord<input type="radio" name="C2" value="3" id="C23"/> d'accord</p><p>3. Je suis en accord avec ce que mon manager me demande de faire :<br/><input type="radio" name="C3" value="0" id="C30"/> pas d'accord<input type="radio" name="C3" value="1" id="C31"/> plut&ocirc;t pas d'accord<input type="radio" name="C3" value="2" id="C32"/> plut&ocirc;t d'accord<input type="radio" name="C3" value="3" id="C33"/> d'accord</p><p>4. Mes avis et mes propositions sont pris en compte :<br/><input type="radio" name="C4" value="0" id="C40"/> pas d'accord<input type="radio" name="C4" value="1" id="C41"/> plut&ocirc;t pas d'accord<input type="radio" name="C4" value="2" id="C42"/> plut&ocirc;t d'accord<input type="radio" name="C4" value="3" id="C43"/> d'accord</p><p>5. En cas de difficult&eacute;s, je peux compter sur le soutien de mes coll&egrave;gues :<br/><input type="radio" name="C5" value="0" id="C50"/> pas d'accord<input type="radio" name="C5" value="1" id="C51"/> plut&ocirc;t pas d'accord<input type="radio" name="C5" value="2" id="C52"/> plut&ocirc;t d'accord<input type="radio" name="C5" value="3" id="C53"/> d'accord</p><p>6. Je sais identifier le bon interlocuteur hi&eacute;rarchique en cas de difficult&eacute; :<br/><input type="radio" name="C6" value="0" id="C60"/> pas d'accord<input type="radio" name="C6" value="1" id="C61"/> plut&ocirc;t pas d'accord<input type="radio" name="C6" value="2" id="C62"/> plut&ocirc;t d'accord<input type="radio" name="C6" value="3" id="C63"/> d'accord</p><p>7. Mon manager de proximit&eacute; est accessible, disponible, et pr&ecirc;te attention &agrave; ce que je dis :<br/><input type="radio" name="C7" value="0" id="C70"/> pas d'accord<input type="radio" name="C7" value="1" id="C71"/> plut&ocirc;t pas d'accord<input type="radio" name="C7" value="2" id="C72"/> plut&ocirc;t d'accord<input type="radio" name="C7" value="3" id="C73"/> d'accord</p><p>8. Mon environnement de travail est satisfaisant (bruit, espace, ergonomie, etc.) sur mes diff&eacute;rents lieux de travail :<br/><input type="radio" name="C8" value="0" id="C80"/> pas d'accord<input type="radio" name="C8" value="1" id="C81"/> plut&ocirc;t pas d'accord<input type="radio" name="C8" value="2" id="C82"/> plut&ocirc;t d'accord<input type="radio" name="C8" value="3" id="C83"/> d'accord</p><p>9. Des espaces et du temps d&eacute;di&eacute;s aux &eacute;changes professionnels existent :<br/><input type="radio" name="C9" value="0" id="C90"/> pas d'accord<input type="radio" name="C9" value="1" id="C91"/> plut&ocirc;t pas d'accord<input type="radio" name="C9" value="2" id="C92"/> plut&ocirc;t d'accord<input type="radio" name="C9" value="3" id="C93"/> d'accord</p><p>10 L’organisation du travail prend en compte les contraintes personnelles :<br/><input type="radio" name="C10" value="0" id="C100"/> pas d'accord<input type="radio" name="C10" value="1" id="C101"/> plut&ocirc;t pas d'accord<input type="radio" name="C10" value="2" id="C102"/> plut&ocirc;t d'accord<input type="radio" name="C10" value="3" id="C103"/> d'accord</p><p>11 L’organisation du travail et la r&eacute;partition des responsabilit&eacute;s sont claires :<br/><input type="radio" name="C11" value="0" id="C110"/> pas d'accord<input type="radio" name="C11" value="1" id="C111"/> plut&ocirc;t pas d'accord<input type="radio" name="C11" value="2" id="C112"/> plut&ocirc;t d'accord<input type="radio" name="C11" value="3" id="C113"/> d'accord</p><p>12 J’ai confiance dans la strat&eacute;gie de l’entreprise :<br/><input type="radio" name="C12" value="0" id="C120"/> pas d'accord<input type="radio" name="C12" value="1" id="C121"/> plut&ocirc;t pas d'accord<input type="radio" name="C12" value="2" id="C122"/> plut&ocirc;t d'accord<input type="radio" name="C12" value="3" id="C123"/> d'accord</p>
				<h3>Commentaires sur le niveau de Soutien (coll&egrave;gues et manager) :</h3><textarea name="commentairesSoutien" id="commentairesSoutien" rows="3" cols="50" maxlength="512"></textarea>
				<h3>D. Reconnaissance au travail</h3>
				<p>1. Ma position professionnelle correspond &agrave; ma qualification et &agrave; mes comp&eacute;tences :<br/><input type="radio" name="D1" value="0" id="D10"/> pas d'accord<input type="radio" name="D1" value="1" id="D11"/> plut&ocirc;t pas d'accord<input type="radio" name="D1" value="2" id="D12"/> plut&ocirc;t d'accord<input type="radio" name="D1" value="3" id="D13"/> d'accord</p><p>2. Ma r&eacute;mun&eacute;ration est coh&eacute;rente avec mon exp&eacute;rience professionnelle et  mes efforts d’adaptation :<br/><input type="radio" name="D2" value="0" id="D20"/> pas d'accord<input type="radio" name="D2" value="1" id="D21"/> plut&ocirc;t pas d'accord<input type="radio" name="D2" value="2" id="D22"/> plut&ocirc;t d'accord<input type="radio" name="D2" value="3" id="D23"/> d'accord</p><p>3. Mon travail a du sens :<br/><input type="radio" name="D3" value="0" id="D30"/> pas d'accord<input type="radio" name="D3" value="1" id="D31"/> plut&ocirc;t pas d'accord<input type="radio" name="D3" value="2" id="D32"/> plut&ocirc;t d'accord<input type="radio" name="D3" value="3" id="D33"/> d'accord</p><p>4. J’ai des informations claires sur l’&eacute;volution de mon emploi actuel, et mes besoins en formation :<br/><input type="radio" name="D4" value="0" id="D40"/> pas d'accord<input type="radio" name="D4" value="1" id="D41"/> plut&ocirc;t pas d'accord<input type="radio" name="D4" value="2" id="D42"/> plut&ocirc;t d'accord<input type="radio" name="D4" value="3" id="D43"/> d'accord</p><p>5. Je suis inquiet par rapport &agrave; l’&eacute;volution de mon m&eacute;tier :<br/><input type="radio" name="D5" value="3" id="D50"/> pas d'accord<input type="radio" name="D5" value="2" id="D51"/> plut&ocirc;t pas d'accord<input type="radio" name="D5" value="1" id="D52"/> plut&ocirc;t d'accord<input type="radio" name="D5" value="0" id="D53"/> d'accord</p><p>6. La qualit&eacute; de mon travail est reconnue par mes coll&egrave;gues :<br/><input type="radio" name="D6" value="0" id="D60"/> pas d'accord<input type="radio" name="D6" value="1" id="D61"/> plut&ocirc;t pas d'accord<input type="radio" name="D6" value="2" id="D62"/> plut&ocirc;t d'accord<input type="radio" name="D6" value="3" id="D63"/> d'accord</p><p>7. Mon &eacute;valuation professionnelle est transparente et fond&eacute;e sur les bons crit&egrave;res :<br/><input type="radio" name="D7" value="0" id="D70"/> pas d'accord<input type="radio" name="D7" value="1" id="D71"/> plut&ocirc;t pas d'accord<input type="radio" name="D7" value="2" id="D72"/> plut&ocirc;t d'accord<input type="radio" name="D7" value="3" id="D73"/> d'accord</p><p>8. Mon manager connaît bien mon travail et je peux &eacute;changer avec lui pour construire des solutions :<br/><input type="radio" name="D8" value="0" id="D80"/> pas d'accord<input type="radio" name="D8" value="1" id="D81"/> plut&ocirc;t pas d'accord<input type="radio" name="D8" value="2" id="D82"/> plut&ocirc;t d'accord<input type="radio" name="D8" value="3" id="D83"/> d'accord</p><p>9. Mon travail est appr&eacute;ci&eacute; &agrave; sa juste valeur par des tiers (clients, etc.) :<br/><input type="radio" name="D9" value="0" id="D90"/> pas d'accord<input type="radio" name="D9" value="1" id="D91"/> plut&ocirc;t pas d'accord<input type="radio" name="D9" value="2" id="D92"/> plut&ocirc;t d'accord<input type="radio" name="D9" value="3" id="D93"/> d'accord</p><p>10 Les organisations de travail favorisent la construction et les &eacute;changes de savoir faire :<br/><input type="radio" name="D10" value="0" id="D100"/> pas d'accord<input type="radio" name="D10" value="1" id="D101"/> plut&ocirc;t pas d'accord<input type="radio" name="D10" value="2" id="D102"/> plut&ocirc;t d'accord<input type="radio" name="D10" value="3" id="D103"/> d'accord</p><p>11 Mon activit&eacute; professionnelle est en accord avec mon &eacute;thique :<br/><input type="radio" name="D11" value="0" id="D110"/> pas d'accord<input type="radio" name="D11" value="1" id="D111"/> plut&ocirc;t pas d'accord<input type="radio" name="D11" value="2" id="D112"/> plut&ocirc;t d'accord<input type="radio" name="D11" value="3" id="D113"/> d'accord</p><p>12 Mes souhaits d’&eacute;volution professionnelle sont pris en compte :<br/><input type="radio" name="D12" value="0" id="D120"/> pas d'accord<input type="radio" name="D12" value="1" id="D121"/> plut&ocirc;t pas d'accord<input type="radio" name="D12" value="2" id="D122"/> plut&ocirc;t d'accord<input type="radio" name="D12" value="3" id="D123"/> d'accord</p>
				<h3>Commentaires sur le niveau de Reconnaissance au travail :</h3><textarea name="commentairesReconnaissance" id="commentairesReconnaissance" rows="3" cols="50" maxlength="512"></textarea><hr/>
				<p><button id="sauverquestionnaire" onclick="saveTextAsFile()">Sauvegarder</button><button id="traiterquestionnaire" onclick="traiter()">Traiter</button><button id="effacerquestionnaire" onclick="effacer()">Effacer</button></p>`;
const questionnaireqvtindividuel = `<h2>Analyse individuelle</h2><h3>Charger un fichier sauvegardé :</h3><input type="file" accept=".csv" id="fileToLoad"><button class="boutoncharger" id="chargerindividu" onclick="chargeri()">Charger</button>`;
const questionnaireqvtgroupe = `<h2>Analyse groupée</h2><h3>Charger les fichiers sauvegardés d'un groupe :</h3><input type="file" multiple="multiple" accept=".csv" id="filesToLoad"><button class="boutoncharger" id="chargergroupe" onclick="chargerp(false)">Charger</button>`;
const questionnaireqvtcollectif = `<h2>Analyse collective</h2><h3>Charger les fichiers sauvegardés d'un collectif :</h3><input type="file" multiple="multiple" accept=".csv" id="filesToLoadc"><button class="boutoncharger" id="chargercollectif" onclick="chargerp(true)">Charger</button>`;
const questionnaireencadrant = ['<input type="checkbox" id="E1" name="A1" value="1"><label id="labelE1" for="1">Adéquation entre moyens et objectifs du service</label><br/>',
							'<input type="checkbox" id="E2" name="A2" value="1"><label id="labelE2" for="2">Respect du rôle contributif en comité de direction</label><br/>',
							'<input type="checkbox" id="E3" name="A3" value="1"><label id="labelE3" for="3">Reconnaissance du rôle d\'encadrant</label><br/>',
							'<input type="checkbox" id="E4" name="A4" value="1"><label id="labelE4" for="4">Collectif de travail participatif</label><br/>',
							'<input type="checkbox" id="E5" name="A5" value="1"><label id="labelE5" for="5">Autonomie et confiance pour la gestion quotidienne de l\'équipe</label><br/>',
							'<input type="checkbox" id="E6" name="A6" value="1"><label id="labelE6" for="6">Echanges et communications hiérarchiques respectueux</label><br/>',
							'<input type="checkbox" id="E7" name="A7" value="1"><label id="labelE7" for="7">Respect du temps de travail</label><br/>',
							'<input type="checkbox" id="E8" name="A8" value="1"><label id="labelE8" for="8">Déconnexion réelle</label><br/>',
							'<input type="checkbox" id="E9" name="B1" value="1"><label id="labelE9" for="9">Remise en cause culpabilisante du fonctionnement du service</label><br/>',
							'<input type="checkbox" id="E10" name="B2" value="1"><label id="labelE10" for="10">Pas d\'écoute et isolmement en comité de direction</label><br/>',
							'<input type="checkbox" id="E11" name="B3" value="1"><label id="labelE11" for="11">Personnalisation des difficultés rencontrées</label><br/>',
							'<input type="checkbox" id="E12" name="B4" value="1"><label id="labelE12" for="12">Défiance des supérieurs, déni des difficultés exprimées</label><br/>',
							'<input type="checkbox" id="E13" name="B5" value="1"><label id="labelE13" for="13">Consignes paradoxales et contrôle</label><br/>',
							'<input type="checkbox" id="E14" name="B6" value="1"><label id="labelE14" for="14">Echanges conflictuels avec la hiérarchie</label><br/>',
							'<input type="checkbox" id="E15" name="B7" value="1"><label id="labelE15" for="15">Travail supplémentaire non pris en compte</label><br/>',
							'<input type="checkbox" id="E16" name="B8" value="1"><label id="labelE16" for="16">Difficulté de déconnexion</label><br/>',
							'<input type="checkbox" id="E17" name="C1" value="1"><label id="labelE17" for="17">Inadéquation des moyens face aux objectifs du service</label><br/>',
							'<input type="checkbox" id="E18" name="C2" value="1"><label id="labelE18" for="18">Dénigrement et diffamation</label><br/>',
							'<input type="checkbox" id="E19" name="C3" value="1"><label id="labelE19" for="19">Mise sous tutelle et retrait des missions d\'encadrement</label><br/>',
							'<input type="checkbox" id="E20" name="C4" value="1"><label id="labelE20" for="20">Mise à l\'écart des circuits d\'information</label><br/>',
							'<input type="checkbox" id="E21" name="C5" value="1"><label id="labelE21" for="21">Extrême surveillance et déstabilisation</label><br/>',
							'<input type="checkbox" id="E22" name="C6" value="1"><label id="labelE22" for="22">Convocations récurrentes par la hiérarchie, sanctions</label><br/>',
							'<input type="checkbox" id="E23" name="C7" value="1"><label id="labelE23" for="23">Injonction à la mobilité, déroulement de carrière bloqué</label><br/>',
							'<input type="checkbox" id="E24" name="C8" value="1"><label id="labelE24" for="24">Exclusion, mise au placard</label><br/>'];
const questionnaireviolentometre = ['<input type="checkbox" id="V1" name="A1" value="1"><label id="labelV1" for="1">Remarques et critiques acceptées</label><br>',
							'<input type="checkbox" id="V2" name="A2" value="1"><label id="labelV2" for="2">Promotions pour les femmes comme pour les hommes</label><br>',
							'<input type="checkbox" id="V3" name="A3" value="1"><label id="labelV3" for="3">Travail en confiance et autonomie</label><br>',
							'<input type="checkbox" id="V4" name="A4" value="1"><label id="labelV4" for="4">Reconnaissance du travail</label><br>',
							'<input type="checkbox" id="V5" name="A5" value="1"><label id="labelV5" for="5">Refus de relations extraprofessionnelles accepté</label><br>',
							'<input type="checkbox" id="V6" name="B1" value="1"><label id="labelV6" for="6">Commentaires sur l\'apparence</label><br>',
							'<input type="checkbox" id="V7" name="B2" value="1"><label id="labelV7" for="7">Parole coupée systématiquement</label><br>',
							'<input type="checkbox" id="V8" name="B3" value="1"><label id="labelV8" for="8">Blague sur les promotions canapé</label><br>',
							'<input type="checkbox" id="V9" name="B4" value="1"><label id="labelV9" for="9">Questions indiscrètes insistantes sur la vie privée</label><br>',
							'<input type="checkbox" id="V10" name="B5" value="1"><label id="labelV10" for="10">Blagues sexistes sur les blondes</label><br>',
							'<input type="checkbox" id="V11" name="B6" value="1"><label id="labelV11" for="11">Evocation de sexualité sans accord</label><br>',
							'<input type="checkbox" id="V12" name="B7" value="1"><label id="labelV12" for="12">Mécontentement après refus d\'être raccompagnée</label><br>',
							'<input type="checkbox" id="V13" name="B8" value="1"><label id="labelV13" for="13">Recherche systématique d\'être seul avec une femme</label><br>',
							'<input type="checkbox" id="V14" name="C1" value="1"><label id="labelV14" for="14">Images à caractère pornographique visibles</label><br>',
							'<input type="checkbox" id="V15" name="C2" value="1"><label id="labelV15" for="15">Regards insistants sur la poitrine et les fesses</label><br>',
							'<input type="checkbox" id="V16" name="C3" value="1"><label id="labelV16" for="16">SMS ou courriels à caractère sexuel sans accord</label><br>',
							'<input type="checkbox" id="V17" name="C4" value="1"><label id="labelV17" for="17">Demande insistante d\'un acte sexuel</label><br>',
							'<input type="checkbox" id="V18" name="C5" value="1"><label id="labelV18" for="18">Hostilité liée au refus d\'un acte sexuel</label><br>',
							'<input type="checkbox" id="V19" name="D1" value="1"><label id="labelV19" for="19">Menaces professionnelles pour obtenir un acte sexuel</label><br>',
							'<input type="checkbox" id="V20" name="D2" value="1"><label id="labelV20" for="20">Baiser forcé ou par surprise</label><br>',
							'<input type="checkbox" id="V21" name="D3" value="1"><label id="labelV21" for="21">Toucher les seins, fesses ou cuisses sans consentement</label><br>',
							'<input type="checkbox" id="V22" name="E1" value="1"><label id="labelV22" for="22">Fellation ou pénétration forcée</label><br>'];
const questionnairerps = ['<input type="checkbox" id="R1" name="A1" value="1"><label id="labelR1" for="1">Sens du travail</label><br/>',
							'<input type="checkbox" id="R2" name="A2" value="1"><label id="labelR2" for="2">Autonomie</label><br/>',
							'<input type="checkbox" id="R3" name="A3" value="1"><label id="labelR3" for="3">Charge de travail adaptée et effectifs suffisants</label><br/>',
							'<input type="checkbox" id="R4" name="A4" value="1"><label id="labelR4" for="4">Respect du temps de travail</label><br/>',
							'<input type="checkbox" id="R5" name="A5" value="1"><label id="labelR5" for="5">Reconnaissance</label><br/>',
							'<input type="checkbox" id="R6" name="A6" value="1"><label id="labelR6" for="6">Ambiance de travail agréable</label><br/>',
							'<input type="checkbox" id="R7" name="A7" value="1"><label id="labelR7" for="7">Déconnexion réelle</label><br/>',
							'<input type="checkbox" id="R8" name="A8" value="1"><label id="labelR8" for="8">Télétravail satisfaisant</label><br/>',
							'<input type="checkbox" id="R9" name="B1" value="1"><label id="labelR9" for="9">Interrogation sur le sens du travail</label><br/>',
							'<input type="checkbox" id="R10" name="B2" value="1"><label id="labelR10" for="10">Pressions et contrôles hiérarchiques</label><br/>',
							'<input type="checkbox" id="R11" name="B3" value="1"><label id="labelR11" for="11">Augmentation du volume de travail</label><br/>',
							'<input type="checkbox" id="R12" name="B4" value="1"><label id="labelR12" for="12">Pas de prise en compte des heures supplémentaires</label><br/>',
							'<input type="checkbox" id="R13" name="B5" value="1"><label id="labelR13" for="13">Manque de reconnaissance</label><br/>',
							'<input type="checkbox" id="R14" name="B6" value="1"><label id="labelR14" for="14">Relations interprofessionnelles dégradées</label><br/>',
							'<input type="checkbox" id="R15" name="B7" value="1"><label id="labelR15" for="15">Difficulté à se déconnecter</label><br/>',
							'<input type="checkbox" id="R16" name="B8" value="1"><label id="labelR16" for="16">Télétravail en mode dégradé</label><br/>',
							'<input type="checkbox" id="R17" name="C1" value="1"><label id="labelR17" for="17">Perte de sens du travail</label><br/>',
							'<input type="checkbox" id="R18" name="C2" value="1"><label id="labelR18" for="18">Subordination exacerbée, corvéabilité</label><br/>',
							'<input type="checkbox" id="R19" name="C3" value="1"><label id="labelR19" for="19">Charge de travail surdimensionnée ou sous-dimensionnée</label><br/>',
							'<input type="checkbox" id="R20" name="C4" value="1"><label id="labelR20" for="20">Dépassement généralisé du temps de travail et travail gris</label><br/>',
							'<input type="checkbox" id="R21" name="C5" value="1"><label id="labelR21" for="21">Aucune reconnaissance</label><br/>',
							'<input type="checkbox" id="R22" name="C6" value="1"><label id="labelR22" for="22">Reproches incessants, humiliations, isolement</label><br/>',
							'<input type="checkbox" id="R23" name="C7" value="1"><label id="labelR23" for="23">Impossibilité à se déconnecter</label><br/>',
							'<input type="checkbox" id="R24" name="C8" value="1"><label id="labelR24" for="24">Télétravail subi en mode très dégradé</label><br/>']
const referentielviolentometre = ``;
const referentielencadrant = ``;
const referentielrps = ``;
function menuButtonClick(event) {
	var buttons = document.getElementsByClassName("menu");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "";
		buttons[i].style.color = "";
	}
	event.target.style.backgroundColor = "#cdcccc";
	event.target.style.color = "#8b0000";
}
function sousmenuButtonClick(event) {
	var buttons = document.getElementsByClassName("sousmenu");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor = "";
		buttons[i].style.color = "";
	}
	event.target.style.backgroundColor = "#cdcccc";
	event.target.style.color = "#8b0000";
}
function menu(menuname)
{
	if (menuname == "apropos")
	{
		var aproposdiv = document.createElement("div");
		aproposdiv.id = "aproposdiv";
		aproposdiv.className = "aproposdiv";
		aproposdiv.innerHTML = apropos + '<br/><button id="closeapropos">X</button>';
		document.body.appendChild(aproposdiv);
		var darken = document.createElement("div");
		darken.id = "darken";
		document.body.appendChild(darken);
		document.getElementById("darken").style.position = "fixed";
		document.getElementById("darken").style.top = "0";
		document.getElementById("darken").style.left = "0";
		document.getElementById("darken").style.width = "100%";
		document.getElementById("darken").style.height = "100%";
		document.getElementById("darken").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		document.getElementById("darken").style.zIndex = "999";
		document.getElementById("closeapropos").addEventListener("click", function() {
			document.getElementById("aproposdiv").remove();
			document.getElementById("darken").remove();
		});
	}
	else
	{
		document.getElementById("sousmenu").innerHTML = eval("sousmenu" + menuname);
	}
}
function sousmenu(sousmenuname)
{
	if (sousmenuname.charAt(0) == "q")
	{
		sousmenuname.includes("qvt")?(document.getElementById("questionnaire").innerHTML = eval(sousmenuname)):(document.getElementById("questionnaire").innerHTML = melanger(eval(sousmenuname),sousmenuname.substring(13)));
		return;
	}
	else if (sousmenuname.charAt(0) == "i")
	{
		document.getElementById("info").innerHTML = eval(sousmenuname);
		return;
	}
	else if (sousmenuname.charAt(0) == "r")
	{
		document.getElementById("recos").innerHTML = eval(sousmenuname);
		return;
	}
}
function melanger(tableau, sujet)
{
	var resultat = "<h2>Questionnaire " + (sujet=='violentometre'?'Violentom&egrave;tre':sujet=='rps'?'RPS':'Encadrant') + "</h2><h3>Quelles sont les situations de travail que vous avez rencontrées ?</h3>";
    for (i = tableau.length - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    for (n=0;n<tableau.length;n++)
    {
        resultat += tableau[n];
    }
    resultat += '<hr/><button onclick="calcul(\''+sujet+'\')">Calculer</button>';
	return resultat;
}
function calcul(sujet)
{
	var layout = {paper_bgcolor: '#565656',font: {size: 14, color: '#cdcccc'},margin: {b:10,l:100,r:100,t:10},legend: {x: 0.2,y: -0.5},showlegend: true,polar: {bgcolor: "#d7d9dc",barmode: "overlay",bargap: 0,radialaxis: {ticks: "", showline: false, showticklabels: false},angularaxis: {direction: "clockwise"}},autosize:true};
	var config = {staticPlot: true,responsive: true};
    switch (sujet)
    {
        case "encadrant":
            var A = 0;
            var B = 0;
            var C = 0;
            for (i=1;i<25;i++)
            {
				if (document.getElementById("E" + i).checked)
				{
					switch (document.getElementById("E" + i).name.charAt(0))
					{
					case "A":
						A += 1;
						break;
					case "B":
						B += 1;
						break;
					case "C":
						C += 1;
						break;
					default:
						break;
					}
				}
            }
            if (A+B+C != 0)
            {
                var rA = [0,0,0];
                var rB = [0,0,0];
                var rC = [0,0,0];                
                rA[0] = A;
                rB[1] = (B>0) ? B+8 : 0;
                rC[2] = (C>0) ? C+16 : 0;
                var vtheta = ["Environnement de travail de Qualité", "Environnement de travail Dégradé", "Environnement de travail de Rupture"];
                var data = [{r: rA,theta: vtheta,name: "Environnement de travail de qualité",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
							{r: rB,theta: vtheta,name: "Environnement de travail dégradé",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
							{r: rC,theta: vtheta,name: "Environnement de travail de rupture",marker: {color: "red"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiquek", data, layout, config);
                var restitution = "<h2>Restitution du questionnaire Encadrant</h2><hr/><h3>Environnement de travail de Qualité :</h3>";
                var coches = [];
                var couleur = ["vert","vert","vert","vert","vert","vert","vert","vert","orange","orange","orange","orange","orange","orange","orange","orange","rouge","rouge","rouge","rouge","rouge","rouge","rouge","rouge"];
                for (var i=0;i<24;i++)
                {
					restitution += document.getElementById("E" + (i+1)).outerHTML + document.getElementById("labelE" + (i+1)).outerHTML + "<br>";
					if (document.getElementById("E" + (i+1)).checked)
					{
						coches[i] = true;
					}
					else
					{
						coches[i] = false;
					}
					i==7?restitution += "<h3>Environnement de travail Dégradé :</h3>":i==15?restitution += "<h3>Environnement de travail de Rupture :</h3>":"";
                }
                document.getElementById("questionnaire").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("E" + (i+1)).checked = true;
					}
					document.getElementById("E" + (i+1)).disabled = true;
					document.getElementById("labelE" + (i+1)).className = couleur[i];
                }
            }
			break;
        case "violentometre":
            var A = 0;
            var B = 0;
            var C = 0;
            var D = 0;
            var E = 0;
            for (var i=1;i<23;i++)
            {
                if (document.getElementById("V" + i).checked)
                {
					switch (document.getElementById("V" + i).name.charAt(0))
					{
						case "A":
							A += 1;
							break;
						case "B":
							B += 1;
							break;
						case "C":
							C += 1;
							break;
						case "D":
							D += 1;
							break;
						case "E":
							E += 1;
							break;
						default:
					}
                }
            }
            if (A+B+C+D+E != 0)
            {
                var rE = [0,0,0,0,0];
                var rD = [0,0,0,0,0];
                var rC = [0,0,0,0,0];
                var rB = [0,0,0,0,0];
                var rA = [0,0,0,0,0];
                rA[0] = A;
                rB[1] = (B>0) ? B+5 : 0;
                rC[2] = (C>0) ? C+13 : 0;
                rD[3] = (D>0) ? D+18 : 0;
                rE[4] = (E>0) ? E+21 : 0;
                var vtheta = ["Environnement Pro Sain", "Environnement Pro Sexiste & Hostile", "Harcèlement Sexuel", "Agression Sexuelle", "Viol"];
                var data = [{r: rA,theta: vtheta,name: "Environnement pro sain",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
                			{r: rB,theta: vtheta,name: "Environnement pro sexiste et hostile",marker: {color: "yellow"},type: "barpolar",hoverinfo: "name"},
                			{r: rC,theta: vtheta,name: "Harcèlement sexuel",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
                			{r: rD,theta: vtheta,name: "Agression sexuelle",marker: {color: "red"},type: "barpolar",hoverinfo: "name"},
                			{r: rE,theta: vtheta,name: "Viol",marker: {color: "black"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiquek", data, layout, config);
                var restitution = "<h2>Restitution du questionnaire Violentom&egrave;tre</h2><hr/><h3>Environnement de travail Sain :</h3>";
                var coches = [];
                var couleur = ["vert","vert","vert","vert","vert","jaune","jaune","jaune","jaune","jaune","jaune","jaune","jaune","orange","orange","orange","orange","orange","rouge","rouge","rouge","noir"];
                for (var i=0;i<22;i++)
                {
					restitution += document.getElementById("V" + (i+1)).outerHTML + document.getElementById("labelV" + (i+1)).outerHTML + "<br>";
					if (document.getElementById("V" + (i+1)).checked)
					{
						coches[i] = true;
					}
					else
					{
						coches[i] = false;
					}
					i==4?restitution += "<h3>Environnement de travail Sexiste et Hostile :</h3>":i==12?restitution += "<h3>Harcèlement Sexuel :</h3>":i==17?restitution += "<h3>Agression Sexuelle :</h3>":i==20?restitution += "<h3>Viol :</h3>":"";
                }
                document.getElementById("questionnaire").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("V" + (i+1)).checked = true;
					}
					document.getElementById("V" + (i+1)).disabled = true;
					document.getElementById("labelV" + (i+1)).className = couleur[i];
                }
            }
            break;
        case "rps":
			var A = 0;
            var B = 0;
            var C = 0;
            for (i=1;i<25;i++)
            {
				if (document.getElementById("R" + i).checked)
				{
					switch (document.getElementById("R" + i).name.charAt(0))
					{
						case "A":
							A += 1;
							break;
						case "B":
							B += 1;
							break;
						case "C":
							C += 1;
							break;
						default:
							break;
					}
				}
            }
            if (A+B+C != 0)
            {
                var rA = [0,0,0];
                var rB = [0,0,0];
                var rC = [0,0,0];                
                rA[0] = A;
                rB[1] = (B>0) ? B+8 : 0;
                rC[2] = (C>0) ? C+16 : 0;
                var vtheta = ["Environnement Pro de Qualité", "Environnement Pro Dégradé", "Environnement Pro de Rupture"];
                var data = [{r: rA,theta: vtheta,name: "Environnement de travail de qualité",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
							{r: rB,theta: vtheta,name: "Environnement de travail dégradé",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
							{r: rC,theta: vtheta,name: "Environnement de travail de rupture",marker: {color: "red"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiquek", data, layout, config);
                var restitution = "<h2>Restitution du questionnaire Encadrant</h2><hr/><h3>Environnement de travail de Qualité :</h3>";
                var coches = [];
                var couleur = ["vert","vert","vert","vert","vert","vert","vert","vert","orange","orange","orange","orange","orange","orange","orange","orange","rouge","rouge","rouge","rouge","rouge","rouge","rouge","rouge"];
                for (var i=0;i<24;i++)
                {
					restitution += document.getElementById("R" + (i+1)).outerHTML + document.getElementById("labelR" + (i+1)).outerHTML + "<br>";
					if (document.getElementById("R" + (i+1)).checked)
					{
						coches[i] = true;
					}
					else
					{
						coches[i] = false;
					}
					i==7?restitution += "<h3>Environnement de travail Dégradé :</h3>":i==15?restitution += "<h3>Environnement de travail de Rupture :</h3>":"";
                }
                document.getElementById("questionnaire").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("R" + (i+1)).checked = true;
					}
					document.getElementById("R" + (i+1)).disabled = true;
					document.getElementById("labelR" + (i+1)).className = couleur[i];
                }
            }
            break;
        default:
            break;
    }
}
function traiter(flag)
{
	document.body.style.cursor="wait";
	var cocheA = false;
	var cocheB = false;
	var cocheC = false;
	var cocheD = false;
	var manqueA = [];
	var manqueB = [];
	var manqueC = [];
	var manqueD = [];
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
				cocheA = true;
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
				cocheB = true;
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
				cocheC = true;
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
				cocheD = true;
			}
		}
		if (cocheA === false)
		{
			manqueA[(x-1)] = "A" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = "B" + x;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = "C" + x;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = "D" + x;
		}
		cocheA = false;
		cocheB = false;
		cocheC = false;
		cocheD = false;
	}
	if (manqueA.length > 0)
	{
		var indexpremier = manqueA.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Exigences");		
        if (indexpremier === 0)
        {
            window.scrollTo(0,0);
        }
        else
        {
            document.getElementById("A" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
        if (indexpremier === 0)
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("A123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("B" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
        if (indexpremier === 0)
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("B123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("C" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
        if (indexpremier === 0)
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("C123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("D" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
		{
			prechargement();
		}
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
			}
		}
	}
	var positionK = positionpoint(soutien, exigences, autonomie);
	var positionS = positionpoint(reconnaissance, exigences, autonomie);
	var textepointK;
	var textepointS;
	var couleurpointK;
	var couleurpointS;
	switch (positionK)
	{
		case 1:
			textepointK = "Le point est dans la zone de travail protecteur :)";
			couleurpointK = "darkgreen";
			break;
		case 2:
			textepointK = "Le point est dans la zone d\'attention.";
			couleurpointK = "yellow";
			break;
		case 3:
			textepointK = "Le point est dans la zone d\'alerte !";
			couleurpointK = "darkorange";
			break;
		case 4:
			textepointK = "Le point est dans la zone de risque pour la santé :(";
			couleurpointK = "red";
			break;
		default:
			textepointK = "";
			couleurpointK = "darkgrey";
	}
	switch (positionS)
	{
		case 1:
			textepointS = "Le point est dans la zone de travail protecteur :)";
			couleurpointS = "darkgreen";
			break;
		case 2:
			textepointS = "Le point est dans la zone d\'attention.";
			couleurpointS = "yellow";
			break;
		case 3:
			textepointS = "Le point est dans la zone d\'alerte !";
			couleurpointS = "darkorange";
			break;
		case 4:
			textepointS = "Le point est dans la zone de risque pour la santé :(";
			couleurpointS = "red";
			break;
		default:
			textepointS = "";
			couleurpointS = "darkgrey";
	}
	var fexigences = false;
	var fautonomie = false;
	var fsoutien = false;
	var freconnaissance = false;
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((soutien > 18) && (soutien < 28)))
	{
		fexigences = true;
		fautonomie = true;
		fsoutien = true;
	}
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((reconnaissance > 18) && (reconnaissance < 28)))
	{
		fexigences = true;
		fautonomie = true;
		freconnaissance = true;
	}
	if (exigences > 18)
	{
		fexigences = true;
	}
	if (autonomie < 19)
	{
		fautonomie = true;
	}
	if (soutien < 19)
	{
		fsoutien = true;
	}
	if (reconnaissance < 19)
	{
		freconnaissance = true;
	}
	if (fexigences === true)
	{
		document.getElementById("cexigences").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul>";
	}
	else if ((exigences < 10) && (autonomie > 27))
		{
			document.getElementById("cexigences").innerHTML = "<p>NB : &ecirc;tre attentif au bore-out lorsque les exigences sont faibles et l'autonomie &eacute;lev&eacute;e.</p>";
		}
	if (fautonomie === true)
	{
		document.getElementById("cautonomie").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche2-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 2 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (fsoutien === true)
	{
		document.getElementById("csoutien").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche1-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 1 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche3-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 3 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (freconnaissance === true)
	{
		document.getElementById("creconnaissance").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche4-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 4 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche5-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 5 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (exigences < 10)
	{
		document.getElementById('rexigences').style.backgroundColor = 'green';
	}
	else if (exigences < 19)
		{
			document.getElementById('rexigences').style.backgroundColor = 'yellow';
		}
		else if (exigences < 28)
		{
			document.getElementById('rexigences').style.backgroundColor = 'orange';
		}
		else
		{
			document.getElementById('rexigences').style.backgroundColor = 'red';
		}
	if (autonomie < 10)
	{
		document.getElementById('rautonomie').style.backgroundColor = 'red';
	}
	else if (autonomie < 19)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'orange';
		}
		else if (autonomie < 28)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rautonomie').style.backgroundColor = 'green';
		}
	if (soutien < 10)
	{
		document.getElementById('rsoutien').style.backgroundColor = 'red';
	}
	else if (soutien < 19)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'orange';
		}
		else if (soutien < 28)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rsoutien').style.backgroundColor = 'green';
		}
	if (reconnaissance < 10)
	{
		document.getElementById('rreconnaissance').style.backgroundColor = 'red';
	}
	else if (reconnaissance < 19)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'orange';
		}
		else if (reconnaissance < 28)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'green';
		}
	var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointK}, marker:{color: couleurpointK}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointS}, marker:{color: couleurpointS}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById('karasek'), updateK);
	Plotly.addTraces(document.getElementById('siegrist'), updateS);
	Plotly.restyle(document.getElementById('karasek'),layout);
	Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
	Plotly.restyle(document.getElementById('siegrist'),layout);
	Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
	if (flag != true)
	{
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Traitement direct du questionnaire.";
	}
	document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
	document.getElementById("Recommandations").style.visibility = 'visible';	
	document.getElementById("Recommandations").scrollIntoView(true);
}
function sauveimages()
{
    var timestamp = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0');
    var filenameK = "graphiqueQVT-K_" + timestamp;
    var filenameS = "graphiqueQVT-S_" + timestamp;
    Plotly.downloadImage(document.getElementById('karasek'), {format: 'png', width: 800, height: 800, filename: filenameK});
    Plotly.downloadImage(document.getElementById('siegrist'), {format: 'png', width: 800, height: 800, filename: filenameS});
}
function positionpoint(pointx, exigences, autonomie)
{
	var couleurexigences;
	var couleurautonomie;
	var couleurpointx;
	if ((exigences >= 0) && (exigences <= 9))
	{
		couleurexigences = 1;
	}
	if ((exigences >= 10) && (exigences <= 18))
	{
		couleurexigences = 10;
	}
	if ((exigences >= 19) && (exigences <= 27))
	{
		couleurexigences = 100;
	}
	if ((exigences >= 28) && (exigences <= 36))
	{
		couleurexigences = 1000;
	}
	if ((autonomie >= 0) && (autonomie <= 9))
	{
		couleurautonomie = 1000;
	}
	if ((autonomie >= 10) && (autonomie <= 18))
	{
		couleurautonomie = 100;
	}
	if ((autonomie >= 19) && (autonomie <= 27))
	{
		couleurautonomie = 10;
	}
	if ((autonomie >= 28) && (autonomie <= 36))
	{
		couleurautonomie = 1;
	}
	var intermediaire = couleurautonomie + couleurexigences;
	if ((intermediaire === 2) || (intermediaire === 11))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(1);
		}
		if ((pointx >= 10) && (pointx <= 18))
		{
			return(2);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(3);
		}		
	}
	if ((intermediaire === 20) || (intermediaire === 101))
	{
		if (((pointx >= 28) && (pointx <= 36)))
		{
			return(1);
		}
		if ((pointx >= 19) && (pointx <= 27))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(3);
		}
	}
	if ((intermediaire === 1001) || (intermediaire === 110) || (intermediaire === 1010) || (intermediaire === 200))
	{
		if ((pointx >= 28) && (pointx <= 36))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(4);
		}
	}
	if ((intermediaire === 1100) || (intermediaire === 2000))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(4);
		}
	}
	return(0);
}
function saveTextAsFile()
{
    var textToSave = "";
	var commentairesExigences = document.getElementById("commentairesExigences").value;
	var commentairesAutonomie = document.getElementById("commentairesAutonomie").value;
	var commentairesSoutien = document.getElementById("commentairesSoutien").value;
	var commentairesReconnaissance = document.getElementById("commentairesReconnaissance").value;
	var commentaire = "";
	for (var x = 1; x < 13; x++)
	{
		var questionA = document.getElementsByName("A" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionA[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}
		textToSave += ",";
	}
	textToSave += commentairesExigences.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionB = document.getElementsByName("B" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionB[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesAutonomie.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionC = document.getElementsByName("C" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionC[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesSoutien.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionD[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesReconnaissance.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "questionnaireQVT_" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + ".csv";
	var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "T&eacute;l&eacute;charger le fichier " + fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
function chargeri()
{
	fileToLoad = document.getElementById("fileToLoad").files;
	if (fileToLoad.length > 0)
    {
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + fileToLoad[0].name + " en tant qu'individu.";
    }
	if (!(fileToLoad[0].size > 0 && fileToLoad[0].name.slice(0,17) === "questionnaireQVT_" && fileToLoad[0].name.slice(-4) === ".csv"))
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : fichier invalide !";
	}
    else
    {
		var fileReader = new FileReader();
		fileReader.readAsText(fileToLoad[0], "UTF-8");
		fileReader.onload = function(fileLoadedEvent) 
		{
			var validationfichier = [];
			var textFromFileLoaded = fileLoadedEvent.target.result;
			var lignes = textFromFileLoaded.split("\n");
			var ligneA = lignes[0].split(",");
			var ligneB = lignes[1].split(",");
			var ligneC = lignes[2].split(",");
			var ligneD = lignes[3].split(",");
			for (var i = 0; i < 12; i++)
			{
				if (!(ligneA[i] === "pas d\'accord" || ligneA[i] === "plut\u00f4t pas d\'accord" || ligneA[i] === "plut\u00f4t d\'accord" || ligneA[i] === "d\'accord"))
				{
					validationfichier[i] = "A" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question A" + (i+1);
					break;
				}
				else if (!(ligneB[i] === "pas d\'accord" || ligneB[i] === "plut\u00f4t pas d\'accord" || ligneB[i] === "plut\u00f4t d\'accord" || ligneB[i] === "d\'accord"))
				{
					validationfichier[i] = "B" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question B" + (i+1);
				}
				else if (!(ligneC[i] === "pas d\'accord" || ligneC[i] === "plut\u00f4t pas d\'accord" || ligneC[i] === "plut\u00f4t d\'accord" || ligneC[i] === "d\'accord"))
				{
					validationfichier[i] = "C" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question C" + (i+1);
				}
				else if (!(ligneD[i] === "pas d\'accord" || ligneD[i] === "plut\u00f4t pas d\'accord" || ligneD[i] === "plut\u00f4t d\'accord" || ligneD[i] === "d\'accord"))
				{
					validationfichier[i] = "D" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question D" + (i+1);
				}
				else
				{
					validationfichier[i] = "OK";
				}
			}
			var found = validationfichier.findIndex(function(element) { return element != "OK";});
			if (found === -1 || fileToLoad.length === 1)
			{
				document.getElementById("commentairesExigences").value = ligneA[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesAutonomie").value = ligneB[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesSoutien").value = ligneC[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesReconnaissance").value = ligneD[12].replace(/\//g, "\n").replace(/;/g, ",");
				for (var i = 0; i < 12; i++)
				{
					var x = i+1;
					var checkA = document.getElementsByName("A" + x);
					var checkB = document.getElementsByName("B" + x);
					var checkC = document.getElementsByName("C" + x);
					var checkD = document.getElementsByName("D" + x);
					switch (ligneA[i])
					{
						case "pas d\'accord":
						checkA[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkA[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkA[2].checked = true;
						break;
						case "d\'accord":
						checkA[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneB[i])
					{
						case "pas d\'accord":
						checkB[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkB[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkB[2].checked = true;
						break;
						case "d\'accord":
						checkB[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneC[i])
					{
						case "pas d\'accord":
						checkC[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkC[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkC[2].checked = true;
						break;
						case "d\'accord":
						checkC[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneD[i])
					{
						case "pas d\'accord":
						checkD[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkD[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkD[2].checked = true;
						break;
						case "d\'accord":
						checkD[3].checked = true;
						break;
						default:
						break;
					}
				}
				if (found === -1)
				{
					traiter(true);
					document.getElementById("fileToLoad").value = "";
				}
				else
				{
					validationfichier.sort();
					if (parseInt(validationfichier[0].substr(1)) === 1)
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							window.scrollTo(0,0);
							break;
							case "B":
							document.getElementById("B123").scrollIntoView(true);
							document.getElementById("A123").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C123").scrollIntoView(true);
							document.getElementById("B123").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D123").scrollIntoView(true);
							document.getElementById("C123").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
					else
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							document.getElementById("A" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "B":
							document.getElementById("B" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
				}
            }
		}
    }
}
function effacer()
{
    for (var x = 1; x < 13; x++)
	{
		var resetA = document.getElementsByName("A" + x);
		var resetB = document.getElementsByName("B" + x);
		var resetC = document.getElementsByName("C" + x);
		var resetD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			resetA[i].checked = false;
			resetB[i].checked = false;
			resetC[i].checked = false;
			resetD[i].checked = false;
		}	
	};
	document.getElementById("commentairesExigences").value = "";
	document.getElementById("commentairesAutonomie").value = "";
	document.getElementById("commentairesSoutien").value = "";
	document.getElementById("commentairesReconnaissance").value = "";
	window.scrollTo(0,0);
}
function prechargement()
{
	document.body.style.cursor="wait";
    Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Soutien'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	var layoutsiegrist = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Reconnaissance'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis: {range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	Plotly.newPlot(document.getElementById('karasek'), dataK, layoutkarasek, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
	Plotly.newPlot(document.getElementById('siegrist'), dataS, layoutsiegrist, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
}
function purge(flag)
{
    if ((document.getElementById("karasek").data != undefined) && (document.getElementById("siegrist").data != undefined))
	{
        if(document.getElementById('karasek').data.length > 2 && document.getElementById('siegrist').data.length > 2)
        {
			if (flag === true)
			{
				Plotly.purge(document.getElementById('karasek'));
				Plotly.purge(document.getElementById('siegrist'));
				prechargement();
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement complet des cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
				document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
			}
			else
			{
				Plotly.deleteTraces(document.getElementById('karasek'), -1);
            	Plotly.deleteTraces(document.getElementById('siegrist'), -1);
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement du dernier ajout dans les cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
			}
        }
    }
}
function chargerp(flag)
{
    if (flag === true)
	{
		filesToLoad = document.getElementById("filesToLoadc").files;
	}
	else
	{
		filesToLoad = document.getElementById("filesToLoad").files;
	}
	if (filesToLoad.length > 0)
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + filesToLoad.length + " fichiers";
		if (flag === true)
		{
			document.getElementById("Messages").innerHTML += " en tant que collectif.";
		}
		else
		{
			document.getElementById("Messages").innerHTML += " en tant que groupe.";
		}
		compteur = 0;
		for (var n = 0; n < filesToLoad.length; n++)
		{
			if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
			{
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[n].name + " : fichier invalide !";
			}
			else
			{
                if (flag === false)
                {
                    if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                    {
                        prechargement();
                    }
                }
                soutien = [];
				reconnaissance = [];
				exigences = [];
				autonomie = [];
				texteK = [];
				texteS = [];
				couleurK = [];
				couleurS = [];
				vertk = 0;
				jaunek = 0;
				orangek = 0;
				rougek = 0;
				verts = 0;
				jaunes = 0;
				oranges = 0;
				rouges = 0;
				var fileReader = new FileReader();
				fileReader.readAsText(filesToLoad[n], "UTF-8");
				fileReader.onload = function(fileLoadedEvent) 
				{
                    var textFromFileLoaded = fileLoadedEvent.target.result;
					var lignes = textFromFileLoaded.split("\n");
					var ligneA = lignes[0].split(",");
					var ligneB = lignes[1].split(",");
					var ligneC = lignes[2].split(",");
					var ligneD = lignes[3].split(",");
					var tableauA = [[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[3,2,1,0],[0,1,2,3],[0,1,2,3]];
					var tableauB = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[3,2,1,0]];
					var tableauC = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var tableauD = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var scoreexigences = 0;
					var scoreautonomie = 0;
					var scoresoutien = 0;
					var scorereconnaissance = 0;
					for (var i = 0; i < 12; i++)
					{
						switch (ligneA[i])
						{
							case "pas d\'accord":
							scoreexigences += tableauA[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreexigences += tableauA[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreexigences += tableauA[i][2];
							break;
							case "d\'accord":
							scoreexigences += tableauA[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneB[i])
						{
							case "pas d\'accord":
							scoreautonomie += tableauB[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreautonomie += tableauB[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreautonomie += tableauB[i][2];
							break;
							case "d\'accord":
							scoreautonomie += tableauB[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneC[i])
						{
							case "pas d\'accord":
							scoresoutien += tableauC[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoresoutien += tableauC[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoresoutien += tableauC[i][2];
							break;
							case "d\'accord":
							scoresoutien += tableauC[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneD[i])
						{
							case "pas d\'accord":
							scorereconnaissance += tableauD[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scorereconnaissance += tableauD[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scorereconnaissance += tableauD[i][2];
							break;
							case "d\'accord":
							scorereconnaissance += tableauD[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
					}
                    soutien[compteur] = scoresoutien;
                    reconnaissance[compteur] = scorereconnaissance;
                    exigences[compteur] = scoreexigences;
                    autonomie[compteur] = scoreautonomie;
					var positionK = positionpoint(scoresoutien,scoreexigences,scoreautonomie);
					var positionS = positionpoint(scorereconnaissance,scoreexigences,scoreautonomie);
					var textepointK;
					var textepointS;
                    switch (positionK)
					{
						case 1:
							textepointK = "Le point est dans la zone de travail protecteur :)";
							couleurpointK = "darkgreen";
							vertk++;
							break;
						case 2:
							textepointK = "Le point est dans la zone d\'attention.";
							couleurpointK = "yellow";
							jaunek++;
							break;
						case 3:
							textepointK = "Le point est dans la zone d\'alerte !";
							couleurpointK = "darkorange";
							orangek++;
							break;
						case 4:
							textepointK = "Le point est dans la zone de risque pour la santé :(";
							couleurpointK = "red";
							rougek++;
							break;
						default:
							textepointK = "";
							couleurpointK = "darkgrey";
					}
					switch (positionS)
					{
						case 1:
							textepointS = "Le point est dans la zone de travail protecteur :)";
							couleurpointS = "darkgreen";
							verts++;
							break;
						case 2:
							textepointS = "Le point est dans la zone d\'attention.";
							couleurpointS = "yellow";
							jaunes++;
							break;
						case 3:
							textepointS = "Le point est dans la zone d\'alerte !";
							couleurpointS = "darkorange";
							oranges++;
							break;
						case 4:
							textepointS = "Le point est dans la zone de risque pour la santé :(";
							couleurpointS = "red";
							rouges++;
							break;
						default:
							textepointS = "";
							couleurpointS = "darkgrey";
					}
					textepointK += '<br>' + filesToLoad[compteur].name;
					textepointS += '<br>' + filesToLoad[compteur].name;
					if (flag === false)
                    {
                        var updateK = { x:[scoresoutien], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointK}, text: textepointK, marker:{color: couleurpointK}};
                        var updateS = { x:[scorereconnaissance], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointS}, text: textepointS, marker:{color: couleurpointS}};
                        var layout = {showlegend: false};
                        var style = {showlegend: true};
                        Plotly.addTraces(document.getElementById('karasek'), updateK);
                        Plotly.addTraces(document.getElementById('siegrist'), updateS);
                        Plotly.restyle(document.getElementById('karasek'),layout);
                        Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                        Plotly.restyle(document.getElementById('siegrist'),layout);
                        Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                    }
                    else
                    {
                        texteK[compteur] = textepointK;
					    texteS[compteur] = textepointS;
					    couleurK[compteur] = couleurpointK;
					    couleurS[compteur] = couleurpointS;
                    }
                    if (compteur === (filesToLoad.length - 1))
					{
						var moyexigences, moyautonomie, moysoutien, moyreconnaissance, medexigences, medautonomie, medsoutien, medreconnaissance;
						moyexigences = (exigences.reduce(function(a, b) { return a + b; }) / exigences.length).toFixed(2);
						moyautonomie = (autonomie.reduce(function(a, b) { return a + b; }) / autonomie.length).toFixed(2);
						moysoutien = (soutien.reduce(function(a, b) { return a + b; }) / soutien.length).toFixed(2);
						moyreconnaissance = (reconnaissance.reduce(function(a, b) { return a + b; }) / reconnaissance.length).toFixed(2);
						var numbers = exigences.slice(0).sort((a,b) => a - b);
  						var middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medexigences = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medexigences = (numbers[middle]).toFixed(2);
						}
						numbers = autonomie.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medautonomie = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medautonomie = (numbers[middle]).toFixed(2);
						}
						numbers = exigences.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medsoutien = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medsoutien = (numbers[middle]).toFixed(2);
						}
						numbers = exigences.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medreconnaissance = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medreconnaissance = (numbers[middle]).toFixed(2);
						}
						document.getElementById("aexigences").innerHTML = moyexigences;
						document.getElementById("aautonomie").innerHTML = moyautonomie;
						document.getElementById("asoutien").innerHTML = moysoutien;
						document.getElementById("areconnaissance").innerHTML = moyreconnaissance;
						document.getElementById("mexigences").innerHTML =  medexigences;
						document.getElementById("mautonomie").innerHTML =  medautonomie;
						document.getElementById("msoutien").innerHTML =  medsoutien;
						document.getElementById("mreconnaissance").innerHTML =  medreconnaissance;
						document.getElementById("svert").innerHTML = vertk;
						document.getElementById("sjaune").innerHTML = jaunek;
						document.getElementById("sorange").innerHTML = orangek;
						document.getElementById("srouge").innerHTML = rougek;
						document.getElementById("rvert").innerHTML = verts;
						document.getElementById("rjaune").innerHTML = jaunes;
						document.getElementById("rorange").innerHTML = oranges;
						document.getElementById("rrouge").innerHTML = rouges;
						if (flag === true)
                        {
                            if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                            {
                                prechargement();
                            }
                            var updateK = { x: soutien, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurK}, text: texteK, marker:{symbol: 'diamond', size: 4, opacity: 0.5} };
                            var updateS = { x: reconnaissance, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurS}, text: texteS, marker:{symbol: 'diamond', size: 4, opacity: 0.5}};
                            var layout = {showlegend: false};
                            var style = {showlegend: true};
                            Plotly.addTraces(document.getElementById('karasek'), updateK);
                            Plotly.addTraces(document.getElementById('siegrist'), updateS);
                            Plotly.restyle(document.getElementById('karasek'),layout);
                            Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                            Plotly.restyle(document.getElementById('siegrist'),layout);
                            Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoadc").value = ""; document.body.style.cursor="default";});
                        }
                        else
                        {
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = ""; document.body.style.cursor="default";});
                        }                        
                        document.getElementById("Recommandations").style.visibility = 'collapse';
						document.getElementById("Statistiques").style.visibility = 'visible';
						document.getElementById("Statistiques").scrollIntoView(true);
                    }
                    compteur++;
				};				
			}
        }
    }
}
function traiter(flag)
{
	document.body.style.cursor="wait";
	var cocheA = false;
	var cocheB = false;
	var cocheC = false;
	var cocheD = false;
	var manqueA = [];
	var manqueB = [];
	var manqueC = [];
	var manqueD = [];
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
				cocheA = true;
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
				cocheB = true;
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
				cocheC = true;
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
				cocheD = true;
			}
		}
		if (cocheA === false)
		{
			manqueA[(x-1)] = "A" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = "B" + x;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = "C" + x;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = "D" + x;
		}
		cocheA = false;
		cocheB = false;
		cocheC = false;
		cocheD = false;
	}
	if (manqueA.length > 0)
	{
		var indexpremier = manqueA.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Exigences");		
        if (indexpremier === 0)
        {
            window.scrollTo(0,0);
        }
        else
        {
            document.getElementById("A" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
        if (indexpremier === 0)
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("A123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("B" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
        if (indexpremier === 0)
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("B123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("C" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
        if (indexpremier === 0)
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("C123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("D" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
		{
			prechargement();
		}
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
			}
		}
	}
	var positionK = positionpoint(soutien, exigences, autonomie);
	var positionS = positionpoint(reconnaissance, exigences, autonomie);
	var textepointK;
	var textepointS;
	var couleurpointK;
	var couleurpointS;
	switch (positionK)
	{
		case 1:
			textepointK = "Le point est dans la zone de travail protecteur :)";
			couleurpointK = "darkgreen";
			break;
		case 2:
			textepointK = "Le point est dans la zone d\'attention.";
			couleurpointK = "yellow";
			break;
		case 3:
			textepointK = "Le point est dans la zone d\'alerte !";
			couleurpointK = "darkorange";
			break;
		case 4:
			textepointK = "Le point est dans la zone de risque pour la santé :(";
			couleurpointK = "red";
			break;
		default:
			textepointK = "";
			couleurpointK = "darkgrey";
	}
	switch (positionS)
	{
		case 1:
			textepointS = "Le point est dans la zone de travail protecteur :)";
			couleurpointS = "darkgreen";
			break;
		case 2:
			textepointS = "Le point est dans la zone d\'attention.";
			couleurpointS = "yellow";
			break;
		case 3:
			textepointS = "Le point est dans la zone d\'alerte !";
			couleurpointS = "darkorange";
			break;
		case 4:
			textepointS = "Le point est dans la zone de risque pour la santé :(";
			couleurpointS = "red";
			break;
		default:
			textepointS = "";
			couleurpointS = "darkgrey";
	}
	var fexigences = false;
	var fautonomie = false;
	var fsoutien = false;
	var freconnaissance = false;
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((soutien > 18) && (soutien < 28)))
	{
		fexigences = true;
		fautonomie = true;
		fsoutien = true;
	}
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((reconnaissance > 18) && (reconnaissance < 28)))
	{
		fexigences = true;
		fautonomie = true;
		freconnaissance = true;
	}
	if (exigences > 18)
	{
		fexigences = true;
	}
	if (autonomie < 19)
	{
		fautonomie = true;
	}
	if (soutien < 19)
	{
		fsoutien = true;
	}
	if (reconnaissance < 19)
	{
		freconnaissance = true;
	}
	if (fexigences === true)
	{
		document.getElementById("cexigences").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul>";
	}
	else if ((exigences < 10) && (autonomie > 27))
		{
			document.getElementById("cexigences").innerHTML = "<p>NB : &ecirc;tre attentif au bore-out lorsque les exigences sont faibles et l'autonomie &eacute;lev&eacute;e.</p>";
		}
	if (fautonomie === true)
	{
		document.getElementById("cautonomie").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche2-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 2 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (fsoutien === true)
	{
		document.getElementById("csoutien").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche1-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 1 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche3-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 3 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (freconnaissance === true)
	{
		document.getElementById("creconnaissance").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche4-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 4 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche5-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 5 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (exigences < 10)
	{
		document.getElementById('rexigences').style.backgroundColor = 'green';
	}
	else if (exigences < 19)
		{
			document.getElementById('rexigences').style.backgroundColor = 'yellow';
		}
		else if (exigences < 28)
		{
			document.getElementById('rexigences').style.backgroundColor = 'orange';
		}
		else
		{
			document.getElementById('rexigences').style.backgroundColor = 'red';
		}
	if (autonomie < 10)
	{
		document.getElementById('rautonomie').style.backgroundColor = 'red';
	}
	else if (autonomie < 19)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'orange';
		}
		else if (autonomie < 28)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rautonomie').style.backgroundColor = 'green';
		}
	if (soutien < 10)
	{
		document.getElementById('rsoutien').style.backgroundColor = 'red';
	}
	else if (soutien < 19)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'orange';
		}
		else if (soutien < 28)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rsoutien').style.backgroundColor = 'green';
		}
	if (reconnaissance < 10)
	{
		document.getElementById('rreconnaissance').style.backgroundColor = 'red';
	}
	else if (reconnaissance < 19)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'orange';
		}
		else if (reconnaissance < 28)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'green';
		}
	var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointK}, marker:{color: couleurpointK}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointS}, marker:{color: couleurpointS}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById('karasek'), updateK);
	Plotly.addTraces(document.getElementById('siegrist'), updateS);
	Plotly.restyle(document.getElementById('karasek'),layout);
	Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
	Plotly.restyle(document.getElementById('siegrist'),layout);
	Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
	if (flag != true)
	{
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Traitement direct du questionnaire.";
	}
	document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
	document.getElementById("Recommandations").style.visibility = 'visible';	
	document.getElementById("Recommandations").scrollIntoView(true);
}
function sauveimages()
{
    var timestamp = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0');
    var filenameK = "graphiqueQVT-K_" + timestamp;
    var filenameS = "graphiqueQVT-S_" + timestamp;
    Plotly.downloadImage(document.getElementById('karasek'), {format: 'png', width: 800, height: 800, filename: filenameK});
    Plotly.downloadImage(document.getElementById('siegrist'), {format: 'png', width: 800, height: 800, filename: filenameS});
}
function positionpoint(pointx, exigences, autonomie)
{
	var couleurexigences;
	var couleurautonomie;
	var couleurpointx;
	if ((exigences >= 0) && (exigences <= 9))
	{
		couleurexigences = 1;
	}
	if ((exigences >= 10) && (exigences <= 18))
	{
		couleurexigences = 10;
	}
	if ((exigences >= 19) && (exigences <= 27))
	{
		couleurexigences = 100;
	}
	if ((exigences >= 28) && (exigences <= 36))
	{
		couleurexigences = 1000;
	}
	if ((autonomie >= 0) && (autonomie <= 9))
	{
		couleurautonomie = 1000;
	}
	if ((autonomie >= 10) && (autonomie <= 18))
	{
		couleurautonomie = 100;
	}
	if ((autonomie >= 19) && (autonomie <= 27))
	{
		couleurautonomie = 10;
	}
	if ((autonomie >= 28) && (autonomie <= 36))
	{
		couleurautonomie = 1;
	}
	var intermediaire = couleurautonomie + couleurexigences;
	if ((intermediaire === 2) || (intermediaire === 11))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(1);
		}
		if ((pointx >= 10) && (pointx <= 18))
		{
			return(2);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(3);
		}		
	}
	if ((intermediaire === 20) || (intermediaire === 101))
	{
		if (((pointx >= 28) && (pointx <= 36)))
		{
			return(1);
		}
		if ((pointx >= 19) && (pointx <= 27))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(3);
		}
	}
	if ((intermediaire === 1001) || (intermediaire === 110) || (intermediaire === 1010) || (intermediaire === 200))
	{
		if ((pointx >= 28) && (pointx <= 36))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(4);
		}
	}
	if ((intermediaire === 1100) || (intermediaire === 2000))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(4);
		}
	}
	return(0);
}
function saveTextAsFile()
{
    var textToSave = "";
	var commentairesExigences = document.getElementById("commentairesExigences").value;
	var commentairesAutonomie = document.getElementById("commentairesAutonomie").value;
	var commentairesSoutien = document.getElementById("commentairesSoutien").value;
	var commentairesReconnaissance = document.getElementById("commentairesReconnaissance").value;
	var commentaire = "";
	for (var x = 1; x < 13; x++)
	{
		var questionA = document.getElementsByName("A" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionA[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}
		textToSave += ",";
	}
	textToSave += commentairesExigences.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionB = document.getElementsByName("B" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionB[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesAutonomie.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionC = document.getElementsByName("C" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionC[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesSoutien.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionD[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesReconnaissance.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "questionnaireQVT_" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + ".csv";
	var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "T&eacute;l&eacute;charger le fichier " + fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
function chargeri()
{
	fileToLoad = document.getElementById("fileToLoad").files;
	if (fileToLoad.length > 0)
    {
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + fileToLoad[0].name + " en tant qu'individu.";
    }
	if (!(fileToLoad[0].size > 0 && fileToLoad[0].name.slice(0,17) === "questionnaireQVT_" && fileToLoad[0].name.slice(-4) === ".csv"))
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : fichier invalide !";
	}
    else
    {
		var fileReader = new FileReader();
		fileReader.readAsText(fileToLoad[0], "UTF-8");
		fileReader.onload = function(fileLoadedEvent) 
		{
			var validationfichier = [];
			var textFromFileLoaded = fileLoadedEvent.target.result;
			var lignes = textFromFileLoaded.split("\n");
			var ligneA = lignes[0].split(",");
			var ligneB = lignes[1].split(",");
			var ligneC = lignes[2].split(",");
			var ligneD = lignes[3].split(",");
			for (var i = 0; i < 12; i++)
			{
				if (!(ligneA[i] === "pas d\'accord" || ligneA[i] === "plut\u00f4t pas d\'accord" || ligneA[i] === "plut\u00f4t d\'accord" || ligneA[i] === "d\'accord"))
				{
					validationfichier[i] = "A" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question A" + (i+1);
					break;
				}
				else if (!(ligneB[i] === "pas d\'accord" || ligneB[i] === "plut\u00f4t pas d\'accord" || ligneB[i] === "plut\u00f4t d\'accord" || ligneB[i] === "d\'accord"))
				{
					validationfichier[i] = "B" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question B" + (i+1);
				}
				else if (!(ligneC[i] === "pas d\'accord" || ligneC[i] === "plut\u00f4t pas d\'accord" || ligneC[i] === "plut\u00f4t d\'accord" || ligneC[i] === "d\'accord"))
				{
					validationfichier[i] = "C" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question C" + (i+1);
				}
				else if (!(ligneD[i] === "pas d\'accord" || ligneD[i] === "plut\u00f4t pas d\'accord" || ligneD[i] === "plut\u00f4t d\'accord" || ligneD[i] === "d\'accord"))
				{
					validationfichier[i] = "D" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question D" + (i+1);
				}
				else
				{
					validationfichier[i] = "OK";
				}
			}
			var found = validationfichier.findIndex(function(element) { return element != "OK";});
			if (found === -1 || fileToLoad.length === 1)
			{
				document.getElementById("commentairesExigences").value = ligneA[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesAutonomie").value = ligneB[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesSoutien").value = ligneC[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesReconnaissance").value = ligneD[12].replace(/\//g, "\n").replace(/;/g, ",");
				for (var i = 0; i < 12; i++)
				{
					var x = i+1;
					var checkA = document.getElementsByName("A" + x);
					var checkB = document.getElementsByName("B" + x);
					var checkC = document.getElementsByName("C" + x);
					var checkD = document.getElementsByName("D" + x);
					switch (ligneA[i])
					{
						case "pas d\'accord":
						checkA[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkA[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkA[2].checked = true;
						break;
						case "d\'accord":
						checkA[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneB[i])
					{
						case "pas d\'accord":
						checkB[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkB[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkB[2].checked = true;
						break;
						case "d\'accord":
						checkB[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneC[i])
					{
						case "pas d\'accord":
						checkC[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkC[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkC[2].checked = true;
						break;
						case "d\'accord":
						checkC[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneD[i])
					{
						case "pas d\'accord":
						checkD[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkD[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkD[2].checked = true;
						break;
						case "d\'accord":
						checkD[3].checked = true;
						break;
						default:
						break;
					}
				}
				if (found === -1)
				{
					traiter(true);
					document.getElementById("fileToLoad").value = "";
				}
				else
				{
					validationfichier.sort();
					if (parseInt(validationfichier[0].substr(1)) === 1)
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							window.scrollTo(0,0);
							break;
							case "B":
							document.getElementById("B123").scrollIntoView(true);
							document.getElementById("A123").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C123").scrollIntoView(true);
							document.getElementById("B123").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D123").scrollIntoView(true);
							document.getElementById("C123").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
					else
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							document.getElementById("A" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "B":
							document.getElementById("B" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
				}
            }
		}
    }
}
function effacer()
{
    for (var x = 1; x < 13; x++)
	{
		var resetA = document.getElementsByName("A" + x);
		var resetB = document.getElementsByName("B" + x);
		var resetC = document.getElementsByName("C" + x);
		var resetD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			resetA[i].checked = false;
			resetB[i].checked = false;
			resetC[i].checked = false;
			resetD[i].checked = false;
		}	
	};
	document.getElementById("commentairesExigences").value = "";
	document.getElementById("commentairesAutonomie").value = "";
	document.getElementById("commentairesSoutien").value = "";
	document.getElementById("commentairesReconnaissance").value = "";
	window.scrollTo(0,0);
}
function prechargement()
{
	document.body.style.cursor="wait";
    Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Soutien'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	var layoutsiegrist = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Reconnaissance'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis: {range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	Plotly.newPlot(document.getElementById('karasek'), dataK, layoutkarasek, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
	Plotly.newPlot(document.getElementById('siegrist'), dataS, layoutsiegrist, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
}
function purge(flag)
{
    if ((document.getElementById("karasek").data != undefined) && (document.getElementById("siegrist").data != undefined))
	{
        if(document.getElementById('karasek').data.length > 2 && document.getElementById('siegrist').data.length > 2)
        {
			if (flag === true)
			{
				Plotly.purge(document.getElementById('karasek'));
				Plotly.purge(document.getElementById('siegrist'));
				prechargement();
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement complet des cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
				document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
			}
			else
			{
				Plotly.deleteTraces(document.getElementById('karasek'), -1);
            	Plotly.deleteTraces(document.getElementById('siegrist'), -1);
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement du dernier ajout dans les cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
			}
        }
    }
}
function chargerp(flag)
{
    if (flag === true)
	{
		filesToLoad = document.getElementById("filesToLoadc").files;
	}
	else
	{
		filesToLoad = document.getElementById("filesToLoad").files;
	}
	if (filesToLoad.length > 0)
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + filesToLoad.length + " fichiers";
		if (flag === true)
		{
			document.getElementById("Messages").innerHTML += " en tant que collectif.";
		}
		else
		{
			document.getElementById("Messages").innerHTML += " en tant que groupe.";
		}
		compteur = 0;
		for (var n = 0; n < filesToLoad.length; n++)
		{
			if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
			{
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[n].name + " : fichier invalide !";
			}
			else
			{
                if (flag === false)
                {
                    if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                    {
                        prechargement();
                    }
                }
                soutien = [];
				reconnaissance = [];
				exigences = [];
				autonomie = [];
				texteK = [];
				texteS = [];
				couleurK = [];
				couleurS = [];
				vertk = 0;
				jaunek = 0;
				orangek = 0;
				rougek = 0;
				verts = 0;
				jaunes = 0;
				oranges = 0;
				rouges = 0;
				var fileReader = new FileReader();
				fileReader.readAsText(filesToLoad[n], "UTF-8");
				fileReader.onload = function(fileLoadedEvent) 
				{
                    var textFromFileLoaded = fileLoadedEvent.target.result;
					var lignes = textFromFileLoaded.split("\n");
					var ligneA = lignes[0].split(",");
					var ligneB = lignes[1].split(",");
					var ligneC = lignes[2].split(",");
					var ligneD = lignes[3].split(",");
					var tableauA = [[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[3,2,1,0],[0,1,2,3],[0,1,2,3]];
					var tableauB = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[3,2,1,0]];
					var tableauC = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var tableauD = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var scoreexigences = 0;
					var scoreautonomie = 0;
					var scoresoutien = 0;
					var scorereconnaissance = 0;
					for (var i = 0; i < 12; i++)
					{
						switch (ligneA[i])
						{
							case "pas d\'accord":
							scoreexigences += tableauA[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreexigences += tableauA[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreexigences += tableauA[i][2];
							break;
							case "d\'accord":
							scoreexigences += tableauA[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneB[i])
						{
							case "pas d\'accord":
							scoreautonomie += tableauB[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreautonomie += tableauB[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreautonomie += tableauB[i][2];
							break;
							case "d\'accord":
							scoreautonomie += tableauB[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneC[i])
						{
							case "pas d\'accord":
							scoresoutien += tableauC[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoresoutien += tableauC[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoresoutien += tableauC[i][2];
							break;
							case "d\'accord":
							scoresoutien += tableauC[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneD[i])
						{
							case "pas d\'accord":
							scorereconnaissance += tableauD[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scorereconnaissance += tableauD[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scorereconnaissance += tableauD[i][2];
							break;
							case "d\'accord":
							scorereconnaissance += tableauD[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
					}
                    soutien[compteur] = scoresoutien;
                    reconnaissance[compteur] = scorereconnaissance;
                    exigences[compteur] = scoreexigences;
                    autonomie[compteur] = scoreautonomie;
					var positionK = positionpoint(scoresoutien,scoreexigences,scoreautonomie);
					var positionS = positionpoint(scorereconnaissance,scoreexigences,scoreautonomie);
					var textepointK;
					var textepointS;
                    switch (positionK)
					{
						case 1:
							textepointK = "Le point est dans la zone de travail protecteur :)";
							couleurpointK = "darkgreen";
							vertk++;
							break;
						case 2:
							textepointK = "Le point est dans la zone d\'attention.";
							couleurpointK = "yellow";
							jaunek++;
							break;
						case 3:
							textepointK = "Le point est dans la zone d\'alerte !";
							couleurpointK = "darkorange";
							orangek++;
							break;
						case 4:
							textepointK = "Le point est dans la zone de risque pour la santé :(";
							couleurpointK = "red";
							rougek++;
							break;
						default:
							textepointK = "";
							couleurpointK = "darkgrey";
					}
					switch (positionS)
					{
						case 1:
							textepointS = "Le point est dans la zone de travail protecteur :)";
							couleurpointS = "darkgreen";
							verts++;
							break;
						case 2:
							textepointS = "Le point est dans la zone d\'attention.";
							couleurpointS = "yellow";
							jaunes++;
							break;
						case 3:
							textepointS = "Le point est dans la zone d\'alerte !";
							couleurpointS = "darkorange";
							oranges++;
							break;
						case 4:
							textepointS = "Le point est dans la zone de risque pour la santé :(";
							couleurpointS = "red";
							rouges++;
							break;
						default:
							textepointS = "";
							couleurpointS = "darkgrey";
					}
					textepointK += '<br>' + filesToLoad[compteur].name;
					textepointS += '<br>' + filesToLoad[compteur].name;
					if (flag === false)
                    {
                        var updateK = { x:[scoresoutien], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointK}, text: textepointK, marker:{color: couleurpointK}};
                        var updateS = { x:[scorereconnaissance], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointS}, text: textepointS, marker:{color: couleurpointS}};
                        var layout = {showlegend: false};
                        var style = {showlegend: true};
                        Plotly.addTraces(document.getElementById('karasek'), updateK);
                        Plotly.addTraces(document.getElementById('siegrist'), updateS);
                        Plotly.restyle(document.getElementById('karasek'),layout);
                        Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                        Plotly.restyle(document.getElementById('siegrist'),layout);
                        Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                    }
                    else
                    {
                        texteK[compteur] = textepointK;
					    texteS[compteur] = textepointS;
					    couleurK[compteur] = couleurpointK;
					    couleurS[compteur] = couleurpointS;
                    }
                    if (compteur === (filesToLoad.length - 1))
					{
						var moyexigences, moyautonomie, moysoutien, moyreconnaissance, medexigences, medautonomie, medsoutien, medreconnaissance;
						moyexigences = (exigences.reduce(function(a, b) { return a + b; }) / exigences.length).toFixed(2);
						moyautonomie = (autonomie.reduce(function(a, b) { return a + b; }) / autonomie.length).toFixed(2);
						moysoutien = (soutien.reduce(function(a, b) { return a + b; }) / soutien.length).toFixed(2);
						moyreconnaissance = (reconnaissance.reduce(function(a, b) { return a + b; }) / reconnaissance.length).toFixed(2);
						var numbers = exigences.slice(0).sort((a,b) => a - b);
  						var middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medexigences = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medexigences = (numbers[middle]).toFixed(2);
						}
						numbers = autonomie.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medautonomie = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medautonomie = (numbers[middle]).toFixed(2);
						}
						numbers = soutien.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medsoutien = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medsoutien = (numbers[middle]).toFixed(2);
						}
						numbers = reconnaissance.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medreconnaissance = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medreconnaissance = (numbers[middle]).toFixed(2);
						}
						document.getElementById("aexigences").innerHTML = moyexigences;
						document.getElementById("aautonomie").innerHTML = moyautonomie;
						document.getElementById("asoutien").innerHTML = moysoutien;
						document.getElementById("areconnaissance").innerHTML = moyreconnaissance;
						document.getElementById("mexigences").innerHTML =  medexigences;
						document.getElementById("mautonomie").innerHTML =  medautonomie;
						document.getElementById("msoutien").innerHTML =  medsoutien;
						document.getElementById("mreconnaissance").innerHTML =  medreconnaissance;
						document.getElementById("svert").innerHTML = vertk;
						document.getElementById("sjaune").innerHTML = jaunek;
						document.getElementById("sorange").innerHTML = orangek;
						document.getElementById("srouge").innerHTML = rougek;
						document.getElementById("rvert").innerHTML = verts;
						document.getElementById("rjaune").innerHTML = jaunes;
						document.getElementById("rorange").innerHTML = oranges;
						document.getElementById("rrouge").innerHTML = rouges;
						if (flag === true)
                        {
                            if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                            {
                                prechargement();
                            }
                            var updateK = { x: soutien, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurK}, text: texteK, marker:{symbol: 'diamond', size: 4, opacity: 0.5} };
                            var updateS = { x: reconnaissance, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurS}, text: texteS, marker:{symbol: 'diamond', size: 4, opacity: 0.5}};
                            var layout = {showlegend: false};
                            var style = {showlegend: true};
                            Plotly.addTraces(document.getElementById('karasek'), updateK);
                            Plotly.addTraces(document.getElementById('siegrist'), updateS);
                            Plotly.restyle(document.getElementById('karasek'),layout);
                            Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                            Plotly.restyle(document.getElementById('siegrist'),layout);
                            Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoadc").value = ""; document.body.style.cursor="default";});
                        }
                        else
                        {
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = ""; document.body.style.cursor="default";});
                        }                        
                        document.getElementById("Recommandations").style.visibility = 'collapse';
						document.getElementById("Statistiques").style.visibility = 'visible';
						document.getElementById("Statistiques").scrollIntoView(true);
                    }
                    compteur++;
				};				
			}
        }
    }
}