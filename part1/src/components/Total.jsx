import React from 'react';

const Total = ({ course }) => {

    return <p>Number of exercises: {course[0].exercises + course[1].exercises + course[2].exercises}</p>;

}

export default Total;
 