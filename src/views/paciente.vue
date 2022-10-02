<script>
    import Header from '../components/Header.vue';
    import Perfil from '../components/PacientePerfil.vue';
   

    export default {
        components: {
            Header,
            Perfil,
          
        },
  data() {
    return {
      tab:null,
      currentTab: 'Perfil',
      tabs: ['Perfil']
    }
  },
   props:{
     
   },
    methods:{
    //    item(data){
    //         this.currentTab=data;
    //    }
    }
  
}
</script>

<template>
   <Header :tabs="this.tabs" v-on:recibir="item" />
    
    <main>
       
          
       <div class="container ">
           <br><br>
                
               <br>
               <header><h2>Historia del paciente: {{this.pacienteId}}</h2></header>    
               
              
               <br>
           <h3>Lista signos vitales</h3>
           <table class="table table-striped table-hover table-bordered border-primary">
               
               <thead class="table-primary">
              
                   <tr>
                   <th scope="col">Fecha/ hora</th>
                   <th scope="col">Oximetria</th>
                   <th scope="col">Frecuencia respiracion</th>
                   <th scope="col">Temperatura</th>
                   <th scope="col">Precion arterial</th>
                   <th scope="col">Glicemia</th>               
                   
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="signo in historia.signosVitales" :key="signo.codigo">
                       <th  scope="row">{{signo.fecha}}/{{signo.hora}}</th>
                       <td >{{signo.oximetria}}</td>
                       <td>{{signo.respiracion}}</td>
                       <td>{{signo.temperatura}}</td>
                       <td>{{signo.precion}}</td>
                       <td>{{signo.glicemia}}</td>
                   </tr>            
                 
               </tbody>
           </table>
           </div>
           <div class="container ">
           <br><br>
           <h3>Lista de diagnostico</h3>          
           <br/>
           <br/>
           <table class="table table-striped table-hover table-bordered border-primary">
               <thead class="table-primary">
                   <tr>
                   <th scope="col">Codigo</th>
                   <th scope="col">Fecha</th>
                   <th scope="col">Diagnostico</th>
                   <th scope="col">Sugerencias</th>
                   <th scope="col">Medico</th>
                                
                   
                   </tr>
               </thead>
               <tbody>
                   <!-- <tr v-for="paciente in ListPaciente" :key="paciente.cedula">
                       <th  scope="row">{{paciente.cedula}}</th>
                       <td >{{paciente.nombre}}</td>
                       <td>{{paciente.apellido}}</td>
                       <td>{{paciente.edad}}</td>
                       <td>{{paciente.sexo}}</td>
                                
                     
                       <td>
                           <button type="button"  class="btn btn-info btn-sm" @click="enviarData(paciente.cedula)" >
                               Historia
                           </button>
                                          
                         
                       </td>
                   </tr>             -->
                 
               </tbody>
           </table>
           
          
       </div>
   

    
    
    </main>
    </template>
    
    <style>
    
    </style>

<!-- <template> -->

    <!-- creare vista de paciente  donde se muestren los datos y los botones para editarlos como elde ver el familiar 
        con lista de signos vitales y historia  -->




    <!-- <br>
    <header><h2>Modulo Pacientes (Busqueda, Registros signos vitales y Actualización)</h2></header>    
    <br><br>
    <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Busqueda</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Buscar"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Numero de Identificación </label>
            <input type="nombre" class="form-control" id="nombre" placeholder="Número de Identificación">
            <div class="modal-footer">
                <div class="modal-body">
                <label for="email" class="form-email">Tipo de Documento</label><br>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    C.C 
                </label>
                <p> </p>
            
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                       T.I
                </label>
                <p></p>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                       Pasaporte
                </label>
                
            </div>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Buscar</button>
        </div>  
        </div>        
        <div class="container ">
            
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Registro Signo Vital
            </button>
            <button type="button" class="btn btn-secundary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Actualizar Datos Personales
            </button>
            <button type="button" class="btn btn-secundary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            Consultar Historia clinica
            </button>
            <br>
            <br>
        <table class="table table-striped table-hover table-bordered border-primary">
            <thead class="table-primary">
                <tr>
                <th scope="col">Cedula</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody> -->
                <!-- <tr v-for="paciente in ListPaciente" :key="cedula">
                    <th scope="row">{{paciente.cedula}}</th>
                    <td>{{paciente.nombre}}</td>
                    <td>{{paciente.apellido}}</td>
                    <td>{{paciente.telefono}}</td>
                    <td>{{paciente.apellido}}</td>
                    <td>{{paciente.telefono}}</td>
                    <td>{{paciente.email}}</td>
                </tr>             -->
              
            <!-- </tbody>
        </table>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registrar Signo Vital</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="Oximetria" class="form-label">Oximetria </label>
                <input type="Oximetria" class="form-control" id="Oximetria" placeholder="Ingrese su Oximetria">
                <label for="Frecuencia Respiratoria" class="form-label">Frecuencia Respiratoria </label>
                <input type="Frecuencia Respiratoria" class="form-control" id="Frecuencia Respiratoria" placeholder="Ingrese Frecuencia Respiratoria">
                <label for="Frecuencia Cardiaca" class="form-label">Frecuencia Cardiaca</label>
                <input type="Frecuencia Cardiaca" class="form-control" id="Frecuencia Cardiaca" placeholder="Ingrese si Frecuencia Cardiaca">
                <label for="Temperatura" class="form-label">Temperatura</label>
                <input type="Temperatura" class="form-control" id="Temperatura" placeholder="Ingrese su Temperatura">
                <label for="Presion Arterial" class="form-email">Presion Arterial</label>
                <input type="Presion Arterial" class="form-control" id="Presion Arterial" placeholder="Ingrese su Presion Arterial">
                <label for="Glicemia" class="form-email">Glicemia</label>
                <input type="Glicemia" class="form-control" id="Glicemia" placeholder="Ingrese su Glicemia">
                
                
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>
        </div>
        </div>
    </div>
</div> -->

    <!--Update-->
    
    <!-- <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Actualizar Datos Personales</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="Identificación" class="form-label">Identificación </label>
                <input type="Identificación" class="form-control" id="Identificación" placeholder="Digite su Identificación">
                <label for="Dirección" class="form-label">Dirección </label>
                <input type="Dirección" class="form-control" id="Dirección" placeholder="Actualice su Dirección">
                <label for="Telefono" class="form-label">Telefono</label>
                <input type="Telefono" class="form-control" id="Telefono" placeholder="Actualice su Telefono">
                <label for="Ciudad" class="form-label">Ciudad</label>
                <input type="Ciudad" class="form-control" id="Ciudad" placeholder="Actualice su Ciudad">
                <label for="Latitud" class="form-label">Latitud</label>
                <input type="Latitud" class="form-control" id="Latitud" placeholder="Actualice su Latitud">
                <label for="Longitud" class="form-label">Longitud</label>
                <input type="Longitud" class="form-control" id="Longitud" placeholder="Actualice su Longitud">
                
                
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
                <button type="button" class="btn btn-primary">Guardar</button>
            </div>
        </div>
    
        </div>
    </div> -->
    
    <!--Buscar-->

    <!-- <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
            <div class="modal-content">
               
            </div>
        </div>
    </div>
            
    </div>
    </template> -->