<script >
import axios from 'axios';

import { ref } from 'vue';
  export default{
    name:'Listapacientes',
    data(){
        return{
            header:null,
            ListPaciente:null,
            Pagina:1,      
            Persona: {
                cedula:'',
                nombre:'',
                apellido:'',
                telefono:'',
                email:'',
                sexo:'',
                ciudad:'',
                direccion: '',
                fecha_nacimiento:'',
                parentesco:''
            }

           
        }
    },
    methods:{
        datosModal(cedula,modal){
            this.Persona= this.ListPaciente.find(item=> item.identificacion==cedula);
                
            console.log(this.Persona.fecha_nacimiento);
            
        },
        registrarPaciente(){
                
        },

        eliminarPaciente(){

        }
    },
    mounted:function(){
        
        axios.get('https://falcon35.herokuapp.com/persona/')
        .then(res=>{this.ListPaciente=res.data; console.log(res.data)}).catch(error=>console.log(error))
        
    }

}
 
</script>

<template>
   
    <div class="container ">
        <br>
        <header><h2>Lista Pacientes</h2></header>    
        <br><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Registrar
        </button>       
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Buscar
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
            <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="paciente in ListPaciente" :key="paciente.identificacion">
                <th  scope="row">{{paciente.identificacion}}</th>
                <td >{{paciente.nombre}}</td>
                <td>{{paciente.apellido}}</td>
                <td>{{paciente.telefono}}</td>               
                <td>{{paciente.email}}</td>
                <td>
                    <button type="button" @click=" datosModal(paciente.identificacion)" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    Detalles
                    </button>
                                   
                    <button type="button" @click=" datosModal(paciente.identificacion)" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    Actualizar
                    </button> 
                    <button type="button" @click=" datosModal(paciente.identificacion)" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    Registrar familiar
                    </button>
                    <!-- verificar el formulario para asignar enfermera y doctor -->
                    <button type="button" @click=" datosModal(paciente.identificacion)" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                    personal medico
                    </button>
                    <button type="button" @click=" eliminarPaciente(paciente.cedula)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                    Eliminar
                    </button>
                </td>
            </tr>            
          
        </tbody>
    </table>

<!-- registro -->
    <form v-on:submit.prevent="registrarPaciente" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">cedula</label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.identificacion">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" v-model="Persona.apellido">
            <label for="email" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email" v-model="Persona.email">
            
        </div>
        <div class="modal-body">
                <label for="email" class="form-email">Sexo</label><br>
                <input class="form-check-input" type="radio" v-model="Persona.sexo" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Mujer 
                </label>
                <p> </p>
            
                <input class="form-check-input" type="radio" v-model="Persona.sexo" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                       Hombre
                </label>
                
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="date" id="Birtday" v-model="Persona.fecha_nacimiento" pattern="\d{4}-\d{2}-\d{2}" >
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" v-model="Persona.telefono" placeholder="Digite su numero telefonico">
        </div>
        <div class="modal-body"> 
            <label for="ciudad" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" v-model="Persona.ciudad" placeholder="Ciudad">   
            
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono" v-model="Persona.direccion" placeholder="Digite su dirección">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
            <button type="button" class="btn btn-primary">Guardar</button>
        </div>
    </div>

    </div>
    </form>
<!--Update-->

<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Familiar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" name="nombre" :value="Persona.nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" name="apellido" :value="Persona.apellido">
            <label for="email" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email" name="email" :value="Persona.email">
            
        </div>
        <div class="modal-body">
                <label for="email" class="form-email">Sexo</label><br>
                <input class="form-check-input" type="radio" name="sexo" :value="Persona.sexo" id="flexRadioDefault1">
                <label class="form-check-label" for="sexo">
                    Mujer 
                </label>
                <p> </p>
            
                <input class="form-check-input" type="radio" name="sexo" :value="Persona.sexo" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="sexo">
                       Hombre
                </label>
                
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="date" id="Birtday" name="fecha" :value="Persona.fecha_nacimiento" pattern="\d{4}-\d{2}-\d{2}">
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" name="telefono" :value="Persona.telefono">
        </div>
        <div class="modal-body"> 
            <label for="telefono" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" name="ciudad" :value="Persona.ciudad">  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono" name="direccion" :value="Persona.direccion">
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Parentesco</label>
            <input type="direccion" class="form-control" id="Telefono" name="direccion" :value="Persona.parentesco">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
            <button type="button" class="btn btn-primary">Guardar</button>
        </div>
    </div>

    </div>
</div>
<!--Buscar-->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
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
    </div>
</div>
        

</div>
<!-- detalle  -->
<div class="modal fade"  id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Detalles</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" name="nombre" :value="Persona.nombre" disabled>
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" name="apellido" :value="Persona.apellido" disabled>
            <label for="email" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email" :name="Persona.email" :value="Persona.email" disabled>
            
        </div>
        <div class="modal-body">
                <label for="sexo" class="form-sexo">Sexo</label><br>
                <input type="text" class="form-control" id="sexo" name="sexo" :value="Persona.sexo" disabled>
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="text" id="Birtday" name="fecha_nacimiento" :value="Persona.fecha_nacimiento" disabled>
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" name="telefono" :value="Persona.telefono" disabled>
        </div>
        <div class="modal-body"> 
            <label for="telefono" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" name="ciudad" :value="Persona.ciudad" disabled>  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono" name="direccion" :value="Persona.direccion" disabled>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
          
        </div>
    </div>

    </div>
</div>


<!-- asignar personal medico y enfermera -->
<form   class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">asignar personal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Esta seguro de eliminar el paciente.</p>
        <label for="nombre" class="form-label">cedula</label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.identificacion">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" v-model="Persona.apellido">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</form>
<!-- ELIMINAR -->
<form v-on:submit.prevent="eliminarPaciente"  class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Paciente</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Esta seguro de eliminar el paciente.</p>
        <label for="nombre" class="form-label">cedula</label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.identificacion">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" v-model="Persona.nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" v-model="Persona.apellido">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</form>
</div>

</template>

<style scoped></style>