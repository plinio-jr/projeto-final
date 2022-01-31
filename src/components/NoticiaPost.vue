<template>
  <div>
    <h2 v-if="post.welcomeScreen">{{post.titulo}}</h2>
    <h2 v-else>{{post.titulo}}</h2>
    <p v-if="post.welcomeScreen">{{post.NoticiaPost}}</p>
    <p class="content-preview" v-else>{{post.Sitel.html}}</p>
    <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
        Login/Cadastrar<Arrow class="arrow arrow-light"/>
    </router-link>
     <router-link class="link link-light" v-else to="#">
        Ver noticia<Arrow class="arrow"/>
    </router-link>
  </div>
</template>

<script>
export default {
name:"NoticiaPost",
props: ["post"],
}
</script>

<style scoped>
    
</style>