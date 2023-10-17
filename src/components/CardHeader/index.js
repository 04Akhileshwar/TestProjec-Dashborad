import { TextField } from "@mui/material"; 
import { Button } from "antd";
function CardHeader(){
    return <div className="CardHeader">
        <h1> Product Sell </h1>
        <div className="searchHeader" > 
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
        </div> 
        <div style={{marginLeft:50}}>
            <Button>{"Last 30 days ^"}</Button>
        </div>
    </div>
    
}
export default CardHeader;