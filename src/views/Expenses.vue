<template>
  <form @submit.prevent="handlesubmit">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Expense Tracker App</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="navbar-brand"
              ><router-link to="/Dashboard">Home</router-link></a
            >
          </li>
        </ul>

        <div class="topnav-right">
          <button class="btn btn-danger" @click.prevent="logout">Logout</button>
        </div>
      </div>
    </nav>
    <center>
      <h4>Add your Expenses</h4>
      <div class="container">
        <div>
          <label for="expenseamount"><b>Expense Amount</b></label
          ><br />
          <input
            type="number"
            v-model="form.amount"
            name="amount"
            id="amount"
            required
          />
        </div>
        <br />
        <div>
          <label for="maincategory"><b>Main Category</b></label>
          <div style="margin: 10% 40%; width: 250px">
            <div id="dropdownlist_main_category">
              <ejs-dropdownlist
                v-model="form.main_category"
                name="main_category"
                class="ejs-dropdownlist"
                id="main_category"
                :dataSource="dataItem"
                :fields="dataFields"
                placeholder="Select expense"
                :change="onCategoryChange"
                ref="dropdownInstance"
              >
              </ejs-dropdownlist>
            </div>
          </div>
        </div>
        <br />
        <div>
          <label for="subCategory"><b>Sub Category</b></label
          ><br />
          <div style="margin: 10% 40%; width: 250px">
            <div id="dropdownlist_sub_category">
              <ejs-dropdownlist
                v-model="form.sub_category"
                name="sub_category"
                class="ejs-dropdownlist"
                id="sub_category"
                :dataSource="subdataItem"
                :fields="subdataFields"
                placeholder="Select subCategory"
                :enabled="enableDropdown"
                :query="childDataQuery"
              >
              </ejs-dropdownlist>
            </div>
          </div>
        </div>

        <br />
        <div>
          <label for="description"><b>Description</b></label
          ><br />
          <input
            type="text"
            v-model="form.description"
            name="description"
            id="description"
            required
          />
        </div>
        <br />
        <div>
          <label for="modeofpayment"><b>Mode of Payment</b></label
          ><br />
          <select
            v-model="form.mode_of_payment"
            class="select"
            name="mode_of_payment"
            id="mode_of_payment"
          >
            <option disabled value="">Please select one</option>
            <option>Cash</option>
            <option>NEFT/IMPS Transfer</option>
            <option>Debit Card</option>
            <option>Credit Card</option>
            <option>Cheque</option>
            <option>UPI</option>
          </select>
        </div>
        <br />
        <br />

        <div>
          <label for="date"><b>Date</b></label
          ><br />
          <datetime
            format="YYYY-MM-DD"
            width="300px"
            v-model="form.date"
            name="date"
            id="date"
          ></datetime>
        </div>
        <div>
          <label for="time"><b>Time</b></label
          ><br />
          <input
            type="time"
            v-model="form.time"
            name="time"
            id="time"
            class="clock"
            min="09:00"
            max="18:00"
            required
          />
        </div>

        <br />
        <br />

        <div>
          <button
            @click.prevent="submitExpense"
            type="submit"
            class="submit-btn"
          >
            Save Expense
          </button>
        </div>
      </div>
    </center>
  </form>
</template>

<script>
import datetime from "vuejs-datetimepicker";
import { getAPI } from "../axios-api";
import Vue from "vue";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { Query } from "@syncfusion/ej2-data";
//import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';

export default Vue.extend({
  components: { datetime },
  data() {
    return {
      enableDropdown: false,
      childDataQuery: null,
      dataItem: [
        { main_category: "Food", CategoryId: "1" },
        { main_category: "Fitness", CategoryId: "2" },
        { main_category: "Rent/Lease", CategoryId: "3" },
        { main_category: "Entertainment", CategoryId: "4" },
        { main_category: "Education", CategoryId: "5" },
        { main_category: "Medicine", CategoryId: "6" },
        { main_category: "Travel", CategoryId: "7" },
        { main_category: "Sports/Games", CategoryId: "8" },
        { main_category: "Bills", CategoryId: "9" },
      ],
      dataFields: { text: "main_category", value: "CategoryId" },

      subdataItem: [
        { sub_category: "Online Order", subCategoryId: "101", CategoryId: "1" },
        {
          sub_category: "Offline Order ",
          subCategoryId: "102",
          CategoryId: "1",
        },
        { sub_category: "Gym ", subCategoryId: "103", CategoryId: "2" },
        { sub_category: " Nutrition drinks ", subCategoryId: "104", CategoryId: "2" },
        { sub_category: "Rent", subCategoryId: "105", CategoryId: "3" },
        { sub_category: "Lease", subCategoryId: "106", CategoryId: "3" },
        { sub_category: "Movies", subCategoryId: "107", CategoryId: "4" },
         { sub_category: "Amusement parks", subCategoryId: "108", CategoryId: "4" },
        { sub_category: "Books", subCategoryId: "109", CategoryId: "5" },
        { sub_category: "Educational loans", subCategoryId: "110", CategoryId: "5" },
        { sub_category: " Doctor fees ", subCategoryId: "111", CategoryId: "6" },
        { sub_category: " Tablets ", subCategoryId: "112", CategoryId: "6" },
        { sub_category: " Bus fares", subCategoryId: "113", CategoryId: "7" },
        { sub_category: " Flight charges", subCategoryId: "114", CategoryId: "7" },
        { sub_category:  "Sports kits   ", subCategoryId: "115", CategoryId: "8" },
        { sub_category: " Nutrition drinks  ", subCategoryId: "116", CategoryId: "8" },
        { sub_category: "  mobile bill  ", subCategoryId: "117", CategoryId: "9" },
        { sub_category: "  Utility bills  ", subCategoryId: "118", CategoryId: "9" },
      ],
      subdataFields: { text: "sub_category", value: "subCategoryId" },

      form: {
        amount: "",
        main_category: "",
        sub_category: "",
        description: "",
        mode_of_payment: "",
        date: "",
        time: "",
      },
      errors: [],
    };
  },

  methods: {
    onCategoryChange: function (args) {
      this.enableDropdown = true;
      this.childDataQuery = new Query().where(
        "CategoryId",
        "equal",
        args.value
      );
    },

    submitExpense() {
      getAPI
        .post("/api/expenses/", this.form)
        .then(() => {
          this.$router.push({ name: "Dashboard" });
          console.log("expense added");
        })
        .catch((error) => {
          this.error = error.response.data.errors;
        });
    },

    logout() {
      getAPI.post("/api/logout/").then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
});
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
  padding-top: 10px;
  padding-bottom: 1px;
  background-color: white;
}

input[type="text"],
input[type="password"],
input[type="number"] {
  width: 50%;
  padding: 6px;
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

.select {
  width: 50%;
  padding: 8px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

.submit-btn {
  background-color: rgb(25, 207, 56);
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 25%;
  opacity: 0.9;
}

.clock {
  margin-left: 4px;
}
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>