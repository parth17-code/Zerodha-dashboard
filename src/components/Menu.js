import { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
    const [SelectedMenuOption , setSelectedMenuOption] = useState(0);
    const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState(false);

    const handleMenuCLicks = (index)=>{
        setSelectedMenuOption(index);
    }

    const handleProfileClick = (boolean)=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }

    const menuClass = "menu"
    const activeMenuClass = "menu selected"

  return (
    <>
      <div className="menu-container">
        <img src="assets/logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
                <Link style={{textDecoration:"none"}} to={"/"} onClick={()=>handleMenuCLicks(0)}> <p className={SelectedMenuOption===0?activeMenuClass:menuClass}>Dashboard</p> </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"orders"} onClick={()=>handleMenuCLicks(1)}> <p className={SelectedMenuOption===1?activeMenuClass:menuClass}>Orders</p> </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=>handleMenuCLicks(2)}> <p className={SelectedMenuOption===2?activeMenuClass:menuClass}>Holdings</p> </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=>handleMenuCLicks(3)}> <p className={SelectedMenuOption===3?activeMenuClass:menuClass}>Positions</p> </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=>handleMenuCLicks(4)}> <p className={SelectedMenuOption===4?activeMenuClass:menuClass}>Funds</p> </Link>
            </li>
            <li>
              <p>Apps</p>
            </li>
          </ul>
          <hr />
          <div className="profile">
            <div className="avatar" onClick={handleProfileClick}>ZU</div>
            <p className="username">USERID</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
