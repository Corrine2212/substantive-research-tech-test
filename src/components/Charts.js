import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ sectorPercentages }) => {
    const chartData = {
        labels: sectorPercentages.map((sectorPercentage) => sectorPercentage.sector),
        datasets: [
            {
                data: sectorPercentages.map((sectorPercentage) => sectorPercentage.percentage),
                backgroundColor: [
                    '#0039CC',
                    '#0040E6',
                    '#1A4DFF',
                    '#3364FF',
                    '#4D7BFF',
                    '#6693FF',
                    '#80ABFF',
                    '#99C2FF',
                    '#B3D9FF',
                    '#CCEBFF',
                    '#E6F7FF',
                ],
            },
        ],
    };

    const chartTitle =  "title"

    const legendOptions = {
        display: true,
        position: 'right', 
    };

    return (
        <div className="chart">
            <h3>Sector Distribution</h3>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        legend: legendOptions,
                        title: {
                            display: true,
                            text: chartTitle,
                        },
                    }
                }}
            />
        </div>
    );
};

export default ChartComponent;


