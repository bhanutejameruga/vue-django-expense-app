<template>

  <div class="container">
    <center><h1>Change Password</h1>
    <br><br>
      <label for="psw"><b>Old Password</b></label><br>
       <span class="" v-if="errors.password">{{errors.password[0]}}</span><br>
      <input type="password" placeholder="Enter Your Old Password" name="old_password" v-model="form.old_password" id="password" required><br>

      <label for="psw"><b>New Password</b></label><br>
      <span class="" v-if="errors.new_password">{{errors.new_password[0]}}</span><br>
      <input type="password" placeholder="Enter New Password" name="new_password" v-model="form.new_password" id="new_password" required><br>

     
    <hr>
      <button @click.prevent="updateUser" type="submit" class="update-btn">Update</button></center>
      <center>or  <br>
    <a class="navbar-brand"><router-link to='/'> Return Home</router-link></a></center>
    </div>

</template>

<script>
import { getAPI } from '../axios-api'
export default {
    data(){
        return{
            form:{
              old_password: '',
              new_password:'',

            },
            errors: []
        }
    },
    methods:{

          updateUser(){
            getAPI.put('/api/change-password/', this.form).then(() => {
                 this.$router.push({ name: "Login" })
                 console.log('Changed');
            }).catch((error) => {
              this.errors = error.response.data.errors;
            })
          },

           mounted(){
        getAPI.get('/api/profile/').then((response) => {
            this.user = response.data
        })
           }
    }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
}

* {
  box-sizing: border-box;
}


.container {
  padding: 168px;
  padding-top: 15px;
  padding-bottom: 1px;
  background-color: white;
}


input[type=text], input[type=password], input[type=number] {
  width: 50%;
  padding: 12px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}


a {
  color: black;
}

.update-btn{
  background-color: rgb(25, 207, 56);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

</style>