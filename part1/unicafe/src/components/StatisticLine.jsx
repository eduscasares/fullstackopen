import React from 'react';

const StatisticLine = ({ name, value }) => {
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    );
}

export default StatisticLine;
