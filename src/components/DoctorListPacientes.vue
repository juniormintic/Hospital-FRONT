<script >
    import axios from 'axios';
    import { ref } from 'vue';
      export default{
        name:'Listapacientes',
        data(){
            return{
                ListPaciente:[
                    {
                    cedula:'123456789',
                    nombre: 'pedro',
                    apellido:'moncada',
                    telefono:'3245698789',
                    email:'@gmail.com'
                    },
                    {
                    cedula:'895231456',
                    nombre: 'luz',
                    apellido:'perez',
                    telefono:'388888789',
                    email:'luz@gmail.com'
                    },
                    {
                    cedula:'123456789',
                    nombre: 'pedro',
                    apellido:'moncada',
                    telefono:'3245698789',
                    email:'@gmail.com'
                    }
                ],
                Pagina:1,  
                Modal:'',
                Persona: {
                    cedula:'',
                    nombre:'',
                    apellido:'',
                    telefono:'',
                    email:''
                }
    
               
            }
        },
        methods:{
            datosModal(cedula,modal){
                this.Persona= this.ListPaciente.find(item=> item.cedula===cedula);
                this.Modal=modal;
                console.log(this.Persona,this.Modal);
                
            }
        },
        mounted:function(){
            //    // this.currentTab=shallowRef('Pacientes');
            //     let URL=`https://falcon35.herokuapp.com/persona?page=${this.Pagina}`;
            //     axios.get(URL).then((res)=>{
            //         this.ListPaciente.push(res.data);
            //         console.log(data)
            //     })
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
                <tr v-for="paciente in ListPaciente" :key="paciente.cedula">
                    <th  scope="row">{{paciente.cedula}}</th>
                    <td >{{paciente.nombre}}</td>
                    <td>{{paciente.apellido}}</td>
                    <td>{{paciente.telefono}}</td>               
                    <td>{{paciente.email}}</td>
                    <td>
                        <button type="button" @click="Persona.cedula=paciente.cedula,Persona.nombre=paciente.nombre,Persona.apellido=paciente.apellido,'detalles'" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        Detalles
                        </button>
                                       
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Actualizar
                        </button>
                    </td>
                </tr>            
              
            </tbody>
        </table>
    
    
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
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
                <input type="date" id="Birtday" value="" pattern="\d{4}-\d{2}-\d{2}" >
            </div>
            <div class="modal-body" >   
                <label for="telefono" class="form-telefono">Telefono</label>
                <input type="telefono" class="form-control" id="Telefono" placeholder="Digite su numero telefonico">
            </div>
            <div class="modal-body"> 
                <label for="ciudad" class="form-Ciudad">Ciudad</label><br>
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
    <!--Update-->
    
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
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
    
    <!-- detalle  -->
    <div class="modal fade"  id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detalles</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <label for="nombre" class="form-label">Nombre </label>
                <input type="nombre" class="form-control" id="nombre" :name="Persona.nombre" :value="Persona.nombre">
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
    </div>
    
    </template>
    
    <style scoped></style>