<template>
<div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Expense Manager App</a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <a class="navbar-brand"><router-link to='/Dashboard'>Dashboard</router-link></a>
        </li>
      </ul>

      <div class="topnav-right">
           <button class="btn btn-danger" @click.prevent="logout">Logout</button>
      </div>
    </div>
  </nav>

    <br>
    <center><h1>
     Name: {{ this.username }}<br>
     Email: {{User.email}}<br>
     firstname: {{User.first_name}}<br>
     lastname: {{User.last_name}}<br>
     datejoined: {{User.date_joined}}<br>
     </h1><br>
     <button @click="$router.push('Changepassword')" class="btn btn-primary"><b>Update Password</b></button><br><br>
     <button @click="$router.push('ForgotPassword')" class="btn btn-danger"><b>Reset Password</b></button>
         
</center>
</div>
</template>

<script>

import { getAPI } from '../axios-api'
export default {
    data(){
        return{
            User:{},
            username:null,
            
        }
    },

    methods:{
        logout(){
            getAPI.post('/api/logout/').then(() =>{
                this.$router.push({ name: "Login" })
            })
        }
    },

    mounted(){
        getAPI.get('/api/profile/').then((response) => {
            this.User = response.data
        })
        }

}

</script>