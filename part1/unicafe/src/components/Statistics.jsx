import React from 'react';

const Statistics = ({ feedback }) => {

    const average = ((feedback.good * 1) + (feedback.bad * (-1))) / feedback.all
    const percentage = feedback.good / feedback.all * 100

    return (
        <div>
            <h2>Results</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <strong><p>All: {feedback.all}</p></strong>
            <p>Average: {isNaN(average) ? 0 : average}</p>
            <p>Positive: {percentage}%</p>
        </div>
    );
}

export default Statistics;
