import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [SelectedMenuOption, setSelectedMenuOption] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName , setUserName] = useState("");

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;



  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("https://zerodha-backend-qvo7.onrender.com/user/verify", {
          withCredentials: true,
        });

        if (!res.data.status) {
          console.log("KickBack");
          window.location.href = `https://zerodha-frontend-ochre.vercel.app/signup`;
        }else{
          setUserName(res.data.user.name);
        }
      } catch (err) {
        console.error("Verification failed", err);
        window.location.href = `https://zerodha-frontend-ochre.vercel.app/signup`;
      }
    };

    verifyUser();
  }, []);

  const handleMenuCLicks = (index) => {
    setSelectedMenuOption(index);
  };

  const handleProfileClick = (boolean) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogoutClick = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        window.location.href = `https://zerodha-frontend-ochre.vercel.app/signup`;
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="assets/logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={"/"}
                onClick={() => handleMenuCLicks(0)}
              >
                {" "}
                <p
                  className={
                    SelectedMenuOption === 0 ? activeMenuClass : menuClass
                  }
                >
                  Dashboard
                </p>{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={"orders"}
                onClick={() => handleMenuCLicks(1)}
              >
                {" "}
                <p
                  className={
                    SelectedMenuOption === 1 ? activeMenuClass : menuClass
                  }
                >
                  Orders
                </p>{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={"/holdings"}
                onClick={() => handleMenuCLicks(2)}
              >
                {" "}
                <p
                  className={
                    SelectedMenuOption === 2 ? activeMenuClass : menuClass
                  }
                >
                  Holdings
                </p>{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={"/positions"}
                onClick={() => handleMenuCLicks(3)}
              >
                {" "}
                <p
                  className={
                    SelectedMenuOption === 3 ? activeMenuClass : menuClass
                  }
                >
                  Positions
                </p>{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to={"/funds"}
                onClick={() => handleMenuCLicks(4)}
              >
                {" "}
                <p
                  className={
                    SelectedMenuOption === 4 ? activeMenuClass : menuClass
                  }
                >
                  Funds
                </p>{" "}
              </Link>
            </li>
            <li>
              <p>Apps</p>
            </li>
          </ul>
          <hr />
          <div className="profile dropdown" onClick={handleProfileClick}>
            <button
              type="button"
              class="dropdown-toggle avatar"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ZU
            </button>
            {isProfileDropdownOpen ? (
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item username" onClick={handleLogoutClick}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
            <p className="username"><b>{userName}</b></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
