<script >

    import Pacientes from '../components/DoctorListPacientes.vue';
    import Header from '../components/Header.vue'
    
    
    export default {
      components: {
        Header,
        Pacientes,
      
           
      },
      data() {
        return {
          tab:null,
          currentTab: 'Pacientes',
          tabs: ['Pacientes']
        }
      },
       props:{
         
       },
        methods:{
           item(data){
                this.currentTab=data;
           }
        }
      
    }
    
    </script>
    
    <template>
            <Header :tabs="this.tabs" v-on:recibir="item" /> 
         
        <main>
   
            <!-- carga el componente de tablas segun el click del menu -->
        <component :is="currentTab"  :class="tab"></component>
        </main>
    </template>
    
    <style>
    
    </style>


<!-- <script >
 
    import Pacientes from '../components/AuxListPacientes.vue';
    import Doctores  from '../components/AuxListDoctores.vue';
    import Enfermeras from '../components/AuxListEnfermera.vue';
    import Header from '../components/Header.vue'
    
    
    export default {
      components: {
        Header,
            Pacientes,
            Doctores,
            Enfermeras
      },
      data() {
        return {
          tab:null,
          currentTab: 'Pacientes',
          tabs: ['Pacientes', 'Doctores', 'Enfermeras']
        }
      },
       props:{
         
       },
        methods:{
           item(data){
                this.currentTab=data;
           }
        }
      
    }
    
    </script>
    
    <template>
        
        <div class="footer bg-opacity-10">
        <h2>Información General</h2>
        </div>
        <div class="container ">
        <br>    
        <header><h2>Gestión Pacientes</h2></header>    
        <br><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Buscar Pacientes
        </button>
        <br>
        <br>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Busqueda de Paciente</h5>
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
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"> Buscar Pacientes</button>

        </div>   
        </div>
    </div>
</div>
   
</div>
<div class="modal-body">
            <label for="nombre" class="form-label">Nombre: </label><br>
            <label for="apellido" class="form-label">Apellido: </label><br>
            <label for="numeroIdentidad" class="form-label">Documento: </label>
    <br>
    <br>
    </div>
    <div class="Historia-Clinica">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
        Historia Clinica
        </button>
        <br>
        <br>
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Historial Clinica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Buscar"></button>
            <br>
            <br>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Tipo de Documento: </label><br>
            <label for="email" class="form-email">N° Identificación: </label><br>
            <label for="email" class="form-email">Nombre: </label><br>
            <label for="email" class="form-email">Apellido: </label><br>
            <div class="modal-footer">
                <div class="modal-body">
                
                
                <br>
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Historia Clinica</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
                
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<br>
    <div class="Signos-Vitales">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal4">
        Signos Vitales
        </button>
        <br>
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Historial Clinica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Buscar"></button>
            <br>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Tipo de Documento: </label><br>
            <label for="email" class="form-email">N° Identificación: </label><br>
            <label for="email" class="form-email">Nombre: </label><br>
            <label for="email" class="form-email">Apellido: </label><br>
            <label for="email" class="form-email">Oximetría: </label><br>
            <label for="email" class="form-email">Temperatura: </label><br>
            <label for="email" class="form-email">Frecuencia Respiratoria: </label><br>
            <label for="email" class="form-email">Frecuencia Cardiaca: </label><br>
            <label for="email" class="form-email">Presión Arterial: </label><br>
            <label for="email" class="form-email">Glicemia: </label><br>
            <label for="email" class="form-email">Hora: </label><br>
            <label for="email" class="form-email">Fecha: </label><br>
            
    </div>
</div>
</div>
</div>
</div>
</div>


    </template>
    
    <style>
        h2 {text-align: center;}
    .footer{
    margin:2;
    padding:2;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #53b5ee;
    opacity: 10;
    font-style:dark;
    color: #E5E7E9;
    }
    .Historio-Clinica{
    margin:0;
    padding:0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    place-content: center;
    }
    
    </style> -->