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
    <!-- PERFIL-->
    <div class="container">
        <br>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<!------ Include the above in your HEAD tag ---------->

<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
	<div class="row">
		<div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div class="well profile">
            <div class="col-sm-12">
                <div class="col-xs-12 col-sm-8">
                    <h2>Nombre Usuario</h2>
                    <p><strong>identificacion: </strong> traer de la data </p>
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

            </div>            
    	 </div>                 
		</div>
	</div>
</div>
</div>
<!--TABLAS-->

    
   
</template>
<style>
    @import url(http://fonts.googleapis.com/css?family=Lato:400,700);
body
{
    font-family: 'Lato', 'sans-serif';
    }
.profile 
{
    min-height: 355px;
    display: inline-block;
    }
figcaption.ratings
{
    margin-top:20px;
    }
figcaption.ratings a
{
    color:#f1c40f;
    font-size:11px;
    }
figcaption.ratings a:hover
{
    color:#f39c12;
    text-decoration:none;
    }
.divider 
{
    border-top:1px solid rgba(0,0,0,0.1);
    }
.emphasis 
{
    border-top: 4px solid transparent;
    }
.emphasis:hover 
{
    border-top: 4px solid #1abc9c;
    }
.emphasis h2
{
    margin-bottom:0;
    }
span.tags 
{
    background: #1abc9c;
    border-radius: 2px;
    color: #f5f5f5;
    font-weight: bold;
    padding: 2px 4px;
    }
.dropdown-menu 
{
    background-color: #34495e;    
    box-shadow: none;
    -webkit-box-shadow: none;
    width: 250px;
    margin-left: -125px;
    left: 50%;
    }
.dropdown-menu .divider 
{
    background:none;    
    }
.dropdown-menu>li>a
{
    color:#f5f5f5;
    }
.dropup .dropdown-menu 
{
    margin-bottom:10px;
    }
.dropup .dropdown-menu:before 
{
    content: "";
    border-top: 10px solid #34495e;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
    }
</style>