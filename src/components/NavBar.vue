<template>
    <nav class="navbar shadow-sm navbar-expand-lg bg-white">
        <div class="container-fluid p-3 ms-5">
            <a class="navbar-brand" href="/">
                <img class="logo" src="@/assets/logo.png" alt="Logo des paniers d'Émile">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-4">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/">À propos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contrats">Contrats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/recettes">Recettes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/actualites">Actualités</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<style>
    .logo {
        width: 80px;
        height: 90px;
    }
</style>