<script >
import { ref } from 'vue';


    export default{
        data(){
            return{
                currentTab:ref('Pacientes')
            }
        },      
        props:{ 
           tabs: null

        },
      
        methods:{
            enviarData(data){
             
                this.$emit('recibir',data)
            }
        }
    }

    
  
    
</script>
    
    <template>
    <header>
        <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Falcon</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <nav class="nav nav-masthead nav-center ">
                    <a class="nav-link fw-bold py-1 px-0"
                        v-for="tab in tabs"
                        :key="tab"
                        :class="['tab-button', { active: currentTab === tab }]"
                        @click="currentTab = tab,enviarData(tab)"
                        >
                        {{ tab }}
                    </a>                
                </nav>
            
            <div class="d-flex options-session" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                <button class="tab-button">Cerrar sesion</button>             
                </li>
            </ul>
            </div>
            
            </div>
        </div>
        </nav>
    </header>
      
    </template>

    <style >
      
        .nav-center{
          margin-left: auto;
          margin-right: auto;
        }
        .tab-button {
        padding: 10px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;       
        cursor: pointer;
        color: #e0e0e0;
        background: #0d6efd; 
        margin-bottom: -1px;
        margin-right: -1px;
        }
        
        .tab-button.active {
            border-bottom-color: #fff;
            color: #fff;
        }
        .tab {
        border: 1px solid #ccc;
        padding: 10px;
        }
    </style>