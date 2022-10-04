<script>
    import Header from '../components/Header.vue';
    export default {
        components: {
            Header,
                    
        },
  data() {
    return {
      tab:null,
      currentTab: 'Perfil',
      tabs: ['Perfil']
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
            <!-- AQUI VA LA VISTA DE PACIENTE -->
    
          
        </main>
</template>

<style>

</style>

