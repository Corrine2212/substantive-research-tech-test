// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const PieChart = ({ sectorPercentages }) => {
//     const chartData = {
//         labels: Object.keys(sectorPercentages),
//         datasets: [
//             {
//                 data: Object.values(sectorPercentages),
//                 backgroundColor: [
//                     'red',
//                     'blue',
//                     'green',
//                     'pink',
//                     'orange',
//                     'yellow',
//                     // Add more colors as needed
//                 ],
//             },
//         ],
//     };

//     return (
//         <>
//             <h1>piechart</h1>

//             <div style={{ maxWidth: '400px' }}>
//                 <Pie data={chartData} />
//             </div>

//         </>

//     )
// }

// export default PieChart;



// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import { Line } from "react-chartjs-2";


// const Charts = ({ data }) => {
//     const chartRef = useRef(null)
//     const [chart, setChart] = useState(null);

//     useEffect(() => {

//         if (chart) {
//             chart.destroy();
//         }

//         if (chartRef.current) {
//             const newChart = new Chart(chartRef.current, {
//                 type: 'line',
//                 data: {

//                     labels: data.map((item) => item.date),
//                     datasets: [
//                         {
//                             label: 'Chart title',
//                             data: data.map((item) => item.sector_id),
//                             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                             borderColor: 'rgba(75, 192, 192, 1)',
//                             borderWidth: 1,
//                         },
//                     ],
//                 },
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                         }
//                     }
//                 }
//             });
//             setChart(newChart);
//         }
//     }, [data]);

//     return (
//         <>
//             <h1>chart components</h1>
//             <Line ref={chartRef}/>

//         </>
//     );
// }

// export default Charts;