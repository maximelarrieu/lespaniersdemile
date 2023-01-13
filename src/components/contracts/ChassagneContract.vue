<template>
    <h3 class="text-uppercase">La ferme de Chassagne</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/fermechassagne.jpg" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Légumineuses</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">La ferme de Chassagne</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                La Ferme de Chassagne, située à Villefagnan (16) propose des légumes secs (lentilles, pois cassés, pois chiches, haricots blancs, rouges, noirs et flageolets),
                farines de céréales (blé, épeautre, engrain, sarrasin) et huile de tournesol.
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Commandes groupées</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                Associés pour valoriser les productions du terroir par une démarche collective (qualité et proximité), 
                les producteurs gèrent eux-mêmes les activités du GIE et la vente de leurs produits tous certifiés bio, 
                issus de fermes 100% bio !
            </p>
        </div>
    </div>
</template>

<style>
    @media (max-width: 576px) {
        .image {
            width: 95%;
            height: 200px;
        }
    }

    @media (min-width: 577px) {
        .image {
            width: 80%;
            height: 500px;
        }
    }

    .image .img {
        width: 100%;
        height: 100%;
    }
    .divider {
        border: 1px solid rgba(64, 61, 61, 0.201);
    }
</style>