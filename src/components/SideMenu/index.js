import { Icon } from '@mui/material';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';


function SideManu() {
    const navigate = useNavigate();
    return (<div className="SideMenu">
        <SideNav
            onSelect={(selected) => {
                navigate(selected.key);
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Dashboard">
                <h3>Dashboard</h3>
                <NavItem eventKey="Dashboard">
                    <NavIcon />
                    
                    <NavText>
                        
                        <img src={require('../../icons/dashboard.png')} width="20" height="20" />
                        Dashboard
                    </NavText>
                </NavItem>
                <NavItem eventKey="Product">
                    <NavIcon>
                  
                    </NavIcon>
                    <NavText>
                    <img src={require('../../icons/product.png')} width="20" height="20" />
                        Product
                    </NavText>
                </NavItem>
                <NavItem eventKey="Customers ">
                    <NavIcon>
                      
                    </NavIcon>
                    <NavText>
                    <img src={require('../../icons/wallet.png')} width="20" height="20" />
                        Customers
                    </NavText>
                </NavItem>
                <NavItem eventKey="Income">
                    <NavIcon>
                        
                    </NavIcon>
                    <NavText>
                    <img src={require('../../icons/profit.png')} width="20" height="20" />
                        Income
                    </NavText>
                </NavItem>
                <NavItem eventKey="Promote">
                    <NavIcon>
                       
                    </NavIcon>
                    <NavText>
                    <img src={require('../../icons/promotions.png')} width="20" height="20" />
                        Promote
                    </NavText>
                </NavItem>
                <NavItem eventKey="Help ">
                    <NavIcon>
                       
                    </NavIcon>
                    <NavText>
                    <img src={require('../../icons/help.png')} width="20" height="20" />
                        Help
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    </div>
    );
}
export default SideManu;