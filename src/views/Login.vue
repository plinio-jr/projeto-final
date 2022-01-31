<template>
  <v-container fill-height fluid text-center>
      <v-container>
          <v-row>
              <v-col class="success--text text-center mx-auto pb-4" cols="3" sm="3" offset="5">
                  <h1 class="h1">Login</h1>
              </v-col>
          </v-row>
          <v-row class="elevation-6 mx-auto">
              <v-col cols="auto">
                  <v-img max-height="200" max-widht="250" src="@/assets/images/loginlogo.png"></v-img>
              </v-col>
              <v-col>
                  <v-form>
                      <v-text-field label="Email" v-model="user.email"></v-text-field>
                        <v-text-field label="Senha" v-model="user.password" :type="show ? 'text' : 'password' " :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show">

                        </v-text-field>
                        <v-btn color="secondary" @click="login">Login</v-btn>
                        <v-btn class="ml-5" color="warning" @click="reset">Cancelar</v-btn>
                  </v-form>
              </v-col>
          </v-row>
      </v-container>
      <v-snackbar color="red" v-model="errorLogin" danger multiline timeout="1000">
          Usuario ou senha esta invalido
    </v-snackbar>
    <v-dialog v-model="novaConta" persistent max-width="300">
        <v-card>
            <v-card-title> conta não encontrada.</v-card-title>
            <v-card-text>
                A conta não foi localizada. Deseja criar uma nova Conta com os dados informados?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="criarNovaConta">Sim</v-btn>
                <v-btn color="red darken-1" text @click="novaConta= false">Não</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>

  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase'
export default {
    data(){
        return{
            user:{},
            show: false,
            errorLogin: false,
            novaConta: false,
        };
    },
    methods: {
        reset() {
            this.user = {};
        },
        async login(){
           try {
               await fb.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
               this.$router.push({ name: 'Home'})
           } catch(error) {
               const errorCode =error.code
               switch(errorCode) {
                   case "auth/wrong-password":
                       this.errorLogin = true
                       break
                       case "auth/invalid-email":
                           this.errorLogin = true
                           break
                        case "auth/user-not-found":
                            this.novaConta = true
                            break
                        default:
                            this.errorLogin = true
                            break

               }
           }
        },
       async criarNovaConta() {
            this.novaConta = false
            await fb.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
            console.log("todo");
        }
    },
};
</script>

<style>

</style>