import {BrowserRouter,Route,Routes} from "react-router-dom";
import Balance from '../../Dashboard/Balance'
import Earning from '../../Dashboard/Earning/index.js';
import Orders from '../../Dashboard/Orders'
import TotalSales from '../../Dashboard/TotalSales'
function AppRoutes(){
    return (
    <div className="approutes">
        <Earning/>
        <Orders/>
        <Balance/>
        <TotalSales/>
    </div>
    )
}
export default AppRoutes;