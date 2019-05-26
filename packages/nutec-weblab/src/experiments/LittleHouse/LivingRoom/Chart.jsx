import React from 'react'
import { Line } from 'react-chartjs-2';
import { ChartWrapper } from './styled'

const Chart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(255,0,0,.3)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: 'red',
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0,0,255,.3)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,0)',
        pointBackgroundColor: 'blue',
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'blue',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [75, 39, 40, 61, 26, 45, 20]
      }
    ]
  };
  

  return (
    <ChartWrapper>
      <Line 
        data={data}
        height={100}
      />
    </ChartWrapper>
  )
}

export default Chart