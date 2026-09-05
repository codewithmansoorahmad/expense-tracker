export default function TodaySummaryHead({todayDate,totalExpense,todayExpenses,highestPrice,LowestPrice,averagePrice}){
    return <div>
        <div className="head-today">
                <h1>Today's Expenses</h1>
                <p>{todayDate}</p>
            </div>
            <div className="total-expense">
                <h3>Total spent today</h3>
                <h1>RS: {totalExpense}</h1>
            </div>
            <div className="expenses-grid">
                <div className="expenses-length">
                    <h3>Expenses</h3>
                    <p>{todayExpenses.length}</p>
                </div>
                <div className="highest-expense-price">
                    <h3>Highest expense price</h3>
                    <p>{highestPrice}</p> 
                </div>
                <div className="lowest-expense-price">
                    <h3>Lowest expense price</h3>
                    <p>{LowestPrice}</p> 
                </div>
                <div className="average-expense-price">
                    <h3>Average Price</h3>
                    <p>{averagePrice?averagePrice:"N/A"}</p>
                    
                </div>
            </div>
    </div>
}