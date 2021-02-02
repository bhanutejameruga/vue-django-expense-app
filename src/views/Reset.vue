<template>
    <div>
        <div class="container text-dark">
          <div class="row justify-content-md-center">
            <div class="col-md-5 p-3 login justify-content-md-center">
              <h1 class="h3 mb-3 font-weight-normal text-center">Reset password</h1>
              <form @submit.prevent="handleSubmit">
                     
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="password"/>
              </div>  
              
              
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password_confirm" placeholder="password"/>
              </div>  
              <button class="btn btn-primary btn-block">submit</button>
              </form>
            </div>
          </div>
        </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: "Reset",
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    Reset() {
      this.$store
        .dispatch("Reset", {
          password: this.password,
          password_confirm: this.password_confirm,
        })
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((err) => { 
          console.log(err);
        });
    },
  },
};
//export default {
  //name: "Reset",
  //data(){
      //return{
          //password:'',
          //password_confirm:'',
      //}
 // },
  //methods:{
    //  async handleSubmit(){

      //    const response = await axios.post('Reset',{
        //      password:this.password,
          //    password_confirm:this.password_confirm,
            //  token:this.$route.params.token
         // });
          //console.log(response);
         // this.$router.push('/login');

     // }
 // }

              // }
</script>

<style scoped>
.ForgotPassword {
  background-color: rgb(10, 0, 0);
  margin-top: 10%;
}
input {
  padding: 25px 10px;
}
</style>