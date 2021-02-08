<template>
  <div>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
 <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <a class="navbar-brand" href="">Expense Manager App</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <a class="navbar-brand"><router-link to='/Dashboard'></router-link></a>
        </li>
      </ul>
      <div class="topnav-right">
          <h3><b>Welcome {{user.Username}}.</b></h3>
          
   
      </div>
    </div>
  </nav><br>
<!-- SIDEBAR -->
      <b-button v-b-toggle.sidebar-variant>Click Here</b-button><br>
   
   
<center>
     <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>

  <div class="w3-row-padding w3-margin-bottom" style="margin-left:370px">
    
    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
       
        <div class="w3-clear"></div>
             <h4><td>Your Budget Allocation</td>
             <br>
             <td>Rs. {{addIncome}}</td></h4>
 
      </div>
    </div>
 <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
    
        <div class="w3-clear"></div>
        
             <h4><td>Your Expenses</td>
             <br> 
             <td>Rs. {{addExpense}} </td></h4>
      
       
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">

        <div class="w3-clear"></div>
       <h4><td>Your Balance</td>
       <br>
       <td>Rs. {{addIncome - addExpense}}</td></h4>
      </div>
    </div>
  </div>
 
 
</center>

    <b-sidebar id="sidebar-variant" bg-variant="info"  text-variant="light" shadow>
                  <h2> Welcome {{user.username}} ,</h2>
    <div class="px-3 py-2">
        <p>
        
        </p>
        <nav class="mb-3">
            <b-nav vertical> <br><br>
             <h5><router-link  to='/Profile' style="color:white"><b>My Account</b></router-link></h5><hr>
             <h5><router-link  to='/Income' style="color:white"><b>+ Add Your Income</b></router-link></h5><hr>
             <h5><router-link  to='/Expenses' style="color:white"><b>+ Add Your Expense</b></router-link></h5><hr>
             <h5><router-link  to='/Daybook' style="color:white"><b>View Your Daybook</b></router-link></h5><hr>
            
            </b-nav>
        </nav>
        
    </div>
    </b-sidebar>
  </div>
  
</template>
<script>
import { getAPI } from '../axios-api';
export default {
    data(){
        return{
            user: {},
            Expense:{},
            Income:{},
            addIncome:{},
            addExpense:{}
        }
    },
    methods:{
   
   loadUsers(){
     getAPI.get("api/expenses/").then(({ data }) => (this.expenses = data));
   },
  loadIncome()
        {
          getAPI.get("api/income/").then(({  data }) => (this.incomes = data));
        },


        Expenses(){
            getAPI.post('/api/expenses/').then(() => {
                this.$router.push({ name: "Expenses" })
            })
        },

         income(){
          getAPI.post('/api/income/').then(() => {
            this.router.push({ name: "Login" })
          })
        },

     
        
        
    },

 created()
   {
     this.loadUsers();
      this.loadIncome();
   },

    mounted(){
        getAPI.get('/api/profile/').then((response) => {
            this.user = response.data;
        }),
         getAPI.get('/api/expenses/total_expenses/').then((response) => {
           this.addExpense = response.data;
         }),
         getAPI.get('/api/income/total_income/').then((response) => {
           this.addIncome = response.data;
         })
    }
}
</script>

<style scoped>


</style>