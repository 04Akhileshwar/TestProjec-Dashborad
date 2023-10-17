import {Card, Space, Statistic, Typography} from 'antd';
 
export default function Balance(){
    return(
<div className='balance'>
    <Space direction="horizontal">
        <Card>
        <Typography.Title level={0}>Balance</Typography.Title>
        <Space direction="horizontal">
        <img src={require('../../icons/salary.png')} width="50" height="50" />
       <Statistic value={"$2.4k"} title =" 2% this month"/>
       </Space>
        </Card>
    </Space>
</div>
    )
}