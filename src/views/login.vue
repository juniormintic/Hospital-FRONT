<script >
import axios from "axios";

export default{
    name:'login',
    components:{

    },
    data(){
      return{     
            cedula:'',
            password:'',
            error: false,
            error_msg:'',        
      }
    },
    methods:{
       login(){           
         if(this.validarCedula()==true){
          this.error = false;
          let json={
                "identificacion": this.cedula,
                "password": this.password
             
          };
          //traer datos y validar ususrio cedula y password 
          axios.get('https://falcon35.herokuapp.com/persona/')
          .then(res=>{console.log(res.status)
              if(res.status ===200){
                let lo=  res.data.find(item=>  item.password==this.password && item.identificacion==this.cedula)
                  console.log(lo)
                //ver guias de material de apoyo 15 16 par el manejo de login 
                  localStorage.setItem('cedula',lo.identificacion)
                  localStorage.setItem('rol',lo.rol)
              //   localStorage.getItem('isAuth', true)
              }

          }

          ).catch(error=>console.log(error))
         
          
         }  else{
          this.error = true;
          this.error_msg=this.validarCedula();
         }         
           
       },
       validarCedula(){
          if(!this.cedula || !this.password) return 'Por favor insertar  cedula y contraseña';
          if(!/[0-9]/.test(this.cedula)) return `El numero de documento ${this.cedula} no es valido`;
          if(this.cedula.length >=10)return  `El numero de documento es muy lago`;
            
           return true;
       }
    }


}


// let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
//  return (expReg)? console.info(`${email} es valido`):console.warn(`${email} NO es valido`)


</script>
<template>
  <section>
    <div class="alert alert-danger " role="alert" v-if="error">
       {{error_msg }} 
    </div>
    <form v-on:submit.prevent="login">
      
      <h4>Hospital en casa</h4>
      <br />
      <input type="text" v-model="cedula" placeholder="cedula" required />
      <br />
      <input
        type="password"
        v-model="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Iniciar Sesion</button>
    </form>
  </section>
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
.alert{
  position: absolute;
  top:10px;
  width: 100%;;
  text-align: center;
}
section {
  background-color: lightgray;
  font-family: sans-serif;
  padding-top: 200px;
  height: 100vh;
  width: 100%;
}

form {
  padding: 40px;
  /* position: absolute; */
  background-color: rgb(254, 255, 255);
  border: 5px solid lightskyblue;
  border-radius: 10%;
  margin-left: auto;
  margin-right: auto;

 min-height: 330px;
  width: 300px;
}
form > h4 {
  text-align: center;
}
form * {
  display: block;
  margin: 10px;
}

form input {
  border: none;
  border-bottom: 5px solid lightskyblue;
}
form input:focus {
  outline: none;
}

form button {
  font-size: 18px;
  display: block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  border: none;
}

/*     
    @media (min-width: 1024px) {
      header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
      }
    
      .logo {
        margin: 0 2rem 0 0;
      }
    
      header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }
    
      nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;
    
        padding: 1rem 0;
        margin-top: 1rem;
      }
    } */
</style>
