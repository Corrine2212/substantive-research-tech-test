import React, { useState, useEffect } from 'react';
import '../dist/style.css';

// import PieChart from '../components/Charts';
import ChartComponent from '../components/Charts';
import TableComponent from '../components/Tables';

const MainContainer = () => {
    const [interactionData, setInteractionData] = useState([]);
    const [sectorPercentages, setSectorPercentages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalInteractions, setTotalInteractions] = useState(0)
    const [sectorInteractions, setSectorInteractions] = useState(0)

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

                    // find the total number of interactions
                    const totalInteractions = data.length;
                    setTotalInteractions(totalInteractions);


                    // calculate the number of interactions for each sector
                    setSectorInteractions(sectorCounts)


                    const percentages = {};
                    for (const sector in sectorCounts) {
                        percentages[sector] = (sectorCounts[sector] / totalInteractions) * 100;
                    }
                    for (const sector in percentages) {
                        percentages[sector] = parseFloat(percentages[sector]);
                    }

                    setSectorPercentages(percentages);
                }
            })
            .catch((error) => console.error("Error", error))
            .finally(() => setIsLoading(false));
    }, []);

    // sort the data in descending order
    const sortedSectorPercentages = Object.entries(sectorPercentages)
        .map(([sector, percentage]) => ({ sector, percentage }))
        .sort((a, b) => b.percentage - a.percentage);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <nav>
                <h2 className='navbar__logo'>Substantive Research</h2>
            </nav>

            <main>
                <div className="stats-wrapper">
                    <TableComponent sectorPercentages={sortedSectorPercentages} totalInteractions={totalInteractions} sectorInteractions={sectorInteractions}/>
                    <ChartComponent sectorPercentages={sortedSectorPercentages} />
                </div>
            </main>
        </>
    );
}

export default MainContainer;


// first ensure that you can pull and render data from the api
// calculate percentages of each sector by finding the total number of interactions in dataset
// total number of interaction with each sector
// divide above number with total number of interactions and multiply by 100

            {/* <ul>
                {interactionData.map((item, index) => (
                    <li key={index}>
                        Date: {item.date}, Name: {item.name}, Sector ID: {item.sector_id}
                    </li>
                ))}
            </ul> */}
