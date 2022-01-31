<template>
  <v-container class="pa-10" fluid>
    <h1 class="h1"> Meu Usuario</h1>
    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"></v-text-field>
         <v-text-field label="Sobrenome" v-model="sobrenome"></v-text-field>
          <v-text-field label="Idade" v-model="idade"></v-text-field>
          <v-text-field label="Estado" v-model="estado"></v-text-field>
          <v-text-field label="Cidade" v-model="cidade"></v-text-field>


         <v-btn color="success" @click="salvarPerfil">Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
  data(){
    return{
      nome:"",
      sobrenome:"",
      idade:"",
      estado:"",
      cidade:"",
      uid:'',
      temPerfil: false
};
  },
  async mouted(){
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection.where("uid", "==", this.uid).get();
    if (userProfile.docs.length > 0){
      this.temPerfil = true
      const perfil = userProfile.docs[0]
      this.profileId = perfil.id
      this.nome = perfil.data().nome;
      this.sobrenome = perfil.data().sobrenome;
      this.idade = perfil.data().idade;
      this.cidade = perfil.data().cidade;
      this.estado = perfil.data().estado;
    }
  },
  methods:{
    async salvarPerfil(){
      if (this.temPerfil){
       await fb.profileCollection.doc(this.profileId).update({
         nome: this.nome,
         sobrenome: this.sobrenome,
         idade: this.idade,
         estado: this.estado,
         cidade: this.cidade,
       });
      } else {
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          sobrenome: this.sobrenome,
          idade: this.idade,
          cidade: this.cidade,
          estado: this.estado,
        });
      }
    }
  }
};
</script>

<style>

</style>