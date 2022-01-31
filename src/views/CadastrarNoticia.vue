<template>

  <div class="createPost">
    <div class="cpContainer">
      <center><h1> Cadastrar Noticias</h1> </center>
      <hr>
      <br>
      
      <div class="inputGp">
        <label> titulo - </label>
        <input placeholder="inserir titulo"/>
      </div>
      <br>
      <div class="inputGroup">
        <label>materia -</label>
        <textarea placeholder="inserir conteudo"/>
      </div>
      <br>
      <v-btn id="botao" color="brown" @click="cadastrar"> Cadastrar</v-btn>
    </div>
  </div>
</template>

<script>
export default{
 async data(){

  }
}


</script>

<style>
.createPost{
  width: 60%;
  margin-left: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  grid-auto-columns: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
};
.botao{
  display: flexbox;
  width: 30px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  background-color: grid-row;
}
</style>