import React from 'react';
import Button from './Button';

const ButtonContainer = (props) => {
    return (
        <div className="button-container">
            <Button text='Good' onClick={props.addGood} />
            <Button text='Neutral' />
            <Button text='Bad' />
        </div>
    );
}

export default ButtonContainer;
