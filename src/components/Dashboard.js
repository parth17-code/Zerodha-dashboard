import { Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import Watchlist from "./Watchlist";
import { GeneralContextProvider } from "../context/GeneralContext";


function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <GeneralContextProvider>
          <Watchlist></Watchlist>
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<App />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
