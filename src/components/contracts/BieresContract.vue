<template>
    <h3 class="text-uppercase">Les bières de Matthieu</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/matthieubiere.png" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Bières</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Matthieu Prouillac</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                Implantée à Grignols, près de Périgueux, dans le département de la Dordogne, La plume et l’épi est une ferme brasserie qui vous propose des bières paysannes biologiques.<br />
                La plume et l'épi assure la fabrication de bières traditionnelles via la culture d’orge produit sur la ferme. Elle bénéficie de la certification agriculture biologique.
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Coordinateurs</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>Joachim et Benjamin</p>
            <p>
                <b>Tarifs :</b><br />
                2,75€ la bouteille de 33cl<br />
                5,50€ la bouteille de 75cl<br />
                30€ le carton de 6x75cl ou 12x33cl
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