<script>
    import Header from '../components/Header.vue';
    import Pacientes from '../components/EnfermeraListPacientes.vue';
   

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
    //    item(data){
    //         this.currentTab=data;
    //    }
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