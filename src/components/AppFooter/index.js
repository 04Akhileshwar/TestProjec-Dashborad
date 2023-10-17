import {Card,Space} from 'antd';
import CardHeader from '../../components/CardHeader/index'
import TextHeading from '../../components/TextHeading/index'
import List from '../../ListItem/list'
import Item from '../../ListItem/list'
function AppFooter(){
    return( <div className="footer">
<Space direction='horizontal'>
<Card className='card'>
<CardHeader/>
{/* <TextHeading/> */}
<List/>
<Item/>
</Card>
</Space>
    </div>
    )
}
export default AppFooter;