import "./BuyActionWindow.css";
import { GeneralContext } from "../context/GeneralContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BuyActionWindow({ uid }) {
  const { handleCloseWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleCancelClick = () => {
    handleCloseWindow();
  };

  const handleBuyButtonClick = async() => {
    await axios.post("https://zerodha-backend-qvo7.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    handleCloseWindow();
  };

  return (
    <>
      <div className="container" id="buy-window" draggable="true">
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => {
                  setStockQuantity(e.target.value);
                }}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => {
                  setStockPrice(e.target.value);
                }}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <Link className="btn btn-blue" onClick={handleBuyButtonClick}>Buy</Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyActionWindow;
