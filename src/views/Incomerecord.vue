<template>
<div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <div class="container" style="height: 650px;text-align: center;">
 <br>
          <h4>These are your Income Records {{user.name}}</h4>
          <br>
      <center> 
        <h2><router-link to='/income' tag="button" class="btn btn-primary"><b>+ ADD</b></router-link></h2>
      <table border="1" class="pure-table pure-table-bordered">
      
        <tr>
              <th>Your id </th>
              <th>Income</th>
              <th>Source of Income</th>
              <th>Description</th>
              <th>Recieved Source</th>
              <th>Date</th>
              <th>Time</th>
            </tr>

            <tr v-for="income in incomes" :key="income.id">
              <td>{{income.id}}</td>
              <td>{{income.amount}}</td>
              <td>{{income.source_of_income}}</td>
              <td>{{income.description}}</td>
              <td>{{income.received_source}}</td>
              <td>{{income.date}}</td>
              <td>{{income.time}}</td>
            </tr>
          </table><br>
              <h2><router-link to='/Dashboard' tag="button" class="btn btn-info"><b>Go Back to Dashboard</b></router-link></h2>
              <center><b>or</b></center>
              <router-link to="/Daybook">Take a look at your Expense Records</router-link>
      </center><br><br>
     
<br><br>
    
     
     
   </div>
    </div>
    
</template>

<script>
import { getAPI } from '../axios-api';
export default {
    data(){
        return{
           user: {},
           incomes:{}
        }
    },

    methods:{
        loadIncome()
        {
          getAPI.get("api/income/").then(({  data }) => (this.incomes = data));
        },
        income(){
          getAPI.post('/api/income/').then(() => {
            this.router.push({ name: "Incomerecord" })
          })
        }
    },

    created(){
      this.loadIncome();
    },

    mounted(){
      getAPI.get('api/profile/').then((response) => {
        this.user = response.data
      })
    }
  
}
</script>

<style scoped>

</style>