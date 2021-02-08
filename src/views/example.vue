 <template>
<div>
        <div class="container" style="height: 650px;text-align: center;">
 <br>
          <h4>YOUR PROFILE</h4>
          <br>
      <center> 

      
           <tr>
              <th>Name </th>
              <th>Email</th>
              <th>first_name</th>
              <th>lastname</th>
              <th>datejoined</th>
           </tr>

            <tr v-for="User in Users" :key="User.id">
              <td>{{User.username}}</td>
              <td>{{User.email}}</td>
              <td>{{User.first_name}}</td>
              <td>{{User.last_name}}</td>
              <td>{{User.date_joined}}</td>
             
            </tr>
          <br>
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
           Users: '',
        }
    },

    methods:{
        loadUser()
        {
          getAPI.get("api/profile/").then(({  data }) => (this.Users = data));
        }
        
    },

    created(){
      this.loadUser();
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