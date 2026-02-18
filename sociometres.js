document.querySelectorAll('input[type="radio"][name="main-group"]').forEach(radio => {
    radio.addEventListener('change', function() {
    if (this.checked)
        {
            document.querySelectorAll('.top-tabs-container label').forEach(label => {label.classList.remove('active');});
            const mainLabel = document.querySelector(`label[for="${this.id}"]`);
            if (mainLabel)
                {
                    mainLabel.classList.add('active');
                }
        }
    });
});
document.querySelectorAll('input[type="radio"][name^="sub-group-"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.checked)
        {
            const activeMainTab = document.querySelector('input[name="main-group"]:checked');
            if (activeMainTab)
            {
                const mainTabName = activeMainTab.id.replace('main-tab-', '');
                const currentSubTabPrefix = this.id.replace(/^sub-tab-(\w+)-\d+$/, '$1');
                if (currentSubTabPrefix === mainTabName)
                {
                    document.querySelectorAll(`.sub-tabs-container label[for^="sub-tab-${mainTabName}"]`).forEach(label => {
                        label.classList.remove('active');
                    });
                    const subLabel = document.querySelector(`label[for="${this.id}"]`);
                    if (subLabel)
                    {
                        subLabel.classList.add('active');
                    }
                }
            }
        }
    });
});
const questionnaireqvt = `<h3>A. Niveau des Exigences</h3><p>1. Je suis constamment press&eacute;-e par le temps &agrave; cause d’une forte charge de travail :<br/><input type="radio" class="qradio" name="qA1" value="0" id="qA10"/> pas d'accord<input type="radio" class="qradio" name="qA1" value="1" id="qA11"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA1" value="2" id="qA12"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA1" value="3" id="qA13"/> d'accord</p><p>2. J’effectue des t&acirc;ches r&eacute;p&eacute;titives dans mon travail :<br/><input type="radio" class="qradio" name="qA2" value="0" id="qA20"/> pas d'accord<input type="radio" class="qradio" name="qA2" value="1" id="qA21"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA2" value="2" id="qA22"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA2" value="3" id="qA23"/> d'accord</p><p>3. Je trouve le volume des sollicitations raisonnable (nombre de courriels, demandes clients externes ou internes, coll&egrave;gues ou hi&eacute;rarchiques, etc.) :<br/><input type="radio" class="qradio" name="qA3" value="3" id="qA30"/> pas d'accord<input type="radio" class="qradio" name="qA3" value="2" id="qA31"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA3" value="1" id="qA32"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA3" value="0" id="qA33"/> d'accord</p><p>4. Je suis fr&eacute;quemment interrompu-e et d&eacute;rang&eacute;-e dans mon travail :<br/><input type="radio" class="qradio" name="qA4" value="0" id="qA40"/> pas d'accord<input type="radio" class="qradio" name="qA4" value="1" id="qA41"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA4" value="2" id="qA42"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA4" value="3" id="qA43"/> d'accord</p><p>5. Je suis souvent contraint-e &agrave; faire des heures suppl&eacute;mentaires :<br/><input type="radio" class="qradio" name="qA5" value="0" id="qA50"/> pas d'accord<input type="radio" class="qradio" name="qA5" value="1" id="qA51"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA5" value="2" id="qA52"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA5" value="3" id="qA53"/> d'accord</p><p>6. Je suis souvent sollicit&eacute;-e en dehors de mes heures normales de travail :<br/><input type="radio" class="qradio" name="qA6" value="0" id="qA60"/> pas d'accord<input type="radio" class="qradio" name="qA6" value="1" id="qA61"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA6" value="2" id="qA62"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA6" value="3" id="qA63"/> d'accord</p><p>7. Je traite souvent ma messagerie apr&egrave;s le travail, le soir ou le week end :<br/><input type="radio" class="qradio" name="qA7" value="0" id="qA70"/> pas d'accord<input type="radio" class="qradio" name="qA7" value="1" id="qA71"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA7" value="2" id="qA72"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA7" value="3" id="qA73"/> d'accord</p><p>8. Je suis soumis &agrave; des al&eacute;as, je reçois des sollicitations et des demandes de plusieurs personnes :<br/><input type="radio" class="qradio" name="qA8" value="0" id="qA80"/> pas d'accord<input type="radio" class="qradio" name="qA8" value="1" id="qA81"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA8" value="2" id="qA82"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA8" value="3" id="qA83"/> d'accord</p><p>9. J’ai des objectifs atteignables :<br/><input type="radio" class="qradio" name="qA9" value="3" id="qA90"/> pas d'accord<input type="radio" class="qradio" name="qA9" value="2" id="qA91"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA9" value="1" id="qA92"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA9" value="0" id="qA93"/> d'accord</p><p>10. Je dispose de suffisamment de moyens et de temps pour bien faire mon travail :<br/><input type="radio" class="qradio" name="qA10" value="3" id="qA100"/> pas d'accord<input type="radio" class="qradio" name="qA10" value="2" id="qA101"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA10" value="1" id="qA102"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA10" value="0" id="qA103"/> d'accord</p><p>11. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre charge de travail a augment&eacute; ?<br/><input type="radio" class="qradio" name="qA11" value="0" id="qA110"/> pas d'accord<input type="radio" class="qradio" name="qA11" value="1" id="qA111"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA11" value="2" id="qA112"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA11" value="3" id="qA113"/> d'accord</p><p>12. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre temps de travail hebdomadaire a augment&eacute; (en incluant le temps de travail dans les transports, au domicile, etc.) :<br/><input type="radio" class="qradio" name="qA12" value="0" id="qA120"/> pas d'accord<input type="radio" class="qradio" name="qA12" value="1" id="qA121"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qA12" value="2" id="qA122"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qA12" value="3" id="qA123"/> d'accord</p><h3>Commentaires sur le niveau des Exigences :</h3><textarea class="qtextarea" name="qcommentairesExigences" id="qcommentairesExigences" rows="3" cols="50" maxlength="512"></textarea><h3>B. Degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle</h3><p>1. J’ai la possibilit&eacute; de discuter, de proposer des alternatives &agrave; ce que l’on me demande sans me mettre en difficult&eacute; :<br/><input type="radio" class="qradio" name="qB1" value="0" id="qB10"/> pas d'accord<input type="radio" class="qradio" name="qB1" value="1" id="qB11"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB1" value="2" id="qB12"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB1" value="3" id="qB13"/> d'accord</p><p>2. J’ai la possibilit&eacute; de d&eacute;cider l’organisation de mon temps de travail :<br/><input type="radio" class="qradio" name="qB2" value="0" id="qB20"/> pas d'accord<input type="radio" class="qradio" name="qB2" value="1" id="qB21"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB2" value="2" id="qB22"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB2" value="3" id="qB23"/> d'accord</p><p>3. Je reçois rarement une demande n&eacute;cessitant une r&eacute;ponse imm&eacute;diate :<br/><input type="radio" class="qradio" name="qB3" value="0" id="qB30"/> pas d'accord<input type="radio" class="qradio" name="qB3" value="1" id="qB31"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB3" value="2" id="qB32"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB3" value="3" id="qB33"/> d'accord</p><p>4. Je passe peu de temps sur le reporting :<br/><input type="radio" class="qradio" name="qB4" value="0" id="qB40"/> pas d'accord<input type="radio" class="qradio" name="qB4" value="1" id="qB41"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB4" value="2" id="qB42"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB4" value="3" id="qB43"/> d'accord</p><p>5. Les proc&eacute;dures sont complexes :<br/><input type="radio" class="qradio" name="qB5" value="3" id="qB50"/> pas d'accord<input type="radio" class="qradio" name="qB5" value="2" id="qB51"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB5" value="1" id="qB52"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB5" value="0" id="qB53"/> d'accord</p><p>6. Je dispose de marge de manœuvre pour r&eacute;aliser mon travail :<br/><input type="radio" class="qradio" name="qB6" value="0" id="qB60"/> pas d'accord<input type="radio" class="qradio" name="qB6" value="1" id="qB61"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB6" value="2" id="qB62"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB6" value="3" id="qB63"/> d'accord</p><p>7. Le SI (Syst&egrave;me d’Information) et les applications professionnelles sont fiables et op&eacute;rationnelles pour mon travail :<br/><input type="radio" class="qradio" name="qB7" value="0" id="qB70"/> pas d'accord<input type="radio" class="qradio" name="qB7" value="1" id="qB71"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB7" value="2" id="qB72"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB7" value="3" id="qB73"/> d'accord</p><p>8. Les outils num&eacute;riques facilitent mon travail :<br/><input type="radio" class="qradio" name="qB8" value="0" id="qB80"/> pas d'accord<input type="radio" class="qradio" name="qB8" value="1" id="qB81"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB8" value="2" id="qB82"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB8" value="3" id="qB83"/> d'accord</p><p>9. Je peux facilement suivre les formations utiles &agrave; mon travail :<br/><input type="radio" class="qradio" name="qB9" value="0" id="qB90"/> pas d'accord<input type="radio" class="qradio" name="qB9" value="1" id="qB91"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB9" value="2" id="qB92"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB9" value="3" id="qB93"/> d'accord</p><p>10 Je me forme sur des sujets professionnels sur mon temps personnel :<br/><input type="radio" class="qradio" name="qB10" value="3" id="qB100"/> pas d'accord<input type="radio" class="qradio" name="qB10" value="2" id="qB101"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB10" value="1" id="qB102"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB10" value="0" id="qB103"/> d'accord</p><p>11 Je maîtrise les moments et les lieux où je juge n&eacute;cessaire de me d&eacute;connecter ou me connecter afin de pr&eacute;server mon &eacute;quilibre vie priv&eacute;e / vie professionnelle :<br/><input type="radio" class="qradio" name="qB11" value="0" id="qB110"/> pas d'accord<input type="radio" class="qradio" name="qB11" value="1" id="qB111"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB11" value="2" id="qB112"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB11" value="3" id="qB113"/> d'accord</p><p>12 J’utilise ma messagerie et les autres outils num&eacute;riques pour des raisons professionnelles sur mon temps personnel :<br/><input type="radio" class="qradio" name="qB12" value="3" id="qB120"/> pas d'accord<input type="radio" class="qradio" name="qB12" value="2" id="qB121"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qB12" value="1" id="qB122"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qB12" value="0" id="qB123"/> d'accord</p><h3>Commentaires sur le degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle :</h3><textarea class="qtextarea" name="qcommentairesAutonomie" id="qcommentairesAutonomie" rows="3" cols="50" maxlength="512"></textarea><h3>C. Niveau de Soutien (coll&egrave;gues et manager)</h3><p>1. J’ai le sentiment d’&ecirc;tre int&eacute;gr&eacute; au collectif :<br/><input type="radio" class="qradio" name="qC1" value="0" id="qC10"/> pas d'accord<input type="radio" class="qradio" name="qC1" value="1" id="qC11"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC1" value="2" id="qC12"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC1" value="3" id="qC13"/> d'accord</p><p>2. Les coll&egrave;gues avec qui je travaille sont des gens professionnellement comp&eacute;tents :<br/><input type="radio" class="qradio" name="qC2" value="0" id="qC20"/> pas d'accord<input type="radio" class="qradio" name="qC2" value="1" id="qC21"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC2" value="2" id="qC22"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC2" value="3" id="qC23"/> d'accord</p><p>3. Je suis en accord avec ce que mon manager me demande de faire :<br/><input type="radio" class="qradio" name="qC3" value="0" id="qC30"/> pas d'accord<input type="radio" class="qradio" name="qC3" value="1" id="qC31"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC3" value="2" id="qC32"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC3" value="3" id="qC33"/> d'accord</p><p>4. Mes avis et mes propositions sont pris en compte :<br/><input type="radio" class="qradio" name="qC4" value="0" id="qC40"/> pas d'accord<input type="radio" class="qradio" name="qC4" value="1" id="qC41"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC4" value="2" id="qC42"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC4" value="3" id="qC43"/> d'accord</p><p>5. En cas de difficult&eacute;s, je peux compter sur le soutien de mes coll&egrave;gues :<br/><input type="radio" class="qradio" name="qC5" value="0" id="qC50"/> pas d'accord<input type="radio" class="qradio" name="qC5" value="1" id="qC51"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC5" value="2" id="qC52"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC5" value="3" id="qC53"/> d'accord</p><p>6. Je sais identifier le bon interlocuteur hi&eacute;rarchique en cas de difficult&eacute; :<br/><input type="radio" class="qradio" name="qC6" value="0" id="qC60"/> pas d'accord<input type="radio" class="qradio" name="qC6" value="1" id="qC61"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC6" value="2" id="qC62"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC6" value="3" id="qC63"/> d'accord</p><p>7. Mon manager de proximit&eacute; est accessible, disponible, et pr&ecirc;te attention &agrave; ce que je dis :<br/><input type="radio" class="qradio" name="qC7" value="0" id="qC70"/> pas d'accord<input type="radio" class="qradio" name="qC7" value="1" id="qC71"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC7" value="2" id="qC72"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC7" value="3" id="qC73"/> d'accord</p><p>8. Mon environnement de travail est satisfaisant (bruit, espace, ergonomie, etc.) sur mes diff&eacute;rents lieux de travail :<br/><input type="radio" class="qradio" name="qC8" value="0" id="qC80"/> pas d'accord<input type="radio" class="qradio" name="qC8" value="1" id="qC81"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC8" value="2" id="qC82"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC8" value="3" id="qC83"/> d'accord</p><p>9. Des espaces et du temps d&eacute;di&eacute;s aux &eacute;changes professionnels existent :<br/><input type="radio" class="qradio" name="qC9" value="0" id="qC90"/> pas d'accord<input type="radio" class="qradio" name="qC9" value="1" id="qC91"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC9" value="2" id="qC92"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC9" value="3" id="qC93"/> d'accord</p><p>10 L’organisation du travail prend en compte les contraintes personnelles :<br/><input type="radio" class="qradio" name="qC10" value="0" id="qC100"/> pas d'accord<input type="radio" class="qradio" name="qC10" value="1" id="qC101"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC10" value="2" id="qC102"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC10" value="3" id="qC103"/> d'accord</p><p>11 L’organisation du travail et la r&eacute;partition des responsabilit&eacute;s sont claires :<br/><input type="radio" class="qradio" name="qC11" value="0" id="qC110"/> pas d'accord<input type="radio" class="qradio" name="qC11" value="1" id="qC111"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC11" value="2" id="qC112"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC11" value="3" id="qC113"/> d'accord</p><p>12 J’ai confiance dans la strat&eacute;gie de l’entreprise :<br/><input type="radio" class="qradio" name="qC12" value="0" id="qC120"/> pas d'accord<input type="radio" class="qradio" name="qC12" value="1" id="qC121"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qC12" value="2" id="qC122"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qC12" value="3" id="qC123"/> d'accord</p><h3>Commentaires sur le niveau de Soutien (coll&egrave;gues et manager) :</h3><textarea class="qtextarea" name="qcommentairesSoutien" id="qcommentairesSoutien" rows="3" cols="50" maxlength="512"></textarea><h3>D. Reconnaissance au travail</h3><p>1. Ma position professionnelle correspond &agrave; ma qualification et &agrave; mes comp&eacute;tences :<br/><input type="radio" class="qradio" name="qD1" value="0" id="qD10"/> pas d'accord<input type="radio" class="qradio" name="qD1" value="1" id="qD11"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD1" value="2" id="qD12"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD1" value="3" id="qD13"/> d'accord</p><p>2. Ma r&eacute;mun&eacute;ration est coh&eacute;rente avec mon exp&eacute;rience professionnelle et  mes efforts d’adaptation :<br/><input type="radio" class="qradio" name="qD2" value="0" id="qD20"/> pas d'accord<input type="radio" class="qradio" name="qD2" value="1" id="qD21"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD2" value="2" id="qD22"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD2" value="3" id="qD23"/> d'accord</p><p>3. Mon travail a du sens :<br/><input type="radio" class="qradio" name="qD3" value="0" id="qD30"/> pas d'accord<input type="radio" class="qradio" name="qD3" value="1" id="qD31"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD3" value="2" id="qD32"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD3" value="3" id="qD33"/> d'accord</p><p>4. J’ai des informations claires sur l’&eacute;volution de mon emploi actuel, et mes besoins en formation :<br/><input type="radio" class="qradio" name="qD4" value="0" id="qD40"/> pas d'accord<input type="radio" class="qradio" name="qD4" value="1" id="qD41"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD4" value="2" id="qD42"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD4" value="3" id="qD43"/> d'accord</p><p>5. Je suis inquiet par rapport &agrave; l’&eacute;volution de mon m&eacute;tier :<br/><input type="radio" class="qradio" name="qD5" value="3" id="qD50"/> pas d'accord<input type="radio" class="qradio" name="qD5" value="2" id="qD51"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD5" value="1" id="qD52"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD5" value="0" id="qD53"/> d'accord</p><p>6. La qualit&eacute; de mon travail est reconnue par mes coll&egrave;gues :<br/><input type="radio" class="qradio" name="qD6" value="0" id="qD60"/> pas d'accord<input type="radio" class="qradio" name="qD6" value="1" id="qD61"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD6" value="2" id="qD62"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD6" value="3" id="qD63"/> d'accord</p><p>7. Mon &eacute;valuation professionnelle est transparente et fond&eacute;e sur les bons crit&egrave;res :<br/><input type="radio" class="qradio" name="qD7" value="0" id="qD70"/> pas d'accord<input type="radio" class="qradio" name="qD7" value="1" id="qD71"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD7" value="2" id="qD72"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD7" value="3" id="qD73"/> d'accord</p><p>8. Mon manager connaît bien mon travail et je peux &eacute;changer avec lui pour construire des solutions :<br/><input type="radio" class="qradio" name="qD8" value="0" id="qD80"/> pas d'accord<input type="radio" class="qradio" name="qD8" value="1" id="qD81"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD8" value="2" id="qD82"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD8" value="3" id="qD83"/> d'accord</p><p>9. Mon travail est appr&eacute;ci&eacute; &agrave; sa juste valeur par des tiers (clients, etc.) :<br/><input type="radio" class="qradio" name="qD9" value="0" id="qD90"/> pas d'accord<input type="radio" class="qradio" name="qD9" value="1" id="qD91"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD9" value="2" id="qD92"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD9" value="3" id="qD93"/> d'accord</p><p>10 Les organisations de travail favorisent la construction et les &eacute;changes de savoir faire :<br/><input type="radio" class="qradio" name="qD10" value="0" id="qD100"/> pas d'accord<input type="radio" class="qradio" name="qD10" value="1" id="qD101"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD10" value="2" id="qD102"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD10" value="3" id="qD103"/> d'accord</p><p>11 Mon activit&eacute; professionnelle est en accord avec mon &eacute;thique :<br/><input type="radio" class="qradio" name="qD11" value="0" id="qD110"/> pas d'accord<input type="radio" class="qradio" name="qD11" value="1" id="qD111"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD11" value="2" id="qD112"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD11" value="3" id="qD113"/> d'accord</p><p>12 Mes souhaits d’&eacute;volution professionnelle sont pris en compte :<br/><input type="radio" class="qradio" name="qD12" value="0" id="qD120"/> pas d'accord<input type="radio" class="qradio" name="qD12" value="1" id="qD121"/> plut&ocirc;t pas d'accord<input type="radio" class="qradio" name="qD12" value="2" id="qD122"/> plut&ocirc;t d'accord<input type="radio" class="qradio" name="qD12" value="3" id="qD123"/> d'accord</p><h3>Commentaires sur le niveau de Reconnaissance au travail :</h3><textarea class="qtextarea" name="qcommentairesReconnaissance" id="qcommentairesReconnaissance" rows="3" cols="50" maxlength="512"></textarea><hr/>`;
function peuplerquestionnaireqvt()
{
	if (document.getElementById('questionnaireqvt').innerHTML == '<h2>Questionnaire Individuel QVT Numérique</h2>')
	{
		document.getElementById('questionnaireqvt').innerHTML = '<h2>Questionnaire Individuel QVT Numérique</h2>' + questionnaireqvt + `<p><button id='sauverquestionnaire' onclick='saveTextAsFile()'>Sauvegarder</button><button id='traiterquestionnaire' onclick='traiter()'>Traiter</button><button id='effacerquestionnaire' onclick='effacer()'>Effacer</button></p><hr/>`;
	}
}
const questionnaireqvtindividuel = `<h3>A. Niveau des Exigences</h3><p>1. Je suis constamment press&eacute;-e par le temps &agrave; cause d’une forte charge de travail :<br/><input type="radio" class="iradio" name="iA1" value="0" id="iA10"/> pas d'accord<input type="radio" class="iradio" name="iA1" value="1" id="iA11"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA1" value="2" id="iA12"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA1" value="3" id="iA13"/> d'accord</p><p>2. J’effectue des t&acirc;ches r&eacute;p&eacute;titives dans mon travail :<br/><input type="radio" class="iradio" name="iA2" value="0" id="iA20"/> pas d'accord<input type="radio" class="iradio" name="iA2" value="1" id="iA21"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA2" value="2" id="iA22"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA2" value="3" id="iA23"/> d'accord</p><p>3. Je trouve le volume des sollicitations raisonnable (nombre de courriels, demandes clients externes ou internes, coll&egrave;gues ou hi&eacute;rarchiques, etc.) :<br/><input type="radio" class="iradio" name="iA3" value="3" id="iA30"/> pas d'accord<input type="radio" class="iradio" name="iA3" value="2" id="iA31"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA3" value="1" id="iA32"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA3" value="0" id="iA33"/> d'accord</p><p>4. Je suis fr&eacute;quemment interrompu-e et d&eacute;rang&eacute;-e dans mon travail :<br/><input type="radio" class="iradio" name="iA4" value="0" id="iA40"/> pas d'accord<input type="radio" class="iradio" name="iA4" value="1" id="iA41"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA4" value="2" id="iA42"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA4" value="3" id="iA43"/> d'accord</p><p>5. Je suis souvent contraint-e &agrave; faire des heures suppl&eacute;mentaires :<br/><input type="radio" class="iradio" name="iA5" value="0" id="iA50"/> pas d'accord<input type="radio" class="iradio" name="iA5" value="1" id="iA51"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA5" value="2" id="iA52"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA5" value="3" id="iA53"/> d'accord</p><p>6. Je suis souvent sollicit&eacute;-e en dehors de mes heures normales de travail :<br/><input type="radio" class="iradio" name="iA6" value="0" id="iA60"/> pas d'accord<input type="radio" class="iradio" name="iA6" value="1" id="iA61"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA6" value="2" id="iA62"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA6" value="3" id="iA63"/> d'accord</p><p>7. Je traite souvent ma messagerie apr&egrave;s le travail, le soir ou le week end :<br/><input type="radio" class="iradio" name="iA7" value="0" id="iA70"/> pas d'accord<input type="radio" class="iradio" name="iA7" value="1" id="iA71"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA7" value="2" id="iA72"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA7" value="3" id="iA73"/> d'accord</p><p>8. Je suis soumis &agrave; des al&eacute;as, je reçois des sollicitations et des demandes de plusieurs personnes :<br/><input type="radio" class="iradio" name="iA8" value="0" id="iA80"/> pas d'accord<input type="radio" class="iradio" name="iA8" value="1" id="iA81"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA8" value="2" id="iA82"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA8" value="3" id="iA83"/> d'accord</p><p>9. J’ai des objectifs atteignables :<br/><input type="radio" class="iradio" name="iA9" value="3" id="iA90"/> pas d'accord<input type="radio" class="iradio" name="iA9" value="2" id="iA91"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA9" value="1" id="iA92"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA9" value="0" id="iA93"/> d'accord</p><p>10. Je dispose de suffisamment de moyens et de temps pour bien faire mon travail :<br/><input type="radio" class="iradio" name="iA10" value="3" id="iA100"/> pas d'accord<input type="radio" class="iradio" name="iA10" value="2" id="iA101"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA10" value="1" id="iA102"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA10" value="0" id="iA103"/> d'accord</p><p>11. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre charge de travail a augment&eacute; ?<br/><input type="radio" class="iradio" name="iA11" value="0" id="iA110"/> pas d'accord<input type="radio" class="iradio" name="iA11" value="1" id="iA111"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA11" value="2" id="iA112"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA11" value="3" id="iA113"/> d'accord</p><p>12. Avez-vous le sentiment que depuis l’ann&eacute;e derni&egrave;re votre temps de travail hebdomadaire a augment&eacute; (en incluant le temps de travail dans les transports, au domicile, etc.) :<br/><input type="radio" class="iradio" name="iA12" value="0" id="iA120"/> pas d'accord<input type="radio" class="iradio" name="iA12" value="1" id="iA121"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iA12" value="2" id="iA122"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iA12" value="3" id="iA123"/> d'accord</p><h3>Commentaires sur le niveau des Exigences :</h3><textarea class="itextarea" name="icommentairesExigences" id="icommentairesExigences" rows="3" cols="50" maxlength="512"></textarea><h3>B. Degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle</h3><p>1. J’ai la possibilit&eacute; de discuter, de proposer des alternatives &agrave; ce que l’on me demande sans me mettre en difficult&eacute; :<br/><input type="radio" class="iradio" name="iB1" value="0" id="iB10"/> pas d'accord<input type="radio" class="iradio" name="iB1" value="1" id="iB11"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB1" value="2" id="iB12"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB1" value="3" id="iB13"/> d'accord</p><p>2. J’ai la possibilit&eacute; de d&eacute;cider l’organisation de mon temps de travail :<br/><input type="radio" class="iradio" name="iB2" value="0" id="iB20"/> pas d'accord<input type="radio" class="iradio" name="iB2" value="1" id="iB21"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB2" value="2" id="iB22"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB2" value="3" id="iB23"/> d'accord</p><p>3. Je reçois rarement une demande n&eacute;cessitant une r&eacute;ponse imm&eacute;diate :<br/><input type="radio" class="iradio" name="iB3" value="0" id="iB30"/> pas d'accord<input type="radio" class="iradio" name="iB3" value="1" id="iB31"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB3" value="2" id="iB32"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB3" value="3" id="iB33"/> d'accord</p><p>4. Je passe peu de temps sur le reporting :<br/><input type="radio" class="iradio" name="iB4" value="0" id="iB40"/> pas d'accord<input type="radio" class="iradio" name="iB4" value="1" id="iB41"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB4" value="2" id="iB42"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB4" value="3" id="iB43"/> d'accord</p><p>5. Les proc&eacute;dures sont complexes :<br/><input type="radio" class="iradio" name="iB5" value="3" id="iB50"/> pas d'accord<input type="radio" class="iradio" name="iB5" value="2" id="iB51"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB5" value="1" id="iB52"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB5" value="0" id="iB53"/> d'accord</p><p>6. Je dispose de marge de manœuvre pour r&eacute;aliser mon travail :<br/><input type="radio" class="iradio" name="iB6" value="0" id="iB60"/> pas d'accord<input type="radio" class="iradio" name="iB6" value="1" id="iB61"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB6" value="2" id="iB62"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB6" value="3" id="iB63"/> d'accord</p><p>7. Le SI (Syst&egrave;me d’Information) et les applications professionnelles sont fiables et op&eacute;rationnelles pour mon travail :<br/><input type="radio" class="iradio" name="iB7" value="0" id="iB70"/> pas d'accord<input type="radio" class="iradio" name="iB7" value="1" id="iB71"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB7" value="2" id="iB72"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB7" value="3" id="iB73"/> d'accord</p><p>8. Les outils num&eacute;riques facilitent mon travail :<br/><input type="radio" class="iradio" name="iB8" value="0" id="iB80"/> pas d'accord<input type="radio" class="iradio" name="iB8" value="1" id="iB81"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB8" value="2" id="iB82"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB8" value="3" id="iB83"/> d'accord</p><p>9. Je peux facilement suivre les formations utiles &agrave; mon travail :<br/><input type="radio" class="iradio" name="iB9" value="0" id="iB90"/> pas d'accord<input type="radio" class="iradio" name="iB9" value="1" id="iB91"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB9" value="2" id="iB92"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB9" value="3" id="iB93"/> d'accord</p><p>10 Je me forme sur des sujets professionnels sur mon temps personnel :<br/><input type="radio" class="iradio" name="iB10" value="3" id="iB100"/> pas d'accord<input type="radio" class="iradio" name="iB10" value="2" id="iB101"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB10" value="1" id="iB102"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB10" value="0" id="iB103"/> d'accord</p><p>11 Je maîtrise les moments et les lieux où je juge n&eacute;cessaire de me d&eacute;connecter ou me connecter afin de pr&eacute;server mon &eacute;quilibre vie priv&eacute;e / vie professionnelle :<br/><input type="radio" class="iradio" name="iB11" value="0" id="iB110"/> pas d'accord<input type="radio" class="iradio" name="iB11" value="1" id="iB111"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB11" value="2" id="iB112"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB11" value="3" id="iB113"/> d'accord</p><p>12 J’utilise ma messagerie et les autres outils num&eacute;riques pour des raisons professionnelles sur mon temps personnel :<br/><input type="radio" class="iradio" name="iB12" value="3" id="iB120"/> pas d'accord<input type="radio" class="iradio" name="iB12" value="2" id="iB121"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iB12" value="1" id="iB122"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iB12" value="0" id="iB123"/> d'accord</p><h3>Commentaires sur le degr&eacute; d’Autonomie et &eacute;quilibre vie priv&eacute;e / vie professionnelle :</h3><textarea class="itextarea" name="icommentairesAutonomie" id="icommentairesAutonomie" rows="3" cols="50" maxlength="512"></textarea><h3>C. Niveau de Soutien (coll&egrave;gues et manager)</h3><p>1. J’ai le sentiment d’&ecirc;tre int&eacute;gr&eacute; au collectif :<br/><input type="radio" class="iradio" name="iC1" value="0" id="iC10"/> pas d'accord<input type="radio" class="iradio" name="iC1" value="1" id="iC11"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC1" value="2" id="iC12"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC1" value="3" id="iC13"/> d'accord</p><p>2. Les coll&egrave;gues avec qui je travaille sont des gens professionnellement comp&eacute;tents :<br/><input type="radio" class="iradio" name="iC2" value="0" id="iC20"/> pas d'accord<input type="radio" class="iradio" name="iC2" value="1" id="iC21"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC2" value="2" id="iC22"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC2" value="3" id="iC23"/> d'accord</p><p>3. Je suis en accord avec ce que mon manager me demande de faire :<br/><input type="radio" class="iradio" name="iC3" value="0" id="iC30"/> pas d'accord<input type="radio" class="iradio" name="iC3" value="1" id="iC31"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC3" value="2" id="iC32"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC3" value="3" id="iC33"/> d'accord</p><p>4. Mes avis et mes propositions sont pris en compte :<br/><input type="radio" class="iradio" name="iC4" value="0" id="iC40"/> pas d'accord<input type="radio" class="iradio" name="iC4" value="1" id="iC41"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC4" value="2" id="iC42"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC4" value="3" id="iC43"/> d'accord</p><p>5. En cas de difficult&eacute;s, je peux compter sur le soutien de mes coll&egrave;gues :<br/><input type="radio" class="iradio" name="iC5" value="0" id="iC50"/> pas d'accord<input type="radio" class="iradio" name="iC5" value="1" id="iC51"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC5" value="2" id="iC52"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC5" value="3" id="iC53"/> d'accord</p><p>6. Je sais identifier le bon interlocuteur hi&eacute;rarchique en cas de difficult&eacute; :<br/><input type="radio" class="iradio" name="iC6" value="0" id="iC60"/> pas d'accord<input type="radio" class="iradio" name="iC6" value="1" id="iC61"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC6" value="2" id="iC62"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC6" value="3" id="iC63"/> d'accord</p><p>7. Mon manager de proximit&eacute; est accessible, disponible, et pr&ecirc;te attention &agrave; ce que je dis :<br/><input type="radio" class="iradio" name="iC7" value="0" id="iC70"/> pas d'accord<input type="radio" class="iradio" name="iC7" value="1" id="iC71"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC7" value="2" id="iC72"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC7" value="3" id="iC73"/> d'accord</p><p>8. Mon environnement de travail est satisfaisant (bruit, espace, ergonomie, etc.) sur mes diff&eacute;rents lieux de travail :<br/><input type="radio" class="iradio" name="iC8" value="0" id="iC80"/> pas d'accord<input type="radio" class="iradio" name="iC8" value="1" id="iC81"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC8" value="2" id="iC82"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC8" value="3" id="iC83"/> d'accord</p><p>9. Des espaces et du temps d&eacute;di&eacute;s aux &eacute;changes professionnels existent :<br/><input type="radio" class="iradio" name="iC9" value="0" id="iC90"/> pas d'accord<input type="radio" class="iradio" name="iC9" value="1" id="iC91"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC9" value="2" id="iC92"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC9" value="3" id="iC93"/> d'accord</p><p>10 L’organisation du travail prend en compte les contraintes personnelles :<br/><input type="radio" class="iradio" name="iC10" value="0" id="iC100"/> pas d'accord<input type="radio" class="iradio" name="iC10" value="1" id="iC101"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC10" value="2" id="iC102"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC10" value="3" id="iC103"/> d'accord</p><p>11 L’organisation du travail et la r&eacute;partition des responsabilit&eacute;s sont claires :<br/><input type="radio" class="iradio" name="iC11" value="0" id="iC110"/> pas d'accord<input type="radio" class="iradio" name="iC11" value="1" id="iC111"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC11" value="2" id="iC112"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC11" value="3" id="iC113"/> d'accord</p><p>12 J’ai confiance dans la strat&eacute;gie de l’entreprise :<br/><input type="radio" class="iradio" name="iC12" value="0" id="iC120"/> pas d'accord<input type="radio" class="iradio" name="iC12" value="1" id="iC121"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iC12" value="2" id="iC122"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iC12" value="3" id="iC123"/> d'accord</p><h3>Commentaires sur le niveau de Soutien (coll&egrave;gues et manager) :</h3><textarea class="itextarea" name="icommentairesSoutien" id="icommentairesSoutien" rows="3" cols="50" maxlength="512"></textarea><h3>D. Reconnaissance au travail</h3><p>1. Ma position professionnelle correspond &agrave; ma qualification et &agrave; mes comp&eacute;tences :<br/><input type="radio" class="iradio" name="iD1" value="0" id="iD10"/> pas d'accord<input type="radio" class="iradio" name="iD1" value="1" id="iD11"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD1" value="2" id="iD12"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD1" value="3" id="iD13"/> d'accord</p><p>2. Ma r&eacute;mun&eacute;ration est coh&eacute;rente avec mon exp&eacute;rience professionnelle et  mes efforts d’adaptation :<br/><input type="radio" class="iradio" name="iD2" value="0" id="iD20"/> pas d'accord<input type="radio" class="iradio" name="iD2" value="1" id="iD21"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD2" value="2" id="iD22"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD2" value="3" id="iD23"/> d'accord</p><p>3. Mon travail a du sens :<br/><input type="radio" class="iradio" name="iD3" value="0" id="iD30"/> pas d'accord<input type="radio" class="iradio" name="iD3" value="1" id="iD31"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD3" value="2" id="iD32"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD3" value="3" id="iD33"/> d'accord</p><p>4. J’ai des informations claires sur l’&eacute;volution de mon emploi actuel, et mes besoins en formation :<br/><input type="radio" class="iradio" name="iD4" value="0" id="iD40"/> pas d'accord<input type="radio" class="iradio" name="iD4" value="1" id="iD41"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD4" value="2" id="iD42"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD4" value="3" id="iD43"/> d'accord</p><p>5. Je suis inquiet par rapport &agrave; l’&eacute;volution de mon m&eacute;tier :<br/><input type="radio" class="iradio" name="iD5" value="3" id="iD50"/> pas d'accord<input type="radio" class="iradio" name="iD5" value="2" id="iD51"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD5" value="1" id="iD52"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD5" value="0" id="iD53"/> d'accord</p><p>6. La qualit&eacute; de mon travail est reconnue par mes coll&egrave;gues :<br/><input type="radio" class="iradio" name="iD6" value="0" id="iD60"/> pas d'accord<input type="radio" class="iradio" name="iD6" value="1" id="iD61"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD6" value="2" id="iD62"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD6" value="3" id="iD63"/> d'accord</p><p>7. Mon &eacute;valuation professionnelle est transparente et fond&eacute;e sur les bons crit&egrave;res :<br/><input type="radio" class="iradio" name="iD7" value="0" id="iD70"/> pas d'accord<input type="radio" class="iradio" name="iD7" value="1" id="iD71"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD7" value="2" id="iD72"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD7" value="3" id="iD73"/> d'accord</p><p>8. Mon manager connaît bien mon travail et je peux &eacute;changer avec lui pour construire des solutions :<br/><input type="radio" class="iradio" name="iD8" value="0" id="iD80"/> pas d'accord<input type="radio" class="iradio" name="iD8" value="1" id="iD81"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD8" value="2" id="iD82"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD8" value="3" id="iD83"/> d'accord</p><p>9. Mon travail est appr&eacute;ci&eacute; &agrave; sa juste valeur par des tiers (clients, etc.) :<br/><input type="radio" class="iradio" name="iD9" value="0" id="iD90"/> pas d'accord<input type="radio" class="iradio" name="iD9" value="1" id="iD91"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD9" value="2" id="iD92"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD9" value="3" id="iD93"/> d'accord</p><p>10 Les organisations de travail favorisent la construction et les &eacute;changes de savoir faire :<br/><input type="radio" class="iradio" name="iD10" value="0" id="iD100"/> pas d'accord<input type="radio" class="iradio" name="iD10" value="1" id="iD101"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD10" value="2" id="iD102"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD10" value="3" id="iD103"/> d'accord</p><p>11 Mon activit&eacute; professionnelle est en accord avec mon &eacute;thique :<br/><input type="radio" class="iradio" name="iD11" value="0" id="iD110"/> pas d'accord<input type="radio" class="iradio" name="iD11" value="1" id="iD111"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD11" value="2" id="iD112"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD11" value="3" id="iD113"/> d'accord</p><p>12 Mes souhaits d’&eacute;volution professionnelle sont pris en compte :<br/><input type="radio" class="iradio" name="iD12" value="0" id="iD120"/> pas d'accord<input type="radio" class="iradio" name="iD12" value="1" id="iD121"/> plut&ocirc;t pas d'accord<input type="radio" class="iradio" name="iD12" value="2" id="iD122"/> plut&ocirc;t d'accord<input type="radio" class="iradio" name="iD12" value="3" id="iD123"/> d'accord</p><h3>Commentaires sur le niveau de Reconnaissance au travail :</h3><textarea class="itextarea" name="icommentairesReconnaissance" id="icommentairesReconnaissance" rows="3" cols="50" maxlength="512"></textarea><hr/>`;
const recosqvtquestionnaire = `<table id="qrecosqvt" class="matable"><tr><th id="qrexigences">Exigences</th><th id="qrautonomie">Autonomie</th><th id="qrsoutien">Soutien</th><th id="qrreconnaissance">Reconnaissance</th></tr><tr><td id="qcexigences"></td><td id="qcautonomie"></td><td id="qcsoutien"></td><td id="qcreconnaissance"></td></tr></table>`;
const recosqvtindividuel = `<table id="irecosqvt" class="matable"><tr><th id="irexigences">Exigences</th><th id="irautonomie">Autonomie</th><th id="irsoutien">Soutien</th><th id="irreconnaissance">Reconnaissance</th></tr><tr><td id="icexigences"></td><td id="icautonomie"></td><td id="icsoutien"></td><td id="icreconnaissance"></td></tr></table>`;
const statsqvtgroupe = `<table id="qvtstatsgroupe" class="matable"><tr><th></th><th id="gsexigences">Exigences</th><th id="gsautonomie">Autonomie</th><th id="gssoutien">Soutien</th><th id="gsreconnaissance">Reconnaissance</th></tr><tr><td>Moyenne</td><td id="gaexigences"></td><td id="gaautonomie"></td><td id="gasoutien"></td><td id="gareconnaissance"></td></tr><tr><td>Médiane</td><td id="gmexigences"></td><td id="gmautonomie"></td><td id="gmsoutien"></td><td id="gmreconnaissance"></td></tr><tr><th></th><th id="gdverte">Zone verte</th><th id="gdjaune">Zone jaune</th><th id="gdorange">Zone orange</th><th id="gdrouge">Zone rouge</th></tr><tr><td>Soutien</td><td id="gsvert"></td><td id="gsjaune"></td><td id="gsorange"></td><td id="gsrouge"></td></tr><tr><td>Reconnaissance</td><td id="grvert"></td><td id="grjaune"></td><td id="grorange"></td><td id="grrouge"></td></tr></table>`;
const statsqvtcollectif = `<table id="qvtstatscollectif" class="matable"><tr><th></th><th id="csexigences">Exigences</th><th id="csautonomie">Autonomie</th><th id="cssoutien">Soutien</th><th id="csreconnaissance">Reconnaissance</th></tr><tr><td>Moyenne</td><td id="caexigences"></td><td id="caautonomie"></td><td id="casoutien"></td><td id="careconnaissance"></td></tr><tr><td>Médiane</td><td id="cmexigences"></td><td id="cmautonomie"></td><td id="cmsoutien"></td><td id="cmreconnaissance"></td></tr><tr><th></th><th id="cdverte">Zone verte</th><th id="cdjaune">Zone jaune</th><th id="cdorange">Zone orange</th><th id="cdrouge">Zone rouge</th></tr><tr><td>Soutien</td><td id="csvert"></td><td id="csjaune"></td><td id="csorange"></td><td id="csrouge"></td></tr><tr><td>Reconnaissance</td><td id="crvert"></td><td id="crjaune"></td><td id="crorange"></td><td id="crrouge"></td></tr></table>`;
const cexigences = `<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul>`;
const cautonomie = `<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche2-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 2 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>`;
const csoutien = `<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche1-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 1 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche3-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 3 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>`;
const creconnaissance = `<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche4-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 4 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche5-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 5 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>`;
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
const recos = "<h2>Recommandations :</h2><ul><li><a href='https://lenumeriqueautrement.fr/' target'numeriqueautrement'>Campagne UGICT CGT \"le numérique autrement\"</a></li><li><a href='https://ugictcgt.fr/themes/organisation-du-travail/' target='rpsugict'>Organisation du travail & RPS</a></li></ul>";
function melanger(sujet)
{
	if (document.getElementById("questionnaire"+sujet).innerHTML=="")
    {
        var tableau = eval("questionnaire"+sujet);
        document.getElementById("questionnaire"+sujet).innerHTML = "<h2>Questionnaire " + (sujet=='violentometre'?'Violentom&egrave;tre':sujet=='rps'?'RPS':'Encadrant') + "</h2><h3>Quelles sont les situations de travail que vous avez rencontrées ?</h3>";
        for (i = tableau.length - 1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
        }
        for (n=0;n<tableau.length;n++)
        {
            document.getElementById("questionnaire"+sujet).innerHTML += tableau[n];
        }
        document.getElementById("questionnaire"+sujet).innerHTML += '<hr/><button onclick="calcul(\''+sujet+'\')">Calculer</button>';
    }    
}
function calcul(sujet)
{
	var layout = {paper_bgcolor: '#000000',font: {size: 14, color: '#cdcccc'},margin: {b:0,l:150,r:160,t:50},legend: {x:0.1,y:-0.1,bgcolor:'#565656'},showlegend: true,polar: {bgcolor: "#cdcccc",barmode: "overlay",bargap: 0,radialaxis: {ticks: "", showline: false, showticklabels: false},angularaxis: {direction: "clockwise",tickfont: {size: 12},tickangle: 0}},width:600,height:600};
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
                var vtheta = ["Env. de travail de Qualité", "Env. de travail Dégradé", "Env. de travail de Rupture"];
                var data = [{r: rA,theta: vtheta,name: "Environnement de travail de qualité",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
							{r: rB,theta: vtheta,name: "Environnement de travail dégradé",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
							{r: rC,theta: vtheta,name: "Environnement de travail de rupture",marker: {color: "red"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiqueencadrant", data, layout, config);
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
                document.getElementById("questionnaireencadrant").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("E" + (i+1)).checked = true;
					}
					document.getElementById("E" + (i+1)).disabled = true;
					document.getElementById("labelE" + (i+1)).className = couleur[i];
                }
				//document.getElementById("recos").innerHTML = recos;
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
                var vtheta = ["Env. pro Sain", "Env. pro Sexiste & Hostile", "Harcèlement Sexuel", "Agression Sexuelle", "Viol"];
                var data = [{r: rA,theta: vtheta,name: "Environnement pro sain",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
                			{r: rB,theta: vtheta,name: "Environnement pro sexiste et hostile",marker: {color: "yellow"},type: "barpolar",hoverinfo: "name"},
                			{r: rC,theta: vtheta,name: "Harcèlement sexuel",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
                			{r: rD,theta: vtheta,name: "Agression sexuelle",marker: {color: "red"},type: "barpolar",hoverinfo: "name"},
                			{r: rE,theta: vtheta,name: "Viol",marker: {color: "black"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiqueviolentometre", data, layout, config);
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
                document.getElementById("questionnaireviolentometre").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("V" + (i+1)).checked = true;
					}
					document.getElementById("V" + (i+1)).disabled = true;
					document.getElementById("labelV" + (i+1)).className = couleur[i];
                }
                //document.getElementById("recos").innerHTML = recos;
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
                var vtheta = ["Env. de travail de Qualité", "Env. de travail Dégradé", "Env. de travail de Rupture"];
                var data = [{r: rA,theta: vtheta,name: "Environnement de travail de qualité",marker: {color: "green"},type: "barpolar",hoverinfo: "name"},
							{r: rB,theta: vtheta,name: "Environnement de travail dégradé",marker: {color: "orange"},type: "barpolar",hoverinfo: "name"},
							{r: rC,theta: vtheta,name: "Environnement de travail de rupture",marker: {color: "red"},type: "barpolar",hoverinfo: "name"}];
                Plotly.newPlot("graphiquerps", data, layout, config);
                var restitution = "<h2>Restitution du questionnaire RPS</h2><hr/><h3>Environnement de travail de Qualité :</h3>";
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
                document.getElementById("questionnairerps").innerHTML = restitution + "<hr/>";
                for (var i=0;i<coches.length;i++)
                {      
					if (coches[i] == true)
					{
						document.getElementById("R" + (i+1)).checked = true;
					}
					document.getElementById("R" + (i+1)).disabled = true;
					document.getElementById("labelR" + (i+1)).className = couleur[i];
                }
				//document.getElementById("recos").innerHTML = recos;
            }
            break;
        default:
            break;
    }
}
function traiter(flag,nomfichier)
{
    var prefixe;
    var suffixe;
    flag?prefixe="i":prefixe="q";
    flag?suffixe="individuel":suffixe="questionnaire";
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
        var scoreA = document.getElementsByName(prefixe + "A" + x);
        var scoreB = document.getElementsByName(prefixe + "B" + x);
        var scoreC = document.getElementsByName(prefixe + "C" + x);
        var scoreD = document.getElementsByName(prefixe + "D" + x);
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
			manqueA[(x-1)] = prefixe + "A" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = prefixe + "B" + x;
			break;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = prefixe + "C" + x;
			break;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = prefixe + "D" + x;
			break;
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
            document.getElementById(prefixe + "A" + (indexpremier) + "3").scrollIntoView(true);			
        }
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
        if (indexpremier === 0)
        {
            document.getElementById(prefixe + "B123").scrollIntoView(true);
            document.getElementById(prefixe + "A123").scrollIntoView(true);			
        }
        else
        {
            document.getElementById(prefixe + "B123").scrollIntoView(true);
            document.getElementById(prefixe + "B" + (indexpremier) + "3").scrollIntoView(true);			
        }
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
        if (indexpremier === 0)
        {
            document.getElementById(prefixe + "C123").scrollIntoView(true);
            document.getElementById(prefixe + "B123").scrollIntoView(true);			
        }
        else
        {
            document.getElementById(prefixe + "C123").scrollIntoView(true);
            document.getElementById(prefixe + "C" + (indexpremier) + "3").scrollIntoView(true);			
        }
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
        if (indexpremier === 0)
        {
            document.getElementById(prefixe + "D123").scrollIntoView(true);
            document.getElementById(prefixe + "C123").scrollIntoView(true);			
        }
        else
        {
            document.getElementById(prefixe + "D123").scrollIntoView(true);
            document.getElementById(prefixe + "D" + (indexpremier) + "3").scrollIntoView(true);			
        }
		return;
	}
	if ((document.getElementById("karasek"+suffixe).innerHTML == "") || (document.getElementById("siegrist"+suffixe).innerHTML == ""))
	{
		prechargement(suffixe);
	}
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName(prefixe + "A" + x);
		var scoreB = document.getElementsByName(prefixe + "B" + x);
		var scoreC = document.getElementsByName(prefixe + "C" + x);
		var scoreD = document.getElementsByName(prefixe + "D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
				scoreA[i].style.outline = "2px solid lightblue";
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
				scoreB[i].style.outline = "2px solid lightblue";
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
				scoreC[i].style.outline = "2px solid lightblue";
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
				scoreD[i].style.outline = "2px solid lightblue";
			}
			scoreA[i].disabled = true;
			scoreB[i].disabled = true;
			scoreC[i].disabled = true;
			scoreD[i].disabled = true;			
		}
	}
    document.getElementById(prefixe + "commentairesExigences").innerText = document.getElementById(prefixe + "commentairesExigences").value;
	document.getElementById(prefixe + "commentairesAutonomie").innerText = document.getElementById(prefixe + "commentairesAutonomie").value;
	document.getElementById(prefixe + "commentairesSoutien").innerText = document.getElementById(prefixe + "commentairesSoutien").value;
	document.getElementById(prefixe + "commentairesReconnaissance").innerText = document.getElementById(prefixe + "commentairesReconnaissance").value;
	document.getElementById(prefixe + "commentairesExigences").disabled = true;
	document.getElementById(prefixe + "commentairesAutonomie").disabled = true;
	document.getElementById(prefixe + "commentairesSoutien").disabled = true;
	document.getElementById(prefixe + "commentairesReconnaissance").disabled = true;
	if (flag === false)
    {
        document.getElementById("traiterquestionnaire").disabled = true;
	    document.getElementById("effacerquestionnaire").disabled = true;
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
			textepointK = "Erreur : position non identifée.";
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
			textepointS = "Erreur : position non identifée.";
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
    document.getElementById("recosqvt"+suffixe).innerHTML = eval("recosqvt"+suffixe);
	if (fexigences === true)
	{
		document.getElementById(prefixe + "cexigences").innerHTML = cexigences;
	}
	else if ((exigences < 10) && (autonomie > 27))
    {
        document.getElementById(prefixe + "cexigences").innerHTML = "<p>NB : &ecirc;tre attentif au bore-out lorsque les exigences sont faibles et l'autonomie &eacute;lev&eacute;e.</p>";
    }
	if (fautonomie === true)
	{
		document.getElementById(prefixe + "cautonomie").innerHTML = cautonomie;
	}
	if (fsoutien === true)
	{
		document.getElementById(prefixe + "csoutien").innerHTML = csoutien;
	}
	if (freconnaissance === true)
	{
		document.getElementById(prefixe + "creconnaissance").innerHTML = creconnaissance;
	}
	if (exigences < 10)
	{
		document.getElementById(prefixe + 'rexigences').style.backgroundColor = 'green';
	}
	else if (exigences < 19)
    {
        document.getElementById(prefixe + 'rexigences').style.backgroundColor = 'yellow';
        document.getElementById(prefixe + 'rexigences').style.color = 'black';
    }
    else if (exigences < 28)
    {
        document.getElementById(prefixe + 'rexigences').style.backgroundColor = 'orange';
    }
    else
    {
        document.getElementById(prefixe + 'rexigences').style.backgroundColor = 'red';
    }
	if (autonomie < 10)
	{
		document.getElementById(prefixe + 'rautonomie').style.backgroundColor = 'red';
	}
	else if (autonomie < 19)
    {
        document.getElementById(prefixe + 'rautonomie').style.backgroundColor = 'orange';
    }
    else if (autonomie < 28)
    {
        document.getElementById(prefixe + 'rautonomie').style.backgroundColor = 'yellow';
        document.getElementById(prefixe + 'rautonomie').style.color = 'black';
    }
    else
    {
        document.getElementById(prefixe + 'rautonomie').style.backgroundColor = 'green';
    }
	if (soutien < 10)
	{
		document.getElementById(prefixe + 'rsoutien').style.backgroundColor = 'red';
	}
	else if (soutien < 19)
    {
        document.getElementById(prefixe + 'rsoutien').style.backgroundColor = 'orange';
    }
    else if (soutien < 28)
    {
        document.getElementById(prefixe + 'rsoutien').style.backgroundColor = 'yellow';
        document.getElementById(prefixe + 'rsoutien').style.color = 'black';
    }
    else
    {
        document.getElementById(prefixe + 'rsoutien').style.backgroundColor = 'green';
    }
	if (reconnaissance < 10)
	{
		document.getElementById(prefixe + 'rreconnaissance').style.backgroundColor = 'red';
	}
	else if (reconnaissance < 19)
    {
        document.getElementById(prefixe + 'rreconnaissance').style.backgroundColor = 'orange';
    }
    else if (reconnaissance < 28)
    {
        document.getElementById(prefixe + 'rreconnaissance').style.backgroundColor = 'yellow';
        document.getElementById(prefixe + 'rreconnaissance').style.color = 'black';
    }
    else
    {
        document.getElementById(prefixe + 'rreconnaissance').style.backgroundColor = 'green';
    }
    if (flag === true)
    {
        textepointK += '<br>' + nomfichier;
        textepointS += '<br>' + nomfichier;
    }
	var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointK}, text: textepointK, marker:{color: couleurpointK}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointS}, text: textepointS, marker:{color: couleurpointS}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById("karasek"+suffixe), updateK);
	Plotly.addTraces(document.getElementById("siegrist"+suffixe), updateS);
	Plotly.restyle(document.getElementById("karasek"+suffixe),layout);
	Plotly.restyle(document.getElementById("karasek"+suffixe),style,[0,1]);
	Plotly.restyle(document.getElementById("siegrist"+suffixe),layout);
	Plotly.restyle(document.getElementById("siegrist"+suffixe),style,[0,1]);
	if (flag != true)
	{		
		const d = new Date();
        document.getElementById("questionnaireqvt").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Traitement direct du questionnaire.";
		window.scrollTo(0,0);
	}
	document.getElementById("siegrist"+suffixe).on('plotly_afterplot', function(){});
}
function sauveimages(lebongraphique)
{    
    var timestamp = Date.now();
    var filenameK = "graphiqueQVT-K_" + timestamp;
    var filenameS = "graphiqueQVT-S_" + timestamp;
    Plotly.downloadImage(document.getElementById('karasek'+lebongraphique), {format: 'png', width: 800, height: 800, filename: filenameK});
    Plotly.downloadImage(document.getElementById('siegrist'+lebongraphique), {format: 'png', width: 800, height: 800, filename: filenameS});
}
function positionpoint(pointx, exigences, autonomie)
{
	var couleurexigences;
	var couleurautonomie;
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
		var scoreA = document.getElementsByName("qA" + x);
		var scoreB = document.getElementsByName("qB" + x);
		var scoreC = document.getElementsByName("qC" + x);
		var scoreD = document.getElementsByName("qD" + x);
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
			manqueA[(x-1)] = "qA" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = "qB" + x;
			break;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = "qC" + x;
			break;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = "qD" + x;
			break;
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
			document.getElementById("qA" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
		if (indexpremier === 0)
		{
			document.getElementById("qB123").scrollIntoView(true);
			document.getElementById("qA123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("qB123").scrollIntoView(true);
			document.getElementById("qB" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
		if (indexpremier === 0)
		{
			document.getElementById("qC123").scrollIntoView(true);
			document.getElementById("qB123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("qC123").scrollIntoView(true);
			document.getElementById("qC" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
		if (indexpremier === 0)
		{
			document.getElementById("qD123").scrollIntoView(true);
			document.getElementById("qC123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("qD123").scrollIntoView(true);
			document.getElementById("qD" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
    var textToSave = "";
	var commentairesExigences = document.getElementById("qcommentairesExigences").value;
	var commentairesAutonomie = document.getElementById("qcommentairesAutonomie").value;
	var commentairesSoutien = document.getElementById("qcommentairesSoutien").value;
	var commentairesReconnaissance = document.getElementById("qcommentairesReconnaissance").value;
	for (var x = 1; x < 13; x++)
	{
		var questionA = document.getElementsByName("qA" + x);
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
						break;
				}
			}
		}
		textToSave += ",";
	}
	textToSave += commentairesExigences.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionB = document.getElementsByName("qB" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesAutonomie.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionC = document.getElementsByName("qC" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesSoutien.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionD = document.getElementsByName("qD" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesReconnaissance.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = "questionnaireQVT_" + Date.now() + ".csv";
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
        document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + fileToLoad[0].name + " en tant qu'individu.";
    }
	if (!(fileToLoad[0].size > 0 && fileToLoad[0].name.slice(0,17) === "questionnaireQVT_" && fileToLoad[0].name.slice(-4) === ".csv"))
	{
		const d = new Date();
		document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : fichier invalide !";
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
					document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question A" + (i+1);
					break;
				}
				else if (!(ligneB[i] === "pas d\'accord" || ligneB[i] === "plut\u00f4t pas d\'accord" || ligneB[i] === "plut\u00f4t d\'accord" || ligneB[i] === "d\'accord"))
				{
					validationfichier[i] = "B" + (i+1);
					const d = new Date();
					document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question B" + (i+1);
					break;
				}
				else if (!(ligneC[i] === "pas d\'accord" || ligneC[i] === "plut\u00f4t pas d\'accord" || ligneC[i] === "plut\u00f4t d\'accord" || ligneC[i] === "d\'accord"))
				{
					validationfichier[i] = "C" + (i+1);
					const d = new Date();
					document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question C" + (i+1);
					break;
				}
				else if (!(ligneD[i] === "pas d\'accord" || ligneD[i] === "plut\u00f4t pas d\'accord" || ligneD[i] === "plut\u00f4t d\'accord" || ligneD[i] === "d\'accord"))
				{
					validationfichier[i] = "D" + (i+1);
					const d = new Date();
					document.getElementById("chargementqvtindividuel").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question D" + (i+1);
					break;
				}
				else
				{
					validationfichier[i] = "OK";
				}
			}
			var found = validationfichier.findIndex(function(element) { return element != "OK";});
			if (found === -1 || fileToLoad.length === 1)
			{
				document.getElementById("questionnaireqvtindividuel").innerHTML = questionnaireqvtindividuel;
				document.getElementById("icommentairesExigences").innerText = ligneA[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesExigences").value = ligneA[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesAutonomie").innerText = ligneB[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesAutonomie").value = ligneB[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesSoutien").innerText = ligneC[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesSoutien").value = ligneC[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesReconnaissance").innerText = ligneD[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("icommentairesReconnaissance").value = ligneD[12].replace(/\//g, "\n").replace(/;/g, ",");
				for (var i = 0; i < 12; i++)
				{
					var x = i+1;
					var checkA = document.getElementsByName("iA" + x);
					var checkB = document.getElementsByName("iB" + x);
					var checkC = document.getElementsByName("iC" + x);
					var checkD = document.getElementsByName("iD" + x);
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
					traiter(true,fileToLoad[0].name);
					document.getElementById("fileToLoad").value = "";
				}
				else
				{
					validationfichier.sort();
					if (parseInt(validationfichier[0].substring(1)) === 1)
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
								window.scrollTo(0,0);
								break;
							case "B":
								document.getElementById("iB123").scrollIntoView(true);
								document.getElementById("iA123").scrollIntoView(true);
								break;
							case "C":
								document.getElementById("iC123").scrollIntoView(true);
								document.getElementById("iB123").scrollIntoView(true);
								break;
							case "D":
								document.getElementById("iD123").scrollIntoView(true);
								document.getElementById("iC123").scrollIntoView(true);
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
								document.getElementById("iA" + (parseInt(validationfichier[0].substring(1))-1).toString() + "3").scrollIntoView(true);
								break;
							case "B":
								document.getElementById("iB" + (parseInt(validationfichier[0].substring(1))-1).toString() + "3").scrollIntoView(true);
								break;
							case "C":
								document.getElementById("iC" + (parseInt(validationfichier[0].substring(1))-1).toString() + "3").scrollIntoView(true);
								break;
							case "D":
								document.getElementById("iD" + (parseInt(validationfichier[0].substring(1))-1).toString() + "3").scrollIntoView(true);
								break;
							default:
								break;
						}
					}
					var newparagraph = document.createElement('p');
					newparagraph.innerHTML =  `<button id='recupquestionnaire' onclick='recupTextAsFile("` + fileToLoad[0].name + `")'>Sauvegarder</button>`;
					document.getElementById('questionnaireqvtindividuel').append(newparagraph);
				}
            }
		}
    }
}
function effacer()
{
    for (var x = 1; x < 13; x++)
	{
		var resetA = document.getElementsByName("qA" + x);
		var resetB = document.getElementsByName("qB" + x);
		var resetC = document.getElementsByName("qC" + x);
		var resetD = document.getElementsByName("qD" + x);
		for (var i = 0; i < 4; i++)
		{
			resetA[i].checked = false;
			resetB[i].checked = false;
			resetC[i].checked = false;
			resetD[i].checked = false;
		}	
	};
	document.getElementById("qcommentairesExigences").innerText = "";
	document.getElementById("qcommentairesAutonomie").innerText = "";
	document.getElementById("qcommentairesSoutien").innerText = "";
	document.getElementById("qcommentairesReconnaissance").innerText = "";
    document.getElementById("qcommentairesExigences").value = "";
	document.getElementById("qcommentairesAutonomie").value = "";
	document.getElementById("qcommentairesSoutien").value = "";
	document.getElementById("qcommentairesReconnaissance").value = "";
	window.scrollTo(0,0);
}
function prechargement(lebongraphique)
{
    Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Soutien'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	var layoutsiegrist = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Reconnaissance'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis: {range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};	
	Plotly.newPlot(document.getElementById('karasek'+lebongraphique), dataK, layoutkarasek, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false,lebongraphique);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true,lebongraphique);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages(lebongraphique);}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("karasek"+lebongraphique).requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
	Plotly.newPlot(document.getElementById('siegrist'+lebongraphique), dataS, layoutsiegrist, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false,lebongraphique);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true,lebongraphique);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages(lebongraphique);}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("siegrist"+lebongraphique).requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
}
function purge(flag,lebongraphique)
{
    if ((document.getElementById("karasek"+lebongraphique).data != undefined) && (document.getElementById("siegrist"+lebongraphique).data != undefined))
	{
        if(document.getElementById('karasek'+lebongraphique).data.length > 2 && document.getElementById('siegrist'+lebongraphique).data.length > 2)
        {
            var zonelog;
            switch (lebongraphique)
            {
                case "questionnaire":
                    zonelog = "questionnaireqvt";
                    break;
                case "individuel":
                    zonelog = "chargementqvtindividuel";
                    break;
                case "groupe":
                    zonelog = "chargementqvtgroupe";
                    break;
                case "collectif":
                    zonelog = "chargementqvtcollectif";
                    break;
                default:
                    zonelog = "statsqvt" + lebongraphique;
                    break;
            }
			if (flag === true)
			{
				Plotly.purge(document.getElementById('karasek'+lebongraphique));
				Plotly.purge(document.getElementById('siegrist'+lebongraphique));
				prechargement(lebongraphique);
				const d = new Date();
				document.getElementById(zonelog).innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement complet des cubes.";
				document.getElementById('siegrist'+lebongraphique).on('plotly_afterplot', function(){});
			}
			else
			{
				Plotly.deleteTraces(document.getElementById('karasek'+lebongraphique), -1);
            	Plotly.deleteTraces(document.getElementById('siegrist'+lebongraphique), -1);
				const d = new Date();
				document.getElementById(zonelog).innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement du dernier ajout dans les cubes.";
			}
        }
    }
}
function chargergroupe()
{
	filesToLoad = document.getElementById("filesToLoad").files;
	if (filesToLoad.length > 0)
	{
		const d = new Date();		
		document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + filesToLoad.length + " fichiers en tant que groupe.";
		compteur = 0;
		for (var n = 0; n < filesToLoad.length; n++)
		{
			if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
			{
				const d = new Date();
				document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[n].name + " : fichier invalide !";
			}
			else
			{
				if ((document.getElementById("karasekgroupe").innerHTML == "") || (document.getElementById("siegristgroupe").innerHTML == ""))
				{
					prechargement("groupe");
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
							document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							break;
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
							document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							break;
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
							document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							break;
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
							document.getElementById("chargementqvtgroupe").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							break;
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
				var updateK = { x:[scoresoutien], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointK}, text: textepointK, marker:{color: couleurpointK}};
				var updateS = { x:[scorereconnaissance], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointS}, text: textepointS, marker:{color: couleurpointS}};
				var layout = {showlegend: false};
				var style = {showlegend: true};
				Plotly.addTraces(document.getElementById('karasekgroupe'), updateK);
				Plotly.addTraces(document.getElementById('siegristgroupe'), updateS);
				Plotly.restyle(document.getElementById('karasekgroupe'),layout);
				Plotly.restyle(document.getElementById('karasekgroupe'),style,[0,1]);
				Plotly.restyle(document.getElementById('siegristgroupe'),layout);
				Plotly.restyle(document.getElementById('siegristgroupe'),style,[0,1]);
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
					document.getElementById("statsqvtgroupe").innerHTML = statsqvtgroupe;
					document.getElementById("gaexigences").innerHTML = moyexigences;
					document.getElementById("gaautonomie").innerHTML = moyautonomie;
					document.getElementById("gasoutien").innerHTML = moysoutien;
					document.getElementById("gareconnaissance").innerHTML = moyreconnaissance;
					document.getElementById("gmexigences").innerHTML =  medexigences;
					document.getElementById("gmautonomie").innerHTML =  medautonomie;
					document.getElementById("gmsoutien").innerHTML =  medsoutien;
					document.getElementById("gmreconnaissance").innerHTML =  medreconnaissance;
					document.getElementById("gsvert").innerHTML = vertk;
					document.getElementById("gsjaune").innerHTML = jaunek;
					document.getElementById("gsorange").innerHTML = orangek;
					document.getElementById("gsrouge").innerHTML = rougek;
					document.getElementById("grvert").innerHTML = verts;
					document.getElementById("grjaune").innerHTML = jaunes;
					document.getElementById("grorange").innerHTML = oranges;
					document.getElementById("grrouge").innerHTML = rouges;
					document.getElementById('siegristgroupe').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = ""; });
				}
				compteur++;
			};				
		}
	}
}
function chargercollectif()
{
	filesToLoad = document.getElementById("filesToLoadc").files;
	if (filesToLoad.length > 0)
	{
		const d = new Date();		
		document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + filesToLoad.length + " fichiers en tant que collectif.";
		compteur = 0;
		for (var n = 0; n < filesToLoad.length; n++)
		{
			if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
			{
				const d = new Date();
				document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[n].name + " : fichier invalide !";
			}
			else
			{
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
								document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
                                compteur++;
								break;
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
								document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
								compteur++;
								break;
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
								document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
								compteur++;
								break;
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
								document.getElementById("chargementqvtcollectif").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
								compteur++;
								break;
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
					texteK[compteur] = textepointK;
					texteS[compteur] = textepointS;
					couleurK[compteur] = couleurpointK;
					couleurS[compteur] = couleurpointS;
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
                        document.getElementById("statsqvtcollectif").innerHTML = statsqvtcollectif;
                        document.getElementById("caexigences").innerHTML = moyexigences;
                        document.getElementById("caautonomie").innerHTML = moyautonomie;
                        document.getElementById("casoutien").innerHTML = moysoutien;
                        document.getElementById("careconnaissance").innerHTML = moyreconnaissance;
                        document.getElementById("cmexigences").innerHTML =  medexigences;
                        document.getElementById("cmautonomie").innerHTML =  medautonomie;
                        document.getElementById("cmsoutien").innerHTML =  medsoutien;
                        document.getElementById("cmreconnaissance").innerHTML =  medreconnaissance;
                        document.getElementById("csvert").innerHTML = vertk;
                        document.getElementById("csjaune").innerHTML = jaunek;
                        document.getElementById("csorange").innerHTML = orangek;
                        document.getElementById("csrouge").innerHTML = rougek;
                        document.getElementById("crvert").innerHTML = verts;
                        document.getElementById("crjaune").innerHTML = jaunes;
                        document.getElementById("crorange").innerHTML = oranges;
                        document.getElementById("crrouge").innerHTML = rouges;
						if ((document.getElementById("karasekcollectif").innerHTML == "") || (document.getElementById("siegristcollectif").innerHTML == ""))
						{
							prechargement("collectif");
						}
						var updateK = { x: soutien, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurK}, text: texteK, marker:{symbol: 'diamond', size: 4, opacity: 0.5} };
						var updateS = { x: reconnaissance, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurS}, text: texteS, marker:{symbol: 'diamond', size: 4, opacity: 0.5}};
						var layout = {showlegend: false};
						var style = {showlegend: true};
						Plotly.addTraces(document.getElementById('karasekcollectif'), updateK);
						Plotly.addTraces(document.getElementById('siegristcollectif'), updateS);
						Plotly.restyle(document.getElementById('karasekcollectif'),layout);
						Plotly.restyle(document.getElementById('karasekcollectif'),style,[0,1]);
						Plotly.restyle(document.getElementById('siegristcollectif'),layout);
						Plotly.restyle(document.getElementById('siegristcollectif'),style,[0,1]);
                    }
                    compteur++;
				};				
			}
        }
    }
}
function recupTextAsFile(nomrecup)
{
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
		var scoreA = document.getElementsByName("iA" + x);
		var scoreB = document.getElementsByName("iB" + x);
		var scoreC = document.getElementsByName("iC" + x);
		var scoreD = document.getElementsByName("iD" + x);
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
			manqueA[(x-1)] = "iA" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = "iB" + x;
			break;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = "iC" + x;
			break;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = "iD" + x;
			break;
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
			document.getElementById("iA" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
		if (indexpremier === 0)
		{
			document.getElementById("iB123").scrollIntoView(true);
			document.getElementById("iA123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("iB123").scrollIntoView(true);
			document.getElementById("iB" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
		if (indexpremier === 0)
		{
			document.getElementById("iC123").scrollIntoView(true);
			document.getElementById("iB123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("iC123").scrollIntoView(true);
			document.getElementById("iC" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
		window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
		if (indexpremier === 0)
		{
			document.getElementById("iD123").scrollIntoView(true);
			document.getElementById("iC123").scrollIntoView(true);			
		}
		else
		{
			document.getElementById("iD123").scrollIntoView(true);
			document.getElementById("iD" + (indexpremier) + "3").scrollIntoView(true);			
		}
		return;
	}
    var textToSave = "";
	var commentairesExigences = document.getElementById("icommentairesExigences").value;
	var commentairesAutonomie = document.getElementById("icommentairesAutonomie").value;
	var commentairesSoutien = document.getElementById("icommentairesSoutien").value;
	var commentairesReconnaissance = document.getElementById("icommentairesReconnaissance").value;
	for (var x = 1; x < 13; x++)
	{
		var questionA = document.getElementsByName("iA" + x);
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
						break;
				}
			}
		}
		textToSave += ",";
	}
	textToSave += commentairesExigences.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionB = document.getElementsByName("iB" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesAutonomie.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionC = document.getElementsByName("iC" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesSoutien.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionD = document.getElementsByName("iD" + x);
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
						break;
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesReconnaissance.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = nomrecup;
	var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "T&eacute;l&eacute;charger le fichier " + fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
	//document.getElementById("questionnaireqvtindividuel").innerHTML = "";
}