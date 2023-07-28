import React from 'react';

const PersonsForm = ( { newName, handleNameChange, newNumber, handleNumberChange, handleFormSubmit } ) => {
    return (
        <form>
        <div>
          name:{' '}
          <input
            type='text'
            placeholder='add a new friend'
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:{' '}
          <input
            type='text'
            placeholder='number'
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button onClick={handleFormSubmit} type='submit'>
            add
          </button>
        </div>
      </form>
    );
}

export default PersonsForm;
