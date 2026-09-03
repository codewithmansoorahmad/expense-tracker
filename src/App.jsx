import AddExpense from "./pages/AddExpense"
import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Header from "./pages/Header"
import DashBoard from "./pages/DashBoard"

function App() {

  return (
    <>
    <Header/>
    {/* <AddExpense/> */}
    <Routes>
      <Route path="/" element={<DashBoard/>} />
      <Route path="/add-expense" element={<AddExpense/>} />
      
    </Routes>
     
    </>
  )
}

export default App
