import { createContext , useState , useEffect } from "react";
import BuyActionWindow from "../components/BuyActionWindow";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({children})=>{
    const [isBuyWindowOpen , setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID , setSelectedStockUID] = useState("");

    const handleOpenWindow = (uid)=>{
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseWindow = ()=>{
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }

    return(
        <GeneralContext.Provider value={{handleCloseWindow , handleOpenWindow }}>
            {children}
            {isBuyWindowOpen && <BuyActionWindow></BuyActionWindow>}
        </GeneralContext.Provider>
    )
}