function MonthTodayExpense({ monthData, selectedDate }) {
  const todayExpenses =
    monthData.length > 0
      ? monthData.filter((item) => {
          return item.date === selectedDate;
        })
      : [];
 
  return (
    <div className="monthly-today-expense" style={{border:"1px solid #ddd",padding:"5px 5px"}}>
      <h3 style={{textAlign:"center",borderBottom:"1px solid #ddd",fontSize:"16px"}}>{selectedDate} Expenses</h3>
      {todayExpenses.length>0?todayExpenses.map((item) => {
        return (
          <div className="expense-page-item" key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.time}</p>
          </div>
        );
      }):<h3 className="no-exp">NO Expenses Was Added On this date</h3>
    }
    </div>
  );
}
export default MonthTodayExpense;
