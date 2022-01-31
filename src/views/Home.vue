<template>
 <v-container>
   <h1> <center> Noticias Ypê </center> </h1>
   <hr>
   <br>
   <div class="container">
      <v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>Recentes</span>
      
      
      
      <v-icon>mdi-history</v-icon>
    </v-btn>

  </v-bottom-navigation>
   </div>
   
   <div class="template"> 

  <center>
    <h3>Em semana histórica para os direitos indígenas, protestos em todo o mundo pedem #MarcoTemporalNão</h3>
  </center>
    <br>
  <p>Desde o domingo, indígenas de todo o Brasil estão acampados em Brasília se mobilizando contra o marco temporal, o Projeto de Lei 490, conhecido como “PL da Morte”, e uma série de outros planos e ações genocidas do governo Bolsonaro.</p>
    <br>
    <h6>Publicado dia 28 de Janeiro 2022</h6>
   </div>
     <meet-up /> 
     <div class="templates"> 

  <center>
    <h3>Bolsonaro finalmente olha para os indígenas na pandemia</h3>
  </center>
    <br>
  <p>Mais de dois anos do início da pandemia de Covid-19 no país e depois de cerca de 620 mil mortes de brasileiros, o governo de Jair Bolsonaro se deu conta de que os povos indígenas precisam de uma atenção.</p>
    <br>
    <center><h6>Publicado dia 27 de Janeiro 2022</h6></center>
   
   </div>
     <meet-up /> 
   <v-footer app> <span> Fique por dentro de tudo que esta acontecendo!</span>
     
   </v-footer>

 
  <noticia-post/>
      
     
      </v-container>
</template>
    


<script>
import MeetUp from '../components/MeetUp.vue'
import NoticiaPost from '../components/NoticiaPost.vue'
export default{
  components: { NoticiaPost, MeetUp},
  data(){
    return{
      MeetUp:[
        {imageUrl:'https://ciclovivo.com.br/wp-content/uploads/2020/08/indigenas-Marcelo-Camargoa-Age%CC%82ncia-Brasil.png', title:'noticia 1'},
      ]
    }
  }

}
</script>

<style>
.template{
  text-align: center;
  border: grey;

}



</style>
