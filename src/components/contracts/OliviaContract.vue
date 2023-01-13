<template>
    <h3 class="text-uppercase">Les volailles d'Olivia</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/oliviaquillet.jpg" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Poulets - Oeufs</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Olivia</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                Olivia élève des volailles de races en bio sur un terrain forestier de 14 ha. 
                Les 18 cabanes mobiles sont déplacées régulièrement pour le renouvellement du couvert végétal. 
                Les 240 poulets accueillis poussins, de un jour, en provenance du Gers, sont en liberté dans leur parcours et sont élevés pendant au moins 120 jours sous les pins et les chênes. 
                Son attention au quotidien pour leur bien-être explique le goût de ses volailles et de ses œufs.
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Coordinateurs</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>Lison et Isabelle</p>
            <p>
                <b>Tarifs :</b><br />
                <b>Œufs</b><br />
                3 euros les 6 œufs / 6 euros la douzaine<br />
                <b>Poulets</b><br />
                1.6 à 1.9 kg : 22.75 euros<br />
                2.0 à 2.4 kg : 28.60 euros<br />
                2.4 à 3.0 kg et plus : 33.80 euros
            </p>
            <p>
                <b>Distribution :</b><br />
                Tous les premiers mercredis du mois.<br />
                Commande limitée à une douzaine d’œufs par contrat.
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