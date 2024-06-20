'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
   // const accountNames = accounts.map((acc) => acc.name);
    //const balances = accounts.map((acc) => acc.currentBalance);

   const data = {
        datasets: [{
            label: 'Banks',
            data: [1235, 1234, 500],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] 
        }
        ],
        labels: ['bank1', 'bank2', 'bank3']
   }
    
  return <Doughnut 
            data={data}        
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
        />
  
}

export default DoughnutChart