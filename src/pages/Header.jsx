import NavBar from "../components/NavBar";
// import { Walletcards } from "lucide-react";
import { WalletCards } from "lucide-react";
import "../css/Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <WalletCards size={30} />
          <span>Expanse Tracker</span>
        </div>

        <NavBar />
      </div>
    </>
  );
}
export default Header;
