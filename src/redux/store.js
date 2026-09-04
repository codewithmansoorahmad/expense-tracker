import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slice"
 const store=configureStore({
    reducer:{
        expenses:expenseReducer
    }
 })
 export default store