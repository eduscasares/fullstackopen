import React from 'react';
import Part from './Part';

const Content = ({ course }) => {

    const data = course.parts.map((element) => {
        return(
            <Part name={element.name} number={element.exercises} key={element.id}/>
        )
    })

    return data;
    
}
 
export default Content;
