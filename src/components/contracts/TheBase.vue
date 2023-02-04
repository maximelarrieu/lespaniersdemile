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
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="arches" data-bs-spy="scroll" data-bs-target="#arches" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <TroisArchesContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="olivia" data-bs-spy="scroll" data-bs-target="#olivia" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <OliviaContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="chassagne" data-bs-spy="scroll" data-bs-target="#chassagne" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <ChassagneContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="jarouilles" data-bs-spy="scroll" data-bs-target="#jarouilles" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <JarouillesContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="galinette" data-bs-spy="scroll" data-bs-target="#galinette" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <GalinetteContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="matthieu" data-bs-spy="scroll" data-bs-target="#matthieu" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <BieresContract />
        </div>
        <div class="contrat shadow-lg rounded p-2 mt-5 w-50 ms-auto me-auto" id="zita" data-bs-spy="scroll" data-bs-target="#zita" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
            <ZitaContract />
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