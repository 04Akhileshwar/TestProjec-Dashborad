import { TextField } from "@mui/material"; 
function Header(){
    return <div className="Header">
        <h1 style={{marginLeft:300}}>Hello Shahrukh ,</h1>
        <div className="search" > 
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
        </div>
    </div>
    
}
export default Header;