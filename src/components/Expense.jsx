import { useRef, useState } from "react";
import { handleInput, handleKey, handleSubmit, handleUpdateSubmit } from "../services/expense";
import "../css/Expense.css"
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Expense() {
  const {id}=useParams()
       const expenses=useSelector((state)=>state.expenses.expensesItems)

  const edit=id &&expenses.find((item)=>item.id===id)
  const todayDate = new Date().toISOString().split("T")[0]
  const [name, setName] = useState(id?edit.name:"");
  const [price, setPrice] = useState(id?edit.price:"");
  const [date, setDate] = useState(id?edit.date:todayDate);
  const [category, setCategory] = useState(id?edit.category:"");
  const priceRef=useRef()
  const btnSubmit=useRef()
  const dateRef=useRef()
  const categoryRef=useRef()
  

  const navigate=useNavigate()
  return (
    <div className="expense">
      <h2>{id?"Update Expense":"Add Expense"}</h2>
      <form  onSubmit={(e)=>!id?handleSubmit(e,navigate):handleUpdateSubmit(id,navigate,e)}>
        <div className="expense-name">
          <label>Expense Name</label>
          <input
            type="text"
            placeholder="expense name"
            value={name}
            name="name"
            autoFocus
            onChange={(e) => handleInput(e,setName)}
            onKeyDown={(e)=>handleKey(e,priceRef)}
            required
          />
        </div>
        <div className="expense-price">
          <label>expense Price</label>
          <input
            type="number"
            placeholder="expense price"
            value={price}
            ref={priceRef}
            min="1"
            name="price"
            onChange={(e) =>handleInput(e,setPrice)}
             onKeyDown={(e)=>handleKey(e,dateRef)}
            required
          />
        </div>
        <div className="expense-date">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            ref={dateRef}
             onKeyDown={(e)=>handleKey(e,categoryRef)}

            onChange={(e) => {handleInput(e,setDate)

            }}
            required
          />
        </div>
        <div className="expense-category">
          <label>Add Category</label>
          <select
            name="category"
            id="select"
            value={category}
            ref={categoryRef}
            onChange={(e) => {
              handleInput(e,setCategory);
            }}
            onKeyDown={(e)=>handleKey(e,btnSubmit)}

            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="Transport">Transport</option>
            <option value="bills">Bills</option>
            <option value="utilities">Utilities</option>
            <option value="education">Education</option>
            <option value="healthcare">HealthCare</option>
            <option value="rent">Rent</option>
            <option value="travel">Fitness</option>
            <option value="grocerry">Grocery</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button ref={btnSubmit} className="btn" type="submit">{!id?"Add Expense":"update Expense"}</button>
      </form>
    </div>
  );
}
export default Expense;
