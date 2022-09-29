<script >
    export default {
      name: '/',
      data: function(){
        return{
        //dejar en true para poder ver otras vistas o siempre retorna el login
          is_auth: true
        }
      },
      components: {

      },
      methods:{
        verifyAuth: function() {
          //trae datos de localstorage para identificar si esta logiado y redirecionar ala vista correspondiente
         // this.is_auth = localStorage.getItem("isAuth") || false;
            // if (this.is_auth == false)
            //    this.$router.push({ name: "login" });
            // else
            //     //verificar el rol del usuario para redirecionar a la vista correpondiente
            //     this.$router.push({ name: "" });
        },
      loadLogIn: function(){
           this.$router.push({name: "login"})
      },
    //ver guia 16 o 17 de material de apoyo
      completedLogIn: function(data) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("username", data.userId);
        localStorage.setItem("token_access", data.token_access);
        localStorage.setItem("token_refresh", data.token_refresh);

      },
     
      },
      created: function(){
        this.verifyAuth()
      }
}
</script>

<template>
  <div>
    <router-view/>
  </div>
    
   
</template>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}


</style>
