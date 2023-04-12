<template>
    <div class="content mx-auto mt-5 mb-5">
        <ul id="contrats" class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" href="#arches">La ferme des 3 arches</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#olivia">Les volailles d'Olivia</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#chassagne">La ferme Chassagne</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#jarouilles">La ferme des Jarouilles</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#galinette">La boulangerie Galinette</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#matthieu">Les bières de Matthieu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#zita">L'huile de Zita</a>
            </li>
        </ul>
        <div data-bs-spy="scroll" data-bs-target="#contrats" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0" class="mt-5">
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="arches">
                <TroisArchesContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="olivia">
                <OliviaContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="chassagne">
                <ChassagneContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="jarouilles">
                <JarouillesContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="galinette">
                <GalinetteContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="matthieu">
                <BieresContract />
            </div>
            <div class="contrat shadow-sm contrat-lg mx-auto rounded p-2 mt-4" id="zita">
                <ZitaContract />
            </div>
        </div>
    </div>
</template>

<script setup>
    import TroisArchesContract from './TroisArchesContract.vue'
    import OliviaContract from './OliviaContract.vue'
    import ChassagneContract from './ChassagneContract.vue';
    import JarouillesContract from './JarouillesContract.vue';
    import GalinetteContract from './GalinetteContract.vue';
    import BieresContract from './BieresContract.vue';
    import ZitaContract from './ZitaContract.vue';
</script>

<style>
    @media (min-width: 992px) {
        .contrat-lg {
            width: 75%
        }
    }
    .content {
        width: 90%;
    }
    .content a {
        color: grey;
    }
    .contrat {
        padding: 2%;
    }
    .contrat h3 {
        margin-top: 20px;
        text-align: center;
    }
</style>
