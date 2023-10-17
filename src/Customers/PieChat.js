import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const state = {
  datasets: [
    {
      label: 'Customers that buy products',
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      ],
      data: [85, 49]
    }
  ]
}

export default class PieChat extends React.Component {
  render() {
    return (
      <div className='piechat'> 
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Customers that buy products',
              fontSize:20
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