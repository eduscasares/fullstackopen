import React from 'react';
import Part from './Part';

const Content = ({course}) => {

    const data = course.parts.map((element, index) => {
        return(
            <Part name={element.name} number={element.exercises} key={index}/>
        )
    })

    return data;
    
}
 
export default Content;
