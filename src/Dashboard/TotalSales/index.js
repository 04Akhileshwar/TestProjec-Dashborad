import {Card, Space, Statistic, Typography} from 'antd';
 
export default function TotalSales(){
    return(
<div className='totalsale'>
    <Space direction="horizontal">
        <Card>
        <Typography.Title level={0}>TotalSale</Typography.Title>
        <Space direction="horizontal">
        <img src={require('../../icons/product.png')} width="50" height="50" />
       <Statistic value={"$89k"} title =" 11% this week"/>
       </Space>
        </Card>
    </Space>
</div>
    )
}