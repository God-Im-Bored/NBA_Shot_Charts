import React from 'react'

const Chart = ({ shotTypes, shotZones }) => {

    const typeHeaders = ['', 'made', 'missed', 'total', 'FG%']
    const types = ['2', '3', 'Total']

    console.log(shotTypes, shotZones)
    return (
        
        <div>
            
            <table>
                <thead>
                    <tr>{typeHeaders.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                    {shotTypes ?
                     Object.keys(shotTypes).map((k, i) => {
                        let data = shotTypes[k]
                        return (
                            <tr key={i}>
                                <td>{k}</td>
                                <td>{data[0]}</td>
                                <td>{data[1]}</td>
                                <td>{data[2]}</td>
                                <td>{data[3]}</td>
                            </tr>
                        )
                    })
                :   (
                    types.map((k, i) => {
                        return (
                            <tr key={i}>
                                <td>{k}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>

                            </tr>
                        )
                    })
                    
                    
                )    
                    
                }
                </tbody>
            </table>
        </div>
    )
}

export default Chart