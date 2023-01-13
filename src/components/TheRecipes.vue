<template>
    <NavBar />
    <div class="mt-5">
        <h1 class="text-center text-uppercase">Les recettes</h1>
        <h2 class="text-center">Les paniers d'Émile</h2>
    </div>
    <div class="container w-75 mt-5 mb-5">
        <div class="row text-center">
            <div class="col p-1 text-center">
                <a href="" data-bs-toggle="modal" data-bs-target="#pates">
                    <img src="@/assets/images/recettes/pates.png" alt="">
                </a>
            </div>
            <div class="col p-1 text-center">
                <a href="" data-bs-toggle="modal" data-bs-target="#tarte">
                    <img src="@/assets/images/recettes/betterave.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col p-1 text-center">
                <a href="" data-bs-toggle="modal" data-bs-target="#potimarons">
                    <img src="@/assets/images/recettes/potimarons.jpg" alt="">
                </a>
            </div>
            <div class="col p-1 text-center">
                <!-- <a href="" data-bs-toggle="modal" data-bs-target="#bieres">
                    <img src="@/assets/images/plume-epi-bieres.jpg" alt="">
                </a> -->
            </div>
        </div>
    </div>

    <!-- MODAL PATES -->
    <div class="modal fade" id="pates" tabindex="-1" aria-labelledby="patesLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-uppercase" id="patesLabel">Tarte betterave - Chèvre - Noix</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-5">
                    RECETTE POUR 2 PERSONNES<br />
                    PRÉPARATION: 10MIN<br />
                    CUISSON: 10 MINN
                </p>

                <div class="row m-3">
                    <div class="col">
                        <h5>Ingredients</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">200g tagliatelles fraîches</li>
                            <li class="list-group-item">250g asperges vertess</li>
                            <li class="list-group-item">½ gousse d’ail</li>
                            <li class="list-group-item">1 cuillère à soupe de fromage frais (type saint Moret)</li>
                            <li class="list-group-item">1 cuillère à soupe d’huile d’olive</li>
                            <li class="list-group-item">Sel et poivre</li>
                            <li class="list-group-item">Tranches de jambon fumé, copaux parmesan (falcutatif)</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5>Directions</h5>
                        <ol class="list-group list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                Rincer et peler les asperges dans le sens de la longueur afin d’avoir des « tagliatelles d’asperges ».
                            </li>
                            <li class="list-group-item">
                                Dans une poêle, faire revenir les asperges avec la ½ gousse d’ail sur feu moyen pendant 4 à 5 mins. Assaisonner selon votre convenance.
                            </li>
                            <li class="list-group-item">
                                Faire cuire les tagliatelles selon les indications du paquet. Les égoutter puis les ajouter aux asperges.
                            </li>
                            <li class="list-group-item">
                                Hors du feu, rajouter la cuillère à soupe de fromage frais et bien mélanger.
                            </li>
                            <li class="list-group-item">
                                (falcultatif) Vous pouvez rajouter quelques tranches de jambon fumé et du parmesan en copeaux.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- MODAL TARTE -->
    <div class="modal fade" id="tarte" tabindex="-1" aria-labelledby="tarteLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-uppercase" id="tarteLabel">Tarte betterave - Chèvre - Noix</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="mb-5">
                    LA recette de la tarte à la betterave rapide, facile et bonne. Une recette à base de chèvre frais et de noix car cela se marie très bien avec la betterave.
                </p>

                <div class="row m-3">
                    <div class="col">
                        <h5>Ingredients</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">150g d'échalotes</li>
                            <li class="list-group-item">500g de betteraves cuites</li>
                            <li class="list-group-item">2 oeufs</li>
                            <li class="list-group-item">200ml de crème de soja</li>
                            <li class="list-group-item">120g de chèvre frais</li>
                            <li class="list-group-item">Ciboulette</li>
                            <li class="list-group-item">Noix</li>
                            <li class="list-group-item">Sel et poivre</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5>Directions</h5>
                        <ol class="list-group list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                Mélanger les oeufs, la crème de soja, les échalotes, la ciboulette, les noix.
                            </li>
                            <li class="list-group-item">
                                Saler et poivrer
                            </li>
                            <li class="list-group-item">Verser la préparation dans un moule</li>
                            <li class="list-group-item">
                                Ajouter en cercle les tranches de betterave
                            </li>
                            <li class="list-group-item">
                                Émietter le chèvre
                            </li>
                            <li class="list-group-item">
                                Enfourner 30 minutees à 170 °C
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- MODAL POTIMARONS -->
    <div class="modal fade" id="potimarons" tabindex="-1" aria-labelledby="potimaronsLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-uppercase" id="potimaronsLabel">Soupe de potimarron</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>
                    La soupe de potimarron peut se faire avec tous les types de potimarrons, qu'ils soient jaunes, verts ou bien orangés. 
                    La chair, elle, reste jaune et le résultat est toujours aussi savoureux…
                </p>
                <p class="mb-5">
                    En soupe, velouté ou potage parsemé de fruits secs concassés ou de fromage râpé, le potimarron est un délice qui réchauffe les papilles.
                </p>

                <div class="row m-3">
                    <div class="col">
                        <h5>Ingredients</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">1kg de potimarron</li>
                            <li class="list-group-item">2 gousses d'ail</li>
                            <li class="list-group-item">Eau</li>
                            <li class="list-group-item">Sel</li>
                            <li class="list-group-item">Crème fraîche (facultatif)</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h5>Directions</h5>
                        <ol class="list-group list-group-numbered list-group-flush">
                            <li class="list-group-item">
                                Couper le potimarron en morceaux après avoir enlevé les pépins, mais sans l'avoir épluché.
                            </li>
                            <li class="list-group-item">
                                Le mettre dans une casserole, recouvrir d'eau sans dépasser la hauteur du potimarron et faire cuire à basse température. Ajouter l'ail écrasé et le sel en fin de cuisson.
                            </li>
                            <li class="list-group-item">Mixer le tout.</li>
                            <li class="list-group-item">
                                Servir chaud en ajoutant un peu de crème fraîche si vous le souhaitez.
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="mt-5">
                    <p>
                        Gratiné au fromage avec des lardons ou des morceaux de viande, le potimarron est une base idéale pour un repas complet et équilibré. 
                        En purée, le potimarron permet de varier les plaisirs.
                    </p>
                    <p>
                        Son petit goût de noisette permet de glisser le potimarron dans des tartes salées et sucrées. 
                        Découvrez nos recettes rapides et faciles pour cuisiner le potimarron à la maison.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import NavBar from './NavBar.vue';
  </script>