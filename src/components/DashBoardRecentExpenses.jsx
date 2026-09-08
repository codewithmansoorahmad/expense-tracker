import { useState } from "react";
import { useSelector } from "react-redux";
import {  ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function RecentExpense() {
  const expenses = useSelector((state) => state.expenses.expensesItems);
  const recentExpenses = expenses.slice(-5);
  console.log(recentExpenses);
  const navigate=useNavigate()
  return (
    <div className="recentExpense">
      <div className="view-all">
        <h3>Recent Expense</h3>
        <button onClick={() =>navigate("/view-all") }>
        <div className="view-all">    <span>view all</span> <ArrowRight size={20}/></div>
        </button>
      </div>
      {recentExpenses.map((item) => {
            return (
              <div className="recent-expense" key={item.id}>
                <p>{item.name}</p>
                <p>RS:{item.price}</p>
                <p>{item.date}</p>
              </div>
            );
          })
        }
    </div>
  );
}
