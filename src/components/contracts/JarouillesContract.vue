<template>
    <h3 class="text-uppercase">La ferme des Jarouilles</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/fermejarouilles.jpg" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Fromage - Yaourt - Lait - Beurre ...</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Crémerie</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                En bio depuis 1998, la ferme est constituée d'un troupeau de vaches, un troupeau de chèvres ainsi que quelques cochons, poules, chevaux de trait et autres.<br />
                Fabrication des produits à partir du lait des chèvres et des vaches dans la fromagerie sur la ferme. La ferme des Jarouilles prône les circuits courts de distribution au travers la distribution dans notre AMAP notamment.
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Coordinateurs</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>Caroline et Mikel</p>
            <p>
                <b>Distribution :</b><br />
                Tous les mercredis du mois.
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