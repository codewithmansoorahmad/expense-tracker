
export function handleInput(e,func){
   
    if(!e.target.value.checkValidity()){
        e.target.reportValidity()

        return
    }
    func(e.target.value)
    
    
}
export function handleSubmit(event,name,price,date,category){
    event.preventDefault()
   
    const formData={
        name,
        price,
        date,
        category
    }
    console.log(formData)
}