<template>
    <h3 class="text-uppercase">L'huile de Zita</h3>
    <div class="image mx-auto">
        <img class="img" src="@/assets/images/huilezita.jpg" alt="tmp">
    </div>
    <h6 class="text-center text-uppercase mt-5">Huile d'olive</h6>
    <div class="divider mx-4 mt-4 mb-4"></div>
    <div class="row mx-auto ps-4 pe-4">
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Zita</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>
                Depuis 5 générations Zita Sanches cultive le savoir-faire dans ses oliveraies du Portugal, dans la région du Alto Douro. Zita pratique une agriculture biologique et traditionnelle.<br />
                Son huile est issue de la variété « La Negrinha ».
            </p>
        </div>
        <div class="col">
            <div class="d-flex flex-row mb-3">
                <h4 class="me-2">Coordinateur</h4>
                <font-awesome-icon icon="fa-solid fa-leaf" />
            </div>
            <p>Alban</p>
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