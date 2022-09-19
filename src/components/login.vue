<script >
   // import { RouterLink, RouterView } from "vue-router";
    //import HelloWorld from './components/HelloWorld.vue'
    
    import axios from "axios";
    export default {
      name: "LogIn",
      data: function () {
        return {
          user: {
            cedula: "",
            password: "",
          },
        };
      },
      methods: {
        processLogInUser: function () {
          console.log(this.user);
          axios.post("serializador", this.user, {
              headers: {},
            })
            .then((result) => {
              let dataLogIn = {
                username: this.user.cedula,
                token_access: result.data.access,
                token_refresh: result.data.refresh,
              };
    
    
              this.$emit("completedLogIn", dataLogIn);
            })
            .catch((error) => {
              if (error.response.status == "401")
                alert("ERROR 401: Credenciales Incorrectas.");
            });
        },
      },
    };
    </script>
    
    <template>
      <section>
        <form v-on:submit.prevent="processLogInUser">
          <h4>Hospital en casa</h4>
          <br />
          <input type="text" v-model="user.cedula" placeholder="cedula" required />
          <br />
          <input type="password" v-model="user.password" placeholder="Contraseña"  required />
          <button type="submit" >Iniciar Sesion</button>
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
    
      height: 330px;
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
      padding: 20px ;
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
    