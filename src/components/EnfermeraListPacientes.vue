<script>
      export default{
        name:'Listapacientes',
        data(){
            return{
                ListPaciente:[
                {
                identificacion:'123456789',
                nombre: 'pedro',
                apellido:'moncada',
                telefono:'3245698789',
                email:'@gmail.com',
                sexo:'hombre',
                edad:29,
                ciudad:'pamplona',
                direccion: 'av algo',
                fechaNacimiento:'1989/02/20'
                },
                {
                identificacion:'895231456',
                nombre: 'luz',
                apellido:'perez',
                telefono:'388888789',
                email:'luz@gmail.com',
                sexo:'mujer',
                edad:26,
                ciudad:'pamplona',
                direccion: 'av algo',
                fechaNacimiento:'1989/02/20'
                },
                {
                identificacion:'123456789',
                nombre: 'pedro',
                apellido:'moncada',
                telefono:'3245698789',
                email:'@gmail.com',
                sexo:'hombre',
                edad:23,
                ciudad:'pamplona',
                direccion: 'av algo',
                fechaNacimiento:'1989/02/20'
                }
                ],
                Pagina:1,  
                Modal:'',
                Persona: {
                    identificacion:'',
                    nombre:'',
                    apellido:'',
                    telefono:'',
                    email:''
                }
    
               
            }
        },
        components:{
            
        },
        methods:{
            datosModal(identificacion,modal){
                this.Persona= this.ListPaciente.find(item=> item.identificacion===identificacion);
                this.Modal=modal;
                console.log(this.Persona,this.Modal);
                
            },
            enviarData(id){
                this.$router.push('/historiaenf/'+id);

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
            <header><h2>Lista Pacientes Asignados</h2></header>    
            
           
            <br>
        <table class="table table-striped table-hover table-bordered border-primary">
            <thead class="table-primary">
                <tr>
                <th scope="col">identificacion</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Edad</th>
                <th scope="col">Sexo</th>
                <th scope="col">Historia</th>               
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="paciente in ListPaciente" :key="paciente.identificacion">
                    <th  scope="row">{{paciente.identificacion}}</th>
                    <td >{{paciente.nombre}}</td>
                    <td>{{paciente.apellido}}</td>
                    <td>{{paciente.edad}}</td>
                    <td>{{paciente.sexo}}</td>
                             
                  
                    <td>
                        <button type="button"  class="btn btn-info btn-sm" @click="enviarData(paciente.identificacion)" >
                            Historia
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