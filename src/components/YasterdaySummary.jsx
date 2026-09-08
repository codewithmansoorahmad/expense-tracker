
function YasterDaySummary({yasterday}){
    console.log(yasterday)

    //  const expenses=useSelector((state)=>state.expenses.expensesItems)
   


    return(
        <div>
            
            <h3>yasterday summary</h3>
            {
                yasterday.map((item)=>{
                    return <div className="expense-page" key={item.id}>
                        <p>{item.name}</p>
                        <p>RS:{item.price}</p>
                        <p>{item.category}</p>
                        <p>{item.date}</p>
                    </div>
                })
            }
            
         
        </div>
    )
}
export default YasterDaySummary