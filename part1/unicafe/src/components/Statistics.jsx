import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {

    const average = ((props.props.good * 1) + (props.props.bad * (-1))) / props.props.all
    const percentage = props.props.good / props.props.all * 100

    return (
        <div>
            <h2>Statistics</h2>

            {

                props.props.all === 0 ?
                <p>No feedback given</p> :
                <table>
                    <StatisticLine name='Good' value={props.props.good}/>
                    <StatisticLine name='Neutral' value={props.props.neutral}/>
                    <StatisticLine name='Bad' value={props.props.bad} />
                    <StatisticLine name='All' value={props.props.all} />
                    <StatisticLine name='Average' value={isNaN(average) ? 0 : average} />
                    <StatisticLine name='Percentage' value={isNaN(percentage) ? `0%` : `${percentage}%`} />
                </table>
            }



           
        </div>
    );
}

export default Statistics;
