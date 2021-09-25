import React from 'react'
import { Bar } from 'react-chartjs-2'

const Displaychart = () => {
    return (
        <div className="d-chart">
            <Bar
            data = {{
                labels: ['Mr.Peter Akaliro', 'Mr.David Sampson', 'Mr.Charles Clifford'],
                datasets: [{
                    label: 'Total # of Votes',
                    data: [300, 190, 130],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            

            }}
            height ={400 + 'px'}
            width ={600 + 'px'}
            options = {{
                maintainAspectRatio: false,
            }}
            />
        </div>
    )
}

export default Displaychart

