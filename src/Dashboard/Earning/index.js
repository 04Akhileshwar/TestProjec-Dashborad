import {Card, Space, Statistic, Typography} from 'antd';
 
export default function Earning(){
    return(
<div className='earning'>
    <Space direction="horizontal">
        <Card>
        
        <Typography.Title level={0}>Earning</Typography.Title>
        <Space direction="horizontal">
        <img src={require('../../icons/salary.png')} width="50" height="50" />
       <Statistic value={"$198k"} title =" 37.8% this month"/>
       </Space>
        </Card>
    </Space>
</div>
    )
}