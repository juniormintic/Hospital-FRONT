<script >
   import axios from 'axios';

  export default{
    name:'Listadoctors',
    data(){
        return{
            Listdoctor:null,
            Pagina:1,      
            doctor:null,
                apellido:'',
                ciudad:'',
                codigo_rol:3,
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
          this.doctor= this.ListPaciente.find(item=> item.identificacion==cedula);               
            
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
                    this.Listdoctor=res.data.filter(item=>item.codigo_rol===3)
                }).catch(error=>console.log(error))
        }

    },
    mounted:function(){
           
            let URL=`https://falcon35.herokuapp.com/persona/`;
            axios.get(URL).then((res)=>{
                this.Listdoctor=res.data.filter(item=>item.codigo_rol==3);
                console.log(data)
            })
    }

}
</script>


<template>
   
    <div class="container ">
        <br>
        <header><h2>Lista Doctores</h2></header>    
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
            <tr v-for="doctor in Listdoctor" :key="doctor.identificacion">
                <th  scope="row">{{doctor.identificacion}}</th>
                <td >{{doctor.nombre}}</td>
                <td>{{doctor.apellido}}</td>
                <td>{{doctor.telefono}}</td>               
                <td>{{doctor.email}}</td>
                <td>
                    <button type="button" @click=" datosModal(doctor.identificacion)" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    Detalles
                    </button>
                                   
                    <button type="button" @click=" datosModal(doctor.identificacion)" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                    Actualizar
                    </button>
                    <button type="button" @click=" eliminardoctor(doctor.identificacion)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                    Eliminar
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
            <h5 class="modal-title" id="exampleModalLabel">Actualizar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="nombre" class="form-label">Nombre </label>
            <input type="nombre" class="form-control" id="nombre" placeholder="Digite su nombre">
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" placeholder="Digite sus apellidos">
            <label for="email" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com">
            
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
            <label for="telefono" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" placeholder="Ciudad">  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono" placeholder="Digite su dirección">
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
            <input type="nombre" class="form-control" id="nombre"  :value="nombre" disabled>
            <label for="apellido" class="form-Apellido">Apellidos</label>
            <input type="apellido" class="form-control" id="apellido" :value="apellido" disabled>
            <label for="email" class="form-email">Correo Electronico</label>
            <input type="email" class="form-control" id="email"  :value="email" disabled>
            
        </div>
        <div class="modal-body">
                <label for="sexo" class="form-sexo">Sexo</label><br>
                <input type="text" class="form-control" id="sexo"  :value="sexo" disabled>
            </div>
            
        <div class="modal-body">           
            <label for="Birtday">Fecha de Nacimiento:  </label><br>
            <input type="text" id="Birtday"  :value="fecha_nacimiento" disabled pattern="\d{4}-\d{2}-\d{2}">
        </div>
        <div class="modal-body" >   
            <label for="telefono" class="form-telefono">Telefono</label>
            <input type="telefono" class="form-control" id="Telefono"  :value="telefono" disabled>
        </div>
        <div class="modal-body"> 
            <label for="telefono" class="form-Ciudad">Ciudad</label><br>
            <input type="text" class="form-control" id="ciudad" :value="ciudad" disabled>  
    
        </div>
        <div class="modal-body" >   
            <label for="direccion" class="form-direccion">Dirección de residencia</label>
            <input type="direccion" class="form-control" id="Telefono"  :value="direccion" disabled>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Atrás</button>
          
        </div>
    </div>

    </div>
</div>


<!-- ELIMINAR -->
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar doctor</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Esta seguro de eliminar el doctor.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<style scoped></style>