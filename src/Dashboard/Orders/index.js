import {Card, Space, Statistic, Typography} from 'antd';
 
export default function Orders(){
    return(
<div className='oders'>
    <Space direction="horizontal">
        <Card>
        <Typography.Title level={0}>Orders</Typography.Title>
        <Space direction="horizontal">
        <img src={require('../../icons/shopping-bag.png')} width="50" height="50" />
       <Statistic value={"$2.4k"} title =" 2% this month"/>
       </Space>
        </Card>
    </Space>
</div>
    )
}