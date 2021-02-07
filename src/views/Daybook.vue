  <template>
  <div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.1/build/pure-min.css" integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47" crossorigin="anonymous">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <div class="container" style="height: 650px;text-align: center;">
 <br>
          <h4>These are your Spendings {{user.name}}</h4>
          <br>
      <center> 
        <h2><router-link to='/Expenses' tag="button" class="btn btn-primary"><b>+ ADD</b></router-link></h2>
      <table border="1" class="pure-table pure-table-bordered">
      
        <tr>
              <th>Your id </th>
              <th>Main Category</th>
              <th>Sub Category</th>
              <th>Expense Amount</th>
              <th>Description</th>
              <th>Mode of Payment</th>
              
              <th>Date and Time</th>
              
            </tr>
    
         <tr v-for="expense in expenses" :key="expense.id">
          <td>{{expense.id}}</td>
          <td>{{expense.main_category}}</td>
          <td>{{expense.sub_category}}</td>
          <td>{{expense.amount}}</td>
          <td>{{expense.description}}</td>
          <td>{{expense.mode_of_payment}}</td>
          <td>{{expense.date}} <br>{{expense.time}}  </td>
         
         
           </tr>
       
         
          </table><br>
           
                

              <h2><router-link to='/Dashboard' tag="button" class="btn btn-info"><b>Go Back to Dashboard</b></router-link></h2>
              <center><b>or</b></center>
              <router-link to="/Incomerecord">Take a look at your Income Records</router-link>
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
           expenses: {},
           user: {},
           //addexpense:null,
         
    }
  },
    methods:{
 


      loadUsers(){
          getAPI.get("api/expenses/").then(({ data }) => (this.expenses = data));
      },

//for adding expense from daybook

        expense(){
            getAPI.post('/api/expenses/').then(() => {
                this.$router.push({ name: "daybook" })
            })
        }

    },

    created(){
         this.loadUsers();
    },

  mounted(){
        getAPI.get('/api/Profile').then((response) => {
            this.user = response.data
        })
        
    }
    
}
</script>

<style scoped>

</style>