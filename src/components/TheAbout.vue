<template>
    <div class="w-75 p-3 mx-auto mt-5 mb-5" style="background-color: #eee;">
        <div class="row">
            <div class="col p-5">
                <h3>A la recherche d'une AMAP ?</h3>
                <p class="fs-5">Tous les jeudis</p>
                <p class="fs-6">19 rue Premeynard 33300 BORDEAUX</p>
                <div class="pdf-files mt-3">
                    <!-- <input type="file" value="Open" @click="readFile()" />; -->
                    <a href="" @click="readFile('dist/assets/pdfs/STATUTS-AMAP-LES-PANIERS-D-EMILE.pdf')">Statuts de notre AMAP</a><br />
                    <a href="" @click="readFile('srdistc/assets/pdfs/Charte-des-AMAP.pdf')">Charte des AMAP</a><br />
                    <a href="https://calendar.google.com/calendar/u/0/embed?src=6nbs8j6k939087l8jvctie20ko@group.calendar.google.com&ctz=Europe/Paris" target="_blank">Calendrier des distributions</a>
                    <div class="mt-5">
                        <a href="" @click="readFile('dist/assets/pdfs/Présentation-AMAP-2022.pdf')">
                            <button type="button" class="btn btn-secondary text-uppercase">
                                <font-awesome-icon icon="fa-solid fa-signs-post" />
                                Présentation de notre AMAP
                            </button>
                        </a>
                    </div>
                </div>
                <h5 class="mt-4">Suivez nous sur Facebook</h5>
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <a class="ms-2" href="https://www.facebook.com/lespaniersdemile" target="_blank">+ de 100 personnes aiment déjà notre page</a>
            </div>
            <div class="col p-4 text-center">
                <div class="about mt-5">
                    <img class="img" src="@/assets/images/about.jpg" alt="Panier de légumes">
                </div>
            </div>
        </div>
        <div class="divider mx-4"></div>
        <div class="distributions p-5">
            <h4>Distributions</h4>
            <p>Jeudi <b>18h30</b> à <b>20h</b></p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    methods: {
        readFile(file) {
            window.open(file, '_blank')
        }
    }
}
</script>

<style>
    .about {
        width: 100%;
    }
    .img {
        width: 100%;
        height: 100%;
    }
    .pdf-files a {
        color: grey;
    }

    .divider {
        border: 1px solid rgba(64, 61, 61, 0.201);
    }
</style>


