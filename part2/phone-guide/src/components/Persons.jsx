import React from 'react';

const Persons = ({ filteredPersons, handleDelete }) => {
    return (
        <div>
            {filteredPersons.map((person, index) => (
                <div style={{display: 'flex'}} key={index}>
                    <p>{person.name} - {person.number}</p>
                    <button onClick={() => handleDelete(person.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Persons;
