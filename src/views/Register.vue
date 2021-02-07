<template>
  <form @submit.prevent="handlesubmit">
    <!-- @submit.prevent is used to prevent default behaviour -->
    <div>
      <nav class="navbar navbar-expand-lg navbar-blue bg-blue">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="navbar-brand"><router-link to="/">Home</router-link></a>
            </li>
          </ul>

          <div class="topnav-right">
            <a class="navbar-brand"
              ><router-link to="/">Login</router-link></a
            >
          </div>
        </div>
      </nav>
    </div>
    >
    <div>
      <div class="container text-dark">
        <div class="row justify-content-md-center">
          <div class="col-md-5 p-3 login justify-content-md-left">
            <h1 class="h3 mb-5 font-weight-normal text-center">
              please enter your details
            </h1>

            <span class="" v-if="errors.name">{{ errors.name[0] }}</span>
            <input
              type="text"
              placeholder="UserName"
              v-model="form.username"
              required
            />

            <span class="" v-if="errors.email">{{ errors.email[0] }}</span
            ><br />
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              v-model="form.email"
              id="email"
              required
            />

            <span class="" v-if="errors.password">{{ errors.password[0] }}</span
            ><br />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              v-model="form.password"
              id="password"
              required
            />
            <span class="" v-if="errors.name">{{ errors.name[0] }}</span>
            <input
              type="text"
              placeholder="FirstName"
              v-model="form.first_name"
              required
            />
             <span class="" v-if="errors.name">{{ errors.name[0] }}</span>
            <input
              type="text"
              placeholder="LastName"
              v-model="form.last_name"
              required
            />

            
            <button @click.prevent="saveForm" type="submit" class="registerbtn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
    data(){
        return{
            form:{
              username: '',
              email: '',
              password: '',
              first_name:'',
              last_name:''

            },
            errors: []
        }
    },
    methods:{
          saveForm(){
            getAPI.post('/api/register/',
            
            this.form).then(() => {
                 this.$router.push({ name: "Login" })
                 console.log('Saved');
            }).catch((error) => {
              this.errors = error.response.data.errors;
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
  background-color: rgb(70, 90, 15);
}

input[type="text"],
input[type="password"],
input[type="number"] {
  width: 75%;
  padding: 12px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: rgb(93, 93, 214);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

a {
  color: black;
}
</style>