<script >
import axios from 'axios';

  export default{
    name:'Listapacientes',
    data(){
        return{
            header:null,
            ListPaciente:null,
            Pagina:1,      
            paciente:null,
                apellido:'',
                ciudad:'',
                codigo_rol:1,
                direccion: '',
                email:'',
                fecha_nacimiento:'',
                fecha_registro:'',
                identificacion:'',                
                nombre:'',
                password:'',                
                telefono:'',               
                sexo: '',
                tipo_documento:'',  
                parentesco:'',
               
            

           
        }
    },
    methods:{
        datosModal(cedula){
          this.paciente= this.ListPaciente.find(item=> item.identificacion==cedula);               
            
        },
        registrar(){
            this.fecha_registro= ()=>{

                
            const fecha= new Date();
               let anio= fecha.getFullYear();
               let mes = fecha.getMonth()+1;
               let dia=fecha.getDay();
               dia= dia.lenght>1? dia:`0${dia}`;
              return  `${anio}-${mes}-${dia}`;
            }
            let persona= {
                "apellido": this.apellido,
                "ciudad":this.ciudad,
                "codigo_rol": this.codigo_rol,
                "direccion": this.direccion,
                "email":this.email,
                "fecha_nacimiento": this.fecha_nacimiento,
                "fecha_registro": this.fecha_registro() ,
                "identificacion": this.identificacion,
                "nombre":this.nombre,
                "password":this.password,
                "sexo":this.sexo,
                "telefono":this.telefono,                
                "tipo_documento":this.tipo_documento 
            }
            let json=JSON.stringify(persona);
            console.log(json);
            axios.post("https://falcon35.herokuapp.com/persona/" ,persona)
            .then(res=>{
                this.apellido="";
                this.ciudad="";                
                this.direccion="";
                this.email="";
                this.fecha_nacimiento="";
                this.fecha_registro="";
                this.identificacion="";
                this.nombre="";
                this.password="";
                this.sexo="";
                this.telefono="";
                this.tipo_documento="";
                this.updated();
              // console.log(res)
            }).catch(error=>console.log(error))
                
        },

       
        updated(){
            axios.get('https://falcon35.herokuapp.com/persona/')
                .then(res=>{
                    console.log(res)
                    this.ListPaciente=res.data.filter(item=>item.codigo_rol===1)
                }).catch(error=>console.log(error))
        }

    },
    mounted:function(){
        
        axios.get('https://falcon35.herokuapp.com/persona/')
        .then(res=>{
            console.log(res)
            this.ListPaciente=res.data.filter(item=>item.codigo_rol===1)
        }).catch(error=>console.log(error))
        
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
                    familiar
                    </button>
                    <!-- verificar el formulario para asignar enfermera y doctor -->
                    <button type="button" @click=" datosModal(paciente.identificacion)" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal7">
                     medico y enfermera
                    </button>
                 
                </td>
            </tr>            
          
        </tbody>
    </table>

<!-- registro -->
    <form v-on:submit.prevent="registrar()" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="cedula" class="form-label">cedula</label>
            <input type="text" class="form-control" id="cedula" v-model="identificacion">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="text" class="form-control" id="nombre" v-model="nombre">
            <label for="apellido" class="form-label">Apellidos</label>
            <input type="text" class="form-control" id="apellido" v-model="apellido">
            <label for="email" class="form-label">Correo Electronico</label>
            <input type="text" class="form-control" id="email" v-model="email">
            
        </div>
        <div class="modal-body">
                <label for="sexo" class="form-label">Sexo</label><br>
                <select class="form-control"  v-model="sexo">
                <option disabled value="">Please select one</option>
                <option>M</option>
                <option>F</option>
              
            </select>
                
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="date" id="Birtday" v-model="fecha_nacimiento" pattern="\d{4}-\d{2}-\d{2}" >
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-label">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" v-model="telefono" placeholder="Digite su numero telefonico">
        </div>
        <div class="modal-body"> 
            <label for="ciudad" class="form-label">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" v-model="ciudad" placeholder="Ciudad">   
            
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-label">Dirección de residencia</label>
            <input type="text" class="form-control" id="direccion" v-model="direccion" placeholder="Digite su dirección">
        </div>
       
        <div class="modal-body" >   
            <label for="tipodocumento" class="form-label">Tipo documento</label>
            <select class="form-control" id="tipodocumento" v-model="tipo_documento">
                <option disabled value="">Please select one</option>
                <option>CC</option>
                <option>TI</option>
              
            </select>
           
        </div>
        <div class="modal-body" >   
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Digite su dirección">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
            <button type="submit" class="btn btn-primary">Guardar</button>
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
            <label for="nombre2" class="form-label">Nombre </label>
            <input type="text" class="form-control" id="nombre2" name="nombre" :value="this.nombre">
            <label for="apellido2" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido2" name="apellido" :value="this.apellido">
            <label for="email2" class="form-label">Correo Electronico</label>
            <input type="email" class="form-control" id="email2" name="email" :value="this.email">
            
        </div>
        <div class="modal-body">
                <label for="sexo2" class="form-label">Sexo</label><br>
                <input class="form-check-input" type="radio" name="sexo" :value="this.sexo" id="flexRadioDefault1">
                <label class="form-check-label" for="sexo">
                    Mujer 
                </label>
                <p> </p>
            
                <input class="form-check-input" type="radio" name="sexo" :value="this.sexo" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="sexo">
                       Hombre
                </label>
                
            </div>
            
        <div class="modal-body">           
            <label for="Birtday2">Fecha de Nacimiento:  </label><br>
            <input type="date" id="Birtday2" name="fecha" :value="this.fecha_nacimiento" pattern="\d{4}-\d{2}-\d{2}">
        </div>
        <div class="modal-body" >   
            <label for="telefono2" class="form-label">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono2" name="telefono" :value="this.telefono">
        </div>
        <div class="modal-body"> 
            <label for="ciudad2" class="form-label">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad2" name="ciudad" :value="this.ciudad">  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion2" class="form-direccion">Dirección de residencia</label>
            <input type="text" class="form-control" id="direccion2" name="direccion" :value="this.direccion">
        </div>
        <div class="modal-body" >   
            <label for="parentesco2" class="form-direccion">Parentesco</label>
            <input type="text" class="form-control" id="parentesco2" name="direccion" :value="this.parentesco">
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
            <label for="nombre4" class="form-label">Numero de Identificación </label>
            <input type="text" class="form-control" id="nombre4" placeholder="Número de Identificación">
            <div class="modal-footer">
                <div class="modal-body">
                <label for="tipodocumento" class="form-label">Tipo de Documento</label><br>
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
            <label for="nombre5" class="form-label">Nombre </label>
            <input type="text" class="form-control" id="nombre5" name="nombre" :value="this.nombre" disabled>
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" name="apellido" :value="this.apellido" disabled>
            <label for="email3" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email3" :name="this.email" :value="this.email" disabled>
            
        </div>
        <div class="modal-body">
                <label for="sexo" class="form-sexo">Sexo</label><br>
                <input type="text" class="form-control" id="sexo" name="sexo" :value="this.sexo" disabled>
            </div>
            
        <div class="modal-body">           
            <label for="Birtday3">Fecha de Nacimiento:  </label><br>
            <input type="text" id="Birtday3" name="fecha_nacimiento" :value="this.fecha_nacimiento" disabled>
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" name="telefono" :value="this.telefono" disabled>
        </div>
        <div class="modal-body"> 
            <label for="ciudad3" class="form-label">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad3" name="ciudad" :value="this.ciudad" disabled>  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono" name="direccion" :value="this.direccion" disabled>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
          
        </div>
    </div>

    </div>
</div>




</div>

</template>

<style scoped></style>