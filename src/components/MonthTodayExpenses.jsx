function MonthTodayExpense({ monthData, selectedDate }) {
  const todayExpenses =
    monthData.length > 0
      ? monthData.filter((item) => {
          return item.date === selectedDate;
        })
      : [];
  console.log(todayExpenses);
  return (
    <div>
      <h3>{selectedDate} Expenses</h3>
      {todayExpenses.map((item) => {
        return (
          <div className="expense-page" key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.time}</p>
          </div>
        );
      })}
    </div>
  );
}
export default MonthTodayExpense;
