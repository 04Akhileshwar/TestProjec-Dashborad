import {Card, Space, Statistic, Typography} from 'antd';
 import VirticalChat from './virticalChat.js'
export default function CD(){
    return(
<div className="cardBar">
    <Space direction="horizontal">
        <Card className="cd">
        <h0>Overview</h0>
       <VirticalChat/>
        </Card>
    </Space>
</div>
    )
}