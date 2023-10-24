import React, { useState, useEffect } from 'react';
import '../dist/style.css';

// import PieChart from '../components/Charts';
// import Charts from '../components/Charts';

const MainContainer = () => {
    const [interactionData, setInteractionData] = useState([]);
    const [sectorPercentages, setSectorPercentages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalInteractions, setTotalInteractions] = useState(0)

    useEffect(() => {
        fetch('https://substantive.pythonanywhere.com/')
            .then((response) => response.json())
            .then((result) => {
                const data = result.interactions;
                setInteractionData(data);

                if (data.length > 0) {
                    const sectorCounts = data.reduce((counts, interaction) => {
                        counts[interaction.name] = (counts[interaction.name] || 0) + 1;
                        return counts;
                    }, {});

                    const totalInteractions = data.length;
                    setTotalInteractions(totalInteractions);

                    const percentages = {};
                    for (const sector in sectorCounts) {
                        percentages[sector] = (sectorCounts[sector] / totalInteractions) * 100;
                    }

                    setSectorPercentages(percentages);
                }
            })
            .catch((error) => console.error("Error", error))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <nav>
                <h2 className='navbar__logo'>Substantive Research</h2>
            </nav>

            {/* {Object.keys(sectorPercentages).map((sector) => (
                <div key={sector}>
                    <p>{sector}: {sectorPercentages[sector].toFixed(2)}%</p>
                </div>
            ))} */}

            <main>
                <div className='interactions-box'>
                    <h3>Total number of interactions: {totalInteractions}</h3>
                </div>

                <div className="stats-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Sector</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(sectorPercentages).map((sector) => (
                                <tr key={sector}>
                                    <td>{sector}</td>
                                    <td>{sectorPercentages[sector].toFixed(0)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='chart'>
                        <h3>Chart</h3>
                    </div>
                </div>
            </main>
            {/* <PieChart sectorPercentages={sectorPercentages}/> */}


            {/* <ul>
                {interactionData.map((item, index) => (
                    <li key={index}>
                        Date: {item.date}, Name: {item.name}, Sector ID: {item.sector_id}
                    </li>
                ))}
            </ul> */}

            {/* <Charts data={interactionData} /> */}

        </>
    );
}

export default MainContainer;


// first ensure that you can pull and render data from the api
// calculate percentages of each sector by finding the total number of interactions in dataset
// total number of interaction with each sector
// divide above number with total number of interactions and multiply by 100