import React from 'react';

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises: {props.part1 + props.part2 + props.part3}</p>
        </div>
    );
}

export default Total;
