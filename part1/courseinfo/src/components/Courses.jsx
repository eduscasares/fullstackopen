import React from 'react';
import Course from './Course';

const Courses = ({ courses }) => {

    const course = courses.map((element) => <Course key={element.id} course={ element }/>)

    return (
        <div>
            { course }
        </div>
    );
}

export default Courses;
