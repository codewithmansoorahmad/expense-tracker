import { addExpenses, editExpense } from "../redux/slice"
import store from "../redux/store"
export function handleInput(e,func){
    func(e.target.value)
   if(e.target.value.trim()===""){
      e.target.setCustomValidity("Please enter a expense name.")
        e.target.reportValidity()
        return
    
   }
      e.target.setCustomValidity("")


    
}
export function handleSubmit(event,navigate){
    event.preventDefault()
    const formData=new FormData(event.target)
    const obj=Object.fromEntries(formData)
    store.dispatch(addExpenses(obj))
    alert("expense added successfully")
    navigate("/today-summary")

    
}


export function handleUpdateSubmit(id,navigate,event){
    event.preventDefault()
    const formData=new FormData(event.target)

    const obj=Object.fromEntries(formData)
    store.dispatch(editExpense({obj,id}))
     alert("expense updated successfully successfully")
    navigate("/today-summary")
}
export function handleKey(e,name){
    // if(!e.target.checkValidity())return;
    if(e.key==="Enter"&&e.target.id==="select"){
        e.preventDefault()
        name.current.click()
return
    }
    if(e.key==="Enter"&&e.target.checkValidity()){
        
        e.preventDefault()
name.current.focus()

    }
}