import { useContext, useState } from 'react';
import {Tooltip , Grow} from '@mui/material'
import { watchlist } from '../data/data';
import {BarChartOutlined, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'
import { GeneralContext } from '../context/GeneralContext';

function Watchlist() {
   
  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} / 50</span>
        </div>

        <ul className="list">
            {watchlist.map((stock,index)=>{
                return(
                    <WatchlistItem stock={stock} key={index}></WatchlistItem>
                )
            })}
        </ul>
      </div>
    </>
  );
}

export default Watchlist;

const WatchlistItem = ({stock})=>{
    const [showWatchlistOptions , setShowWatchlistOptions ] = useState(false)


const handleMouseEnter = (e)=>{
    setShowWatchlistOptions(true)
}

const handleMouseLeave = (e)=>{
    setShowWatchlistOptions(false)
}

return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='item'>
            <p className={stock.isDown? "down":"up"}>{stock.name}</p>
            <div className='itemInfo'>
                <span className='percent'>P{stock.percent}</span>
                {stock.isDown?(
                    <KeyboardArrowDown className="down"></KeyboardArrowDown>
                ):(<KeyboardArrowUp className="up"></KeyboardArrowUp>)}
                <span className='price'>{stock.price}</span>
            </div>
        </div>
        {showWatchlistOptions && <WatchlistOptions uid={stock.name}></WatchlistOptions>}
    </li>
)
}

const WatchlistOptions = ({uid})=>{
    const {handleOpenWindow} = useContext(GeneralContext)
    return(
        <span className='actions'>
            <Tooltip title="Buy (B)" placement='top' arrow slots={{transition:Grow}}>
                <button className='buy' onClick={()=>handleOpenWindow(uid)}>Buy</button>
            </Tooltip>
            <Tooltip title="Sell (S)" placement='top' arrow slots={{transition:Grow}}>
                <button className='sell'>Sell</button>
            </Tooltip>
            <Tooltip title="Analytics (A)" placement='top' arrow slots={{transition:Grow}}>
                <button className='action'>
                    <BarChartOutlined className='icon'></BarChartOutlined>
                </button>
            </Tooltip>
            <Tooltip title="More (M)" placement='top' arrow slots={{transition:Grow}}>
                <button className='action'>
                    <MoreHoriz className='icon'></MoreHoriz>
                </button>
            </Tooltip>
        </span>
        
    )
}