<script setup>
    async function listar(){
    let ListPaciente=null;
       await fetch('https://falcon35.herokuapp.com/pacientes')
       .then((result)=> result.json)
       .then((json)=> {
            ListPaciente= json; 
            console.log(json)})
       .catch((err)=>{console.log(err)})
    }
 
</script>

<template>
    
    <div class="container ">
        <br>
        <header><h2>Lista Pacientes</h2></header>    
        <br><br>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Registar</button>
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
            </tr>
        </thead>
        <tbody>
            <tr v-for="paciente in ListPaciente" :key="cedula">
                <th scope="row">{{paciente.cedula}}</th>
                <td>{{paciente.nombre}}</td>
                <td>{{paciente.apellido}}</td>
                <td>{{paciente.telefono}}</td>
                <td>{{paciente.apellido}}</td>
                <td>{{paciente.telefono}}</td>
                <td>{{paciente.email}}</td>
            </tr>            
          
        </tbody>
    </table>
</div>
</template>