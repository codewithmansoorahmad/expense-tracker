import { createSlice } from "@reduxjs/toolkit";

const ExpenseSLice=createSlice({
    name:"expense",
    initialState:{
        expensesItems:[]
    },
    reducers:{
        addExpenses:(state,action)=>{
            const id=crypto.randomUUID()
            console.log(id)
            const newObj={...action.payload,id}

            state.expensesItems.push(newObj)

        }
    }
})
export default ExpenseSLice.reducer
export const {addExpenses}=ExpenseSLice.actions