export default function MonthlyStatistics({selectedDay,selectedYear,monthIndex,expenses}){
const month=String(monthIndex).padStart(2,"0")
let array=[month,selectedDay,selectedYear]
let selectedDate=array.join("-");
console.log(expenses)
let monthData=expenses.length>0?expenses.filter((item)=>{
    return item.date.split("-")[1]===month
}):[]
const totalPrice=monthData?.reduce((acc,curr)=>acc+Number(curr.price),0)||0
const averagePrice=(totalPrice/monthData.length)||0
const highestExpense=monthData?.reduce((acc,curr)=>Number(acc.price)>Number(curr.price)?acc:curr).price||0
const lowestExpense=monthData?.reduce((acc,curr)=>Number(acc.price)<Number(curr.price)?acc:curr).price||0


    return <div className="monthky-statisctics">
        <div className="total-month-spent">
            <h3>Total Spent</h3>
            <p>RS:{totalPrice.toLocaleString()}</p>
        </div>
        <div className="length">
            <h3>Total Expenses</h3>
            <p>{monthData.length}</p>
        </div>
        <div className="average">
            <h3>Average</h3>
            <p>RS:{averagePrice.toLocaleString()}</p>
        </div>
<div className="highest">
    <h3>Highest Expense</h3>
    <p>RS:{Number(highestExpense).toLocaleString()}</p>
</div>
<div className="lowest">
    <h3>Lowest Expense</h3>
    <p>RS:{Number(lowestExpense).toLocaleString()}</p>
</div>
    </div>

}