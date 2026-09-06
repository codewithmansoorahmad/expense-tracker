export default function MonthlyStatistics({monthData}){


const totalPrice=monthData.length>0?monthData.reduce((acc,curr)=>acc+Number(curr.price),0):0
const averagePrice=(totalPrice/monthData?.length)||0
const highestExpense= monthData.length>0?monthData?.reduce((acc,curr)=>Number(acc.price)>Number(curr.price)?acc:curr).price:0
const lowestExpense=monthData.length>0?monthData?.reduce((acc,curr)=>Number(acc.price)<Number(curr.price)?acc:curr).price:0


    return <div className="monthly-statistics">
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