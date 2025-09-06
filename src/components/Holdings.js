import { useState, useEffect } from "react";
import  axios  from "axios";
import { VerticalGraph } from "./VerticalGraph";

function Holdings() {
  const [allHoldings, setAllholdings] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetch = async()=>{
    let res = await axios.get(`https://zerodha-backend-qvo7.onrender.com/allHoldings`);
    console.log(res.data);
    setAllholdings(res.data);
    }
    fetch();
  }, []);

const labels = allHoldings.map((stock)=>stock["name"])

const data = {
  labels,
  datasets: [
    {
      label: 'Stock price',
      data: allHoldings.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const isProfitClass = isProfit ? "profit" : "loss";
            const isDayClass = isProfit ? "profit" : "loss";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={isProfitClass}>
                  {(currValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={isProfitClass}>{stock.net}</td>
                <td className={isDayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}></VerticalGraph>
    </>
  );
}

export default Holdings;
