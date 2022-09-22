<script setup>
    import { ref } from 'vue'
   const props= defineProps({
        tabs: {
            type: Object,
            required: true
        },
        
    });
    defineEmits(['tabla'])
    console.log(props.tabs.Pacientes)
    
    const currentTab = ref('Pasientes');
     
    
  
    
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item"
                v-for="(_, tab) in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab,$emit('tabla', $event.target.value)">
                    <a class="nav-link " > {{ tab }}</a>
            </li>
              
            </ul>
            <div class="d-flex options-session" >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                <li class="nav-item"><a class="nav-link " href="#">Cerrar sesion</a></li>
             
                </li>
            </ul>
            </div>
            
            </div>
        </div>
        </nav>
    </header>
        <!-- <main>
            carga el componente de tablas segun el click del menu 
                <component :is="tabs[currentTab]" class="tab"></component>
            
            
        </main>
     -->
        
    
    </template>