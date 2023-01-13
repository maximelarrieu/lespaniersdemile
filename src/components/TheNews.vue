<style>
  .thumbnail img {
        display: block;
        filter: brightness(75%)
    }
    .thumbnail {
        position: relative;
        display: inline-block;
    }
    .img-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% );
        text-align: center;
        color: white;
    }
    @media (max-width: 576px) {
        .img-text {
            font-size: 9px;
        }
    }
    @media (min-width: 577px) {
        .img-text {
            font-size: 24px;
        }
    }
</style>

<template>
  <NavBar />
  <div class="mt-5">
    <h1 class="text-center text-uppercase">Les actualités</h1>
    <h2 class="text-center">Les paniers d'Émile</h2>
  </div>
  <div class="container w-75 mt-5 mb-5">
    <div class="row text-center">
      <div class="col p-1 text-center">
        <a class="thumbnail" href="" data-bs-toggle="modal" data-bs-target="#courges2021">
          <img src="@/assets/images/courges2021.jpg" alt="">
          <div class="img-text">
            <p class="fw-bolder">Récolte des courges 2021</p>
          </div>
        </a>
      </div>
      <div class="col p-1 text-center">
        <a class="thumbnail" href="" data-bs-toggle="modal" data-bs-target="#courges2020">
          <img src="@/assets/images/courges2020.jpeg" alt="">
          <div class="img-text">
            <p class="fw-bolder">Récolte des courges 2020 chez Ylan</p>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col p-1 text-center">
        <a class="thumbnail" href="" data-bs-toggle="modal" data-bs-target="#bokashi">
          <img src="@/assets/images/recup.jpg" alt="">
          <div class="img-text">
            <p class="fw-bolder">Présentation du compostage partipatif : BOKASHI</p>
          </div>
        </a>
      </div>
      <div class="col p-1 text-center">
        <a class="thumbnail" href="" data-bs-toggle="modal" data-bs-target="#bieres">
          <img src="@/assets/images/plume-epi-bieres.jpg" alt="">
          <div class="img-text">
            <p class="fw-bolder">Dégustation de bière paysanne et écologique</p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- MODAL COURGES 2021 -->
  <div class="modal fade" id="courges2021" tabindex="-1" aria-labelledby="courges2021Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5 text-uppercase" id="courges2021Label">Récolte des courges 2021</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p>Quelques clichés de cette journée ramassage des courges.</p>
        <div id="carouselCourges2021" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/images/courges2021/1.jpg" class="carousimage d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2021/2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2021/3.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2021/4.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2021/5.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2021/6.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselCourges2021" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselCourges2021" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL COURGES 2020 -->
  <div class="modal fade" id="courges2020" tabindex="-1" aria-labelledby="courges2020Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5 text-uppercase" id="courges2020Label">Récolte des courges 2020 chez Ylan</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p>Quelques clichés de cette journée ramassage des courges chez Ylan (Ferme des 3 arches) !<br />
            Merci à Ylan pour son accueil, merci aux volontaires et merci à François pour les photos.</p>
        <div id="carouselCourges2020" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/images/courges2020/1.jpeg" class="carousimage d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2020/2.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2020/3.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2020/4.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="@/assets/images/courges2020/5.jpeg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselCourges2020" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselCourges2020" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL BOKASHI -->
  <div class="modal fade" id="bokashi" tabindex="-1" aria-labelledby="bokashiLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-uppercase" id="bokashiLabel">Présentation du compostage partipatif : BOKASHI</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>À l'occasion de la distribution d'aujourd'hui, Récup' est venu nous présenter leur service de compostage participatif pour les particuliers à Bordeaux</p>
          <p>
            <a href="https://www.recup-compostage-urbain.fr" target="_blank">Accèdez au site internet</a>
          </p>
          <div id="carouselBokashi" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="@/assets/images/boka/1.png" class="carousimage d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/boka/2.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/boka/3.png" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselBokashi" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselBokashi" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
          </div>
          <h5 class="mt-4">Le service en 3 étapes</h5>
          <p class="fw-bold">Mise à disposition d'un composteur Bokashi</p>
          <p>
            Grace à votre adhésion, vous bénéficiez d'un composteur Bokashi avec ses accessoires.
            Ce type de composteur est inodore et il prend très peu de place
          </p>
          <p class="fw-bold">Ramassage en vélo électrique</p>
          <p>Quand votre composteur est plein, nous passons l'échanger avec un composteur vide et propre.</p>
          <p class="fw-bold">Compostage chez nos maraîchers partenaires</p>
          <p>
            Nous acheminons le compost jusqu'à nos maraîchers partenaires situés autour de la métropole de Bordeaux. Ils vont pouvoir faire maturer le compost afin d'agrader les sols.<br />
            Votre compost servira à produire des fruits et des légumes qui seront vendus à domicile à nos adhérents.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL BIERES -->
  <div class="modal fade" id="bieres" tabindex="-1" aria-labelledby="bieresLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-uppercase" id="bieresLabel">Dégustation de bière paysanne et écologique</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            <a href="http://plumepi.com" target="_blank">La plume et l'épi</a> est venu nous faire déguster ses bières en vue de la création d'un nouveau contrat bière.
          </p>
          <div id="carouselBieres" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="@/assets/images/bieres/1.jpg" class="carousimage d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/bieres/2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/bieres/3.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/bieres/4.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/bieres/5.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselBieres" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselBieres" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
          </div>
          <p class="mt-4">
            Implantée à Grignols près de Périgueux dans le département de la Dordogne, La plume et l’épi est une ferme spécialisée dans la culture de l’orge biologique et la fabrication de bières paysannes.
          </p>
          <p>
            La ferme brasserie La plume et l’épi, c’est avant tout l’histoire d’une reconversion professionnelle, celle de Mathieu Prouillac. Il y a plusieurs années, il quitte le secteur informatique et part en formation au CFPPA de Coulounieix Chamiers, 
            pour y apprendre le métier d'agriculteur. Il conçoit d'abord un projet d'installation sur la ferme de Guillaumias, à Coursac, où il rejoint un éleveur de volailles en agriculture biologique.
          </p>
          <p>
            C'est ici que démarre l'idée d'une bière paysanne, élaborée à partir de céréales cultivées localement. Après plusieurs essais concluants, Matthieu décide de suivre une formation pour devenir maître brasseur. Ainsi, il décroche le diplôme d'opérateur de brasserie à l'université de La Rochelle en 2013 : La plume et l'épi est née.
          </p>
          <p>
            Désormais située à Grignols, au coeur du Périgord blanc, dans le département de la Dordogne, la ferme brasserie La plume et l'épi vous accueille pour des visites et des dégustations.
          </p>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>
  
<script setup>
  import NavBar from './NavBar.vue';
  import TheFooter from './TheFooter.vue';
</script>

<style>
  .col img {
    width: 100%;
  }
  .carousimage {
    height: 400px;
  }
  a {
    color: grey;
  }
</style>