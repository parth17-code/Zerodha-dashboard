import { positions } from "../data/data";

function Positions() {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>
     
             <div className="order-table">
               <table>
                 <tr>
                   <th>Product.</th>
                   <th>Instrument.</th>
                   <th>Qty.</th>
                   <th>Avg.</th>
                   <th>LTP.</th>
                   <th>P&L</th>
                   <th>chg.</th>
                 </tr>
                 {positions.map((stock, index) => {
                   const currValue = stock.price * stock.qty;
                   const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                   const isProfitClass = isProfit ? "profit" : "loss";
                   const isDayClass = isProfit ? "profit" : "loss";
     
                   return (
                     <tr key={index}>
                       <td>{stock.product}</td>
                       <td>{stock.name}</td>
                       <td>{stock.qty}</td>
                       <td>{stock.avg.toFixed(2)}</td>
                       <td>{stock.price.toFixed(2)}</td>
                       <td className={isProfitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                       <td className={isDayClass}>{stock.day}</td>
                     </tr>
                   );
                 })}
               </table>
             </div>
    </>
  );
}

export default Positions;
