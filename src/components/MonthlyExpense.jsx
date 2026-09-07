import { useNavigate } from "react-router-dom";

export default function MonhtlyExpense({
  monthData,
  selectedMonth,
}) {
  const todayMonth = new Date().toLocaleDateString("en-us", { month: "long" });
  
  const navigate=useNavigate()

  return (
    <div className="monthly-expense">
      <h3>All Month Expenses</h3>
      {monthData.map((item) => {
        return (
          <div className="expense-page-item" key={item.id}>
            <p>{item.name}</p>
            <p>Rs: {item.price}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
      {todayMonth === selectedMonth  && <button onClick={()=>navigate("/add-expense")} className="btn">Add More Expense</button>}
    </div>
  );
}
