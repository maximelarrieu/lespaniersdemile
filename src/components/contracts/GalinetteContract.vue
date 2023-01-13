<template>
    <h3 class="text-uppercase">La boulangerie Galinette</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/boulangeriegalinette.jpg" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Galinette</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Micro boulangerie Galinette</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                Gaëlle, avec sa micro boulangerie Galinette nous propose des pains au pur levain naturel, 
                produits de manière artisanale, avec des pétrissages lents et une fermentation longue (24h), 
                garantissant une meilleure digestibilité́ et une meilleure conservation, en plus d’un goût unique aux arômes riches, 
                loin des pains dits « de tradition ».
                À base d’ingrédients biologiques, issus de producteurs français et/ou locaux. Des farines bio de Nouvelle Aquitaine, notamment avec le Moulin Bobina (Dordogne).
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Coordinateurs</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>Philippine et Vincent</p>
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