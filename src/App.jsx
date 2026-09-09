import "./css/App.css"
import { Routes,Route } from "react-router-dom"
import Header from "./pages/Header"
import DashBoard from "./pages/DashBoard"
import Expense from "./components/Expense"
import TodaySummary from "./pages/TodaySummary"
import MonthlyReport from "./pages/MonthlyReport"
import ViewAllPage from "./pages/ViewAllPage"
import PageNotFound from "./pages/404"
function App() {

  return (
    <>
    <main>
    {/* <AddExpense/> */}
    <Routes>
      <Route element={<Header/>}>
      <Route path="/" element={<DashBoard/>} />
      <Route path="/add-expense" element={<Expense/>} />
      <Route path="/add-expense/:id" element={<Expense/>} />
      <Route path="/today-summary" element={<TodaySummary/>} />
      <Route path="/monthly-report" element={<MonthlyReport/>} />
      <Route path="/view-all" element={<ViewAllPage/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
      
      
    </Routes>
    </main>
     
    </>
  )
}

export default App
