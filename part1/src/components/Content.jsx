import React from 'react';
import Part from './Part';

const Content = ({names, numbers}) => {
    return (
        <div>
            <Part name={names[0]} number={numbers[0]} />
            <Part name={names[1]} number={numbers[1]} />
            <Part name={names[2]} number={numbers[2]} />
        </div>
    );
}

export default Content;
