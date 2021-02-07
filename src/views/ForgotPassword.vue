<template>
<div>
<div class="container text-dark">
      <div class="row justify-content-md-center">
        <div class="col-md-5 p-3 login justify-content-md-center">
          <h1 class="h3 mb-3 font-weight-normal text-center">Please enter your E mail ID</h1>
           <p v-if="incorrectAuth">
            user not registered.check email id and try again
          </p>

  <form @handle.prevent="handleSubmit">
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        v-model="form.email"
        placeholder="emailid"
      >
    </div>

    <button @click.prevent="submitEmail" type="submit" class="submit-btn " >submit</button>
     </form>
        </div>
      </div>
</div>
</div>
</template>
<script>
import { getAPI } from '../axios-api';
export default {
  name: "ForgotPassword",
  data() {
    return {
      form:{
      email: "",
      },
      errors :[],
      incorrectAuth:false,
    };
  },
  methods: {
    submitEmail() {
      getAPI.post('api/password_reset/',this.form
        ).then(() => {
          this.$router.push({ name:"Login" });
        })
        
        .catch((err) => { 
          console.log(err);
          this.incorrectAuth = true;
        });
    },
  },
};

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