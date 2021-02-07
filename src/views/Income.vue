 <template>

 <form @submit.prevent="handlesubmit">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Expense Manager App</a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <a class="navbar-brand"><router-link to='/'>Home</router-link></a>
        </li>
      </ul>

      <div class="topnav-right">
           <button class="btn btn-danger" @click.prevent="logout">Logout</button>
      </div>
    </div>
  </nav>
 <center>

 <div class="container">
     <div>
       <label for="amount"><b>Monthly Income</b></label><br>
        <input type="number" v-model="form.amount" name="amount" id="amount"  required> 
      </div>
      <br>
      <div>
      <label for="source_of_income"><b>Source of Income</b></label><br>
        <input type="text" v-model="form.source_of_income" name="source_of_income" id="source_of_income" required> 
      </div>
      <br>
      <div>
       <label for="description"><b>Description</b></label><br>
        <input type="text" v-model="form.description" name="description" id="description"  required> 
      </div>
      <div>
       <label for="recieved_source"><b>recieved_source</b></label><br>
        <input type="text" v-model="form.received_source" name="recieved_source" id="recieved_source"  required> 
      </div>
      
      <br>

     <div>
      <label for="date"><b>Date</b></label><br>
    <datetime format="YYYY-MM-DD" width="300px"  v-model="form.date" name="date" id="date"></datetime>
     </div>
     <div>
       <label for="time"><b>Time</b></label><br>
       <input type="time"  v-model="form.time" name="time" id="time" class="clock"
       min="09:00" max="18:00" required>
     </div>

<br>
       
      <br>

      <div>
  <button @click.prevent="submitIncome" type="submit" class="submit-btn">Save Income</button>
      </div>
    </div>
 </center></form>

</template>

<script>
import datetime from 'vuejs-datetimepicker'
import { getAPI } from '../axios-api';
export default {
    components: { datetime },
  data(){
    return{
       form:{
         //user_id:'{{ user.id }}',
         amount: '',
         source_of_income: '',
         description: '',
         received_source:'',
         date:'',
         time:''
       },
       errors:[]
    }
  },

    methods:{

      submitIncome(){
        getAPI.post('api/income/', this.form).then(() => {
          this.$router.push({ name:"Dashboard" });
          console.log('income added');
        }).catch((error) => {
          this.error = error.response.data.errors;
        })

      },
        logout(){
            getAPI.post('/api/logout').then(() =>{
                this.$router.push({ name: "Home" })
            })
        }
    }
     
}
</script>

<style scoped>
body{
font-family: Arial, Helvetica, sans-serif;
  background-color: white;
}

* {
  box-sizing: border-box;
}


.container {
  padding: 168px;
  padding-top: 10px;
  padding-bottom: 1px;
  background-color: white;
}


input[type=text], input[type=password], input[type=number] {
  width: 50%;
  padding: 6px;
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

.select{
  width: 50%;
  padding: 8px;
  display: inline-block;
  border: none;
  background: #f1f1f1;

}

.submit-btn{
  background-color: rgb(25, 207, 56);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 25%;
  opacity: 0.9;
}

.clock{
  margin-left: -81px;
}




</style>