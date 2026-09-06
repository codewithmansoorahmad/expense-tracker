import { createSlice } from "@reduxjs/toolkit";

const ExpenseSLice=createSlice({
    name:"expense",
    initialState:{
        expensesItems:JSON.parse(localStorage.getItem("cart"))||[],

    },
    reducers:{
        addExpenses:(state,action)=>{
            const id=crypto.randomUUID()
            
            console.log(id)
            const time=new Date().toLocaleTimeString("en-us",{
                minute:"2-digit",
                hour:"2-digit"
            })

            const newObj={...action.payload,id,time}

            state.expensesItems.push(newObj)
            localStorage.setItem("cart",JSON.stringify(state.expensesItems))


        },
        deleteExpense:(state,action)=>{
            let isConfirm=confirm("are you sure to delete "+action.payload.name +" expense")
            if(isConfirm){
            state.expensesItems=state.expensesItems.filter((item)=>action.payload.id!==item.id)
            localStorage.setItem("cart",JSON.stringify(state.expensesItems))
            }
            return


        },
        editExpense:(state,action)=>{
            let id =action.payload.id
            const index=state.expensesItems.findIndex((item)=>item.id===id);
           
              const time=new Date().toLocaleTimeString("en-us",{
                minute:"2-digit",
                hour:"2-digit"
            })

            if(index!=-1){
                state.expensesItems[index]={...action.payload.obj,id,time}
            localStorage.setItem("cart",JSON.stringify(state.expensesItems))
            }

           
            
            

            
        }
    }
})
export default ExpenseSLice.reducer
export const {addExpenses,deleteExpense,editExpense}=ExpenseSLice.actions