import React from 'react';

const TableComponent = ({ sectorPercentages, totalInteractions, sectorInteractions}) => {
    return (
        <>
            <div className="column1">
                <div className='interactions-box'>
                    <h3>Total number of interactions: </h3>
                    <h2>{totalInteractions}</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sector</th>
                            <th>No. of interactions</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sectorPercentages.map((sectorPercentage) => (
                            <tr key={sectorPercentage.sector}>
                                <td>{sectorPercentage.sector}</td>
                                <td>{sectorInteractions[sectorPercentage.sector] || 0}</td>
                                <td>{sectorPercentage.percentage.toFixed(0)}%</td>
                            </tr>
                        ))}
                        {/* {Object.keys(sectorPercentages).map((sector) => (
                        <tr key={sector}>
                            <td>{sector}</td>
                            <td>{sectorPercentages[sector].toFixed(0)}%</td>
                        </tr>
                    ))} */}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default TableComponent;