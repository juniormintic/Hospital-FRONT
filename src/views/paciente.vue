<script>
    import Header from '../components/Header.vue';
    export default {
        components: {
            Header,
                    
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
 <!---->  <Header :tabs="this.tabs" v-on:recibir="item" />
    
    <main>
       <!---->
        <!-- PERFIL-->
       
    
<!------ Include the above in your HEAD tag ---------->

            
           
                    
                    
                            <div class="test">
                                <h2>Nombre Usuario</h2>
                                <p><strong>Identificacion: </strong> traer de la data </p>
                                <p><strong>Correo: </strong>traer de la data </p>
                                <p><strong>Dirección: </strong>traer de la data </p>
                                <p><strong>Telefono: </strong>traer de la data </p>
                                <p><strong>Medico: </strong>traer de la data </p>
                                <p><strong>Enfermera: </strong>traer de la data </p>
                                <!-- verdificar por que no despliega el formulario para Actualizar -->
                                <div class="btn-group dropup btn-block">
                                <button type="button" @click=" datosModal(doctor.cedula)" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                Actualizar
                                </button>
                                
                                </div>
                            </div>             

                
            
<!--TABLAS-->

   
  
       <div class="container">
        
           <br><br>
                
               <br>
               <header><h2>Historia del paciente: {{this.pacienteId}}</h2></header>    
               
              
               <br>
              
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
               <br>
               <tbody>
                
                  <!--<tr v-for="signo in historia.signosVitales" >
                       <th  scope="row">{{signo.fecha}}/{{signo.hora}}</th>
                       <td >{{signo.oximetria}}</td>
                       <td>{{signo.respiracion}}</td>
                       <td>{{signo.temperatura}}</td>
                       <td>{{signo.precion}}</td>
                       <td>{{signo.glicemia}}</td>
                   </tr>  -->           
                 
               </tbody>
               <br>
              
           </table>
           </div>
          
           <div class="container">
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
   
       <!--Signos vitales boton agregar-->
       <!-- registro -->
      
       <!-- Familiar datos-->
       <div class="SignosVitales">
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalx">
                Registrar Signos Vitales
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalx" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Signos Vitales</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     <!--Time-->
                     <form name="formulario" method="post" action="/send.php">
  <!-- Campo de entrada de fecha -->
  Selecciona la fecha deseada:
  <input type="date" name="fecha" min="2018-03-25" max="2018-05-25" step="2" />
  <!-- Campo de entrada de hora -->
  Selecciona la hora deseada:
  <input type="time" name="hora" min="18:00" max="21:00" step="3600" />
</form>
                   

                    <label for="Oximetria" class="form-label">Oximetria</label>
                    <input type="Oximetria" class="form-control" id="Oximetria" >
                    <label for="Frecuenciarespiracion" class="form-label">Frecuencia respiracion </label>
                    <input type="Frecuenciarespiracion" class="form-control" id="Frecuenciarespiracion">
                    <label for="Temperatura" class="form-Apellido">Temperatura</label>
                    <input type="Temperatura" class="form-control" id="Temperatura" >
                    <label for="Presiónarterial" class="form-email">Presión Arterial</label>
                    <input type="Presiónarterial" class="form-control" id="Presiónarterial" >
            
        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Registrar</button>
                    </div>
                    </div>
                </div>
                </div>
                <br>
                <br>
                <div class="Familiares">
                 <!-- Button trigger modal -->
                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalx1">
                Familiar
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalx1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Familiar</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     
                     

                    <h2>Nombre Usuario</h2>
                                <p><strong>Identificacion: </strong> traer de la data </p>
                                <p><strong>Correo: </strong>traer de la data </p>
                                <p><strong>Dirección: </strong>traer de la data </p>
                                <p><strong>Telefono: </strong>traer de la data </p>
                                <p><strong>Parentesco: </strong>traer de la data </p>
            
        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Registrar</button>
                    </div>
                    </div>
                </div>
                </div>    
             
    </main>
  
    </template>
    
    <style scoped>
    .container12{ 

    position: absolute;
    top: 10px;
    right: 750px;
    padding: 10xp;
  
    }
    .test{
    width: 300px;
    position: absolute;
    top: 20px;
    border: 5px solid navy;
    margin: 5px;
    border-radius: 10px;
    background: #ffffff; 
    top: 10px;
    left: 30px;
    padding: 10xp;
    text-align: center;
  
    }
    .container{
    width: 800px;
    position: relative;
    top: 5px;
    left: 400px;
    margin: 10px;
    padding: 10xp;
    z-index: 10;
   
    }
   .SignosVitales{
    position: absolute;
    top: 50px;
    padding: 10xp;
    margin: 10px;
    left: 30px;
   }
   [type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

/* custom styles */
body {  
  font: 13px Verdana, sans-serif;
}
label {
  display: block;
}
input {
  border: 1px solid #c4c4c4;
  background-color: #fff;  
  width: 95px;
}

.coc-block-row {
    width: 100%;
    /*display:table-row;*/
}
.coc-block {
    display: table-cell;
    vertical-align: middle;
    padding-bottom: 3px;
}
.coc-block-label {
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  padding-bottom: 3px;
  padding-right: 5px;
  margin-bottom: 0;
}
.coc-input {
  font-family: Calibri;
  height: 20px;
  font-size: 12px;
  padding-left: 3px;
  padding-right: 3px;
  border: 1px solid #999;
  /* variations */
}
.coc-form {
    padding-top: 5px;
    padding-left: 8px;
}
.SignosVitales{
    padding-top: 300px;
    padding-left: 8px;
    margin: 10px;
    padding: 10xp;
    right: 20px;
    position: absolute;
}
.Familiares{
    padding-top: 1px;
    margin: 50px;
    position: absolute;
}
    </style>

