import React from 'react';

const Total = ({ course }) => {

    const totalToArray = course.parts.map((element) => element.exercises)
    const total = totalToArray.reduce((a, b) => a + b, 0)

    return <strong><p>Number of exercises: { total }</p></strong>;

}

export default Total;
 