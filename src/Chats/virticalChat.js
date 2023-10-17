import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
const state = {
  labels: ['Jan', 'Feb', 'Mar',
           'Apr', 'May','jun','jul','aug','sep','oct','nov','Dec'],
  datasets: [
    {
      label: 'monthly Earning',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,72,65,87,54,42,43,32]
    }
  ]
}

export default class VirticalChat extends React.Component {
  render() {
    return (
      <div >
        <Bar
          data={state}className='virtical'
          options={{
            title:{
              display:true,
              text:'Average Earning per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}