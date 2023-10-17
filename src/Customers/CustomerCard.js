import {Card, Space, Statistic, Typography} from 'antd';
import PieChat from './PieChat'
export default function CustomerCard(){
    return(
<div className="custom">
    <Space direction="horizontal">
        <Card className="">
        <h1>Customers</h1>
        <h0>customers that buy products</h0>
     <PieChat/>
        </Card>
    </Space>
</div>
    )
}