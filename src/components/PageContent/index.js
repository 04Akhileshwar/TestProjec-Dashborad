
import AppRoutes from '../../components/AppRoutes/index'
import Header from '../Hearder/index'
import TwoCards from '../../Customers/twoCards';
function PageContent(){
    return <div className="PageContent">
    <Header/>
    <AppRoutes/>
     <TwoCards/>
    </div>
    
}
export default PageContent;