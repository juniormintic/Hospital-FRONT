<script>
 import Header from './Header.vue';
 import axios from 'axios';
 export default {
    name:'historia',
    components:{
        Header,
    } ,
    data() {
        return {
          historia:{
             signosVitales:[
                {   fecha:'2022/02/02',
                    hora:'15:00:00',
                    oximetria:'21',
                    respiracion:'23',
                    temperatura:'35',
                    precion:'80',
                    glicemia:'20'
                }
            ],
            diagnostico:[
                {
                    
                }
            ]
          },
          pacienteId:null,
          tab:null,
          currentTab: 'Pacientes',
          tabs: ['Pacientes']
        }
      },
      mounted:function(){
          this.pacienteId=this.$route.params.id
          document.addEventListener('click',e=>{console.log(e.target)})
          console.log()
        //         let URL=`https://falcon35.herokuapp.com/historia/${this.pacienteId}`;
        //         axios.get(URL).then((res)=>{
                   
        //             console.log(res)
        //         }).catch(error=>console.log(error))
      }
      
 }
</script>

<template>
    <Header /> 
       <h1>historia doctor</h1>
    <div class="container ">
        <br><br>
             <button type="button" @click="this.$router.push({name:'doctor'})" class="btn btn-success">Atras</button>
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Registrar
        </button>  
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
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='text-align:left'>
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="floatingTextarea2">Diagnostico:</label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            <br>
            <br>
            <label for="floatingTextarea2">Sugerencias:</label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            
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