import { useState } from "react";
import { handleInput, handleSubmit } from "../services/expense";
import "../css/expense.css"
function Expense() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="expense">
      <h2>Add Expense</h2>
      <form>
        <div className="expense-name">
          <label>Expense Name</label>
          <input
            type="text"
            placeholder="expense name"
            value={name}
            name="name"
            onChange={(e) => handleInput(e,setName)}
            required
          />
        </div>
        <div className="expense-price">
          <label>expense Price</label>
          <input
            type="number"
            placeholder="expense price"
            value={price}
            min="0"
            name="price"
            onChange={(e) =>handleInput(e,setPrice)}
            required
          />
        </div>
        <div className="expense-date">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {handleInput(e,setDate)

            }}
            required
          />
        </div>
        <div className="expense-category">
          <label>Add Category</label>
          <select
            name="select"
            id="select"
            value={category}
            onChange={(e) => {
              handleInput(e,setCategory);
            }}
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="Transport">Transport</option>
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
        <button className="btn" onClick={(e)=>handleSubmit(e,name,price,date,category)}>Add Expense</button>
      </form>
    </div>
  );
}
export default Expense;
