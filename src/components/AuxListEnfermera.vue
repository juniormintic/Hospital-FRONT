<script >
import axios from 'axios';

  export default{
    name:'Listaenfermeras',
    data(){
        return{
            Listenfermera:null,
            Pagina:1,      
                enfermera:null,
                    apellido:'',
                    ciudad:'',
                    codigo_rol:5,
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
                  
                   
                
    
               
            }
        },
        methods:{
            buscar(id){

            },
            datosModal(identificacion){
              this.enfermera= this.Listenfermera.find(item=> item.identificacion==identificacion);               
                
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
                        this.Listenfermera=res.data.filter(item=>item.codigo_rol===5)
                    }).catch(error=>console.log(error))
            }
    
        },
        mounted:function(){
            
            axios.get('https://falcon35.herokuapp.com/persona/')
            .then(res=>{
                console.log(res)
                this.Listenfermera=res.data.filter(item=>item.codigo_rol===5)
            }).catch(error=>console.log(error))
            
        }
}
 
</script>


<template>
   
    <div class="container ">
        <br>
        <header><h2>Lista Enfermeras</h2></header>    
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
            <th scope="col">identificacion</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="enfermera in Listenfermera" :key="enfermera.identificacion">
                <th  scope="row">{{enfermera.identificacion}}</th>
                <td >{{enfermera.nombre}}</td>
                <td>{{enfermera.apellido}}</td>
                <td>{{enfermera.telefono}}</td>               
                <td>{{enfermera.email}}</td>
                <td>
                    <button type="button" @click=" datosModal(enfermera.identificacion)" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    Detalles
                    </button>
                                   
                    <button type="button" @click=" datosModal(enfermera.identificacion)" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    Actualizar
                    </button>
                   
                </td>
            </tr>            
          
        </tbody>
    </table>


    <form v-on:submit.prevent="registrar()" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="identificacion" class="form-label">identificacion</label>
            <input type="text" class="form-control" id="identificacion" v-model="identificacion">
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
            <h5 class="modal-title" id="exampleModalLabel">Actualizar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" placeholder="Digite su nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" placeholder="Digite sus apellidos">
            <label for="email1" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email1" placeholder="nombre@ejemplo.com">
            
        </div>
        <div class="modal-body">
                <label for="email" class="form-email">Sexo</label><br>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Mujer 
                </label>
                <p> </p>
            
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                       Hombre
                </label>
                
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="date" id="Birtday" value="" pattern="\d{4}-\d{2}-\d{2}">
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono" placeholder="Digite su numero telefonico">
        </div>
        <div class="modal-body"> 
            <label for="ciudad1" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad1" placeholder="Ciudad">  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion1" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="direccion1" placeholder="Digite su dirección">
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
            <label for="nombre2" class="form-label">Nombre </label>
            <input type="text" class="form-control" id="nombre2"  :value="nombre" disabled>
            <label for="apellido2" class="form-Apellido">Apellidos</label>
            <input type="text" class="form-control" id="apellido2"  :value="apellido" disabled>
            <label for="email2" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email2"  :value="email" disabled>
            
        </div>
        <div class="modal-body">
                <label for="sexo2" class="form-sexo">Sexo</label><br>
                <input type="text" class="form-control" id="sexo2" :value="sexo" disabled>
            </div>
            
        <div class="modal-body">           
            <label for="Birtday2">Fecha de Nacimiento:  </label><br>
            <input type="text" id="Birtday2"  :value="fecha_nacimiento" disabled pattern="\d{4}-\d{2}-\d{2}">
        </div>
        <div class="modal-body" >   
            <label for="telefono3" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono3"  :value="telefono" disabled>
        </div>
        <div class="modal-body"> 
            <label for="ciudad3" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad3"  :value="ciudad" disabled>  
    
        </div>
        <div class="modal-body" >   
            <label for="doreccion3" class="form-direccion">Dirección de residencia</label>
            <input type="text" class="form-control" id="doreccion3"  :value="direccion" disabled>
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