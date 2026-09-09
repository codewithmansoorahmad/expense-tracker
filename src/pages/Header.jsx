import NavBar from "../components/NavBar";
// import { Walletcards } from "lucide-react";
import { WalletCards } from "lucide-react";
import "../css/Header.css";
import { Outlet } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <WalletCards size={30} />
          <span>Expanse<span className="tracker">Tracker</span></span>
        </div>

        <NavBar />
      </div>
      <Outlet/>
    </>
  );
}
export default Header;
