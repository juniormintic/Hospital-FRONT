<script>
  export default{
    methods:{
       login(){
         this.$router.push({ name: "login" })
       }
    }
  }
</script>

<!-- AGREGAR IMAGENES Y TEXTO -->

<template>
<div>
  <header>
    <div class="d-flex h-100 text-center text-bg-primary">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
                <div>
                <h3 class="float-md-start mb-0">Falcon</h3>
                <nav class="nav nav-masthead justify-content-center ">
                    <a class="nav-link fw-bold py-1 px-0 " aria-current="page" href="#" >Home</a>
                    <a class="nav-link fw-bold py-1 px-0" href="#nosotros">Nosotros</a>
                    <a class="nav-link fw-bold py-1 px-0" href="#contacto">Contacto</a>
                    <a class="nav-link fw-bold py-1 px-0" @click="login()">Iniciar </a>
                </nav>
                </div>
            </header>
        </div>
    </div>
  </header>
   
<!--<div class="bg-success p-2 text-dark bg-opacity-10">Contactanos</div>-->
      <!-- banner -->
<main>

        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
                <div class="carousel-caption ">
                <h1>Hospital en Casa.</h1>
                <p>Es una plataforma online que facilita la atención médica en casa a través de un portal de constante comunicación entre pacientes y médicos, que se caracteriza por su eficiencia y versátilidad en los diagnosticos médicos y progreso de cada uno de los usuarios.</p>
                <p><a class="btn btn-lg btn-primary" @click="login()">Iniciar sesion</a></p>
                </div>
            </div>
            </div>
            <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
                <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
            </div>
            </div>
            <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

            <div class="container">
                <div class="carousel-caption ">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>


<!-- Marketing messaging and featurettes
================================================== -->
<!-- Wrap the rest of the page in another container to center all the content. -->

<div id="nosotros" class="container marketing">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Equipo de Desarrollo</h1>
      <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <br>
  <!-- Three columns of text below the carousel -->
  <div class="row">
    <div class="col-sm">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

      <h2 class="fw-normal">Heading</h2>
      <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div><!-- /.col-lg-4 -->
    <div class="col-sm">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

      <h2 class="fw-normal">Heading</h2>
      <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div><!-- /.col-lg-4 -->
    <div class="col-sm">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

      <h2 class="fw-normal">Heading</h2>
      <p>And lastly this, the third column of representative placeholder content.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div><!-- /.col-lg-4 -->
    <div class="col-sm">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

      <h2 class="fw-normal">Heading</h2>
      <p>And lastly this, the third column of representative placeholder content.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div><!-- /.col-lg-5 -->
    <div class="col-sm">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

      <h2 class="fw-normal">Heading</h2>
      <p>And lastly this, the third column of representative placeholder content.</p>
      <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
    </div><!-- /.col-lg-5-->
  </div><!-- /.row -->


  <!-- START THE FEATURETTES -->

  <hr class="featurette-divider">

  
  <hr class="featurette-divider">
  <div id="contacto" class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>

  <hr class="featurette-divider">

  <!-- /END THE FEATURETTES -->

</div><!-- /.container -->


<!-- FOOTER -->
<footer class="container">
  <p class="float-end"><a href="#">Back to top</a></p>
  <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
</footer>
<br><br>
</main>
</div>
<!--     
    <div class="footer bg-opacity-10">
    <h2>Contactanos</h2>
    </div>
    <div class= "main-component">
        <h4>Sede Principal</h4>
        <p>Cedritos</p>
        <h4>Telefono:</h4>
        <p>+57 3057701497</p>
        <p>601 7561977</p>
        <h4>Dirección:</h4>
        <p>CL 125 #21 A-27</p>
        <hr class="border border-primary border-4 opacity-10">
        <h4>Sede Dos</h4>
        <p>Colina</p>
        <h4>Telefono:</h4>
        <p>+57 3078701497</p>
        <p>601 7861977</p>
        <h4>Dirección:</h4>
        <p>CL 125 #21 A-27</p>
    </div>
    <div class= "contacto">
        <label for="nombre" class="form-label">Nombre </label>
                <input type="nombre" class="form-control" id="nombre" placeholder="Digite su nombre">
                <label for="apellido" class="form-Apellido">Apellidos</label>
                <input type="apellido" class="form-control" id="apellido" placeholder="Digite sus apellidos">
                <label for="email" class="form-email">Correo Electronico</label>
                <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
                
    </div>
     -->
    </template>
    <style>
    /* HEADER */
    header{
            position: sticky;
            top: 0px;
            z-index: 10;
        }
        .nav-masthead .nav-link {
        color: rgba(255, 255, 255, .5);
        border-bottom: .25rem solid transparent;
        }

        .nav-masthead .nav-link:hover,
        .nav-masthead .nav-link:focus {
        border-bottom-color: rgba(255, 255, 255, .25);
        }

        .nav-masthead .nav-link + .nav-link {
        margin-left: 1rem;
        }

        .nav-masthead .active{
        color: #fff;
        border-bottom-color: #fff;
        }
        .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
        }

        .nav-scroller .nav {
            display: flex;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }
        /* HEADER */



/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 3rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
    position: absolute;
    bottom: 15rem;
 
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 100vh;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
/* rtl:begin:remove */
.featurette-heading {
  letter-spacing: -.05rem;
}

/* rtl:end:remove */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}


/* 

    
    .main-component{
    height: 75vh;
    margin: 5%;
    padding: 0%;
    background: #FDFEFE;
    justify-content: left;
    align-items: left;
    width: 20%;
    height: 10vh;
    }
    .contacto{
    height: 50vh;
    margin: 5%;
    padding: 1%;
    background: #FDFEFE;
    justify-content: right ;
    align-items: right ;
    position: absolute;
    left: 400px;
    top: 80px;
    width: 50%;
    height: 10vh;
    margin-right:200px ;
    }
    .footer{
    margin:0;
    padding:0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #53b5ee;
    opacity: 10;
    font-style:dark;
    color: #E5E7E9;
    
    
    }
    .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    } */
    </style>