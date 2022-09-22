<template>

    <!--<div class="bg-success p-2 text-dark bg-opacity-10">Contactanos</div>-->
      
    
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
    
    </template>
    <style>
    
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
    }
    </style>