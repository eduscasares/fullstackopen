import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonsForm from './components/PersonsForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons); 

  useEffect(() => {
    // Actualizar filteredPersons cada vez que persons cambia
    setFilteredPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [persons, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let aux = persons.map((element) => element.name);
    let newPerson;

    if (aux.includes(newName)) {
      alert(`${newName} is already added to your phonebook`);
    } else {
      newPerson = [...persons, { name: newName, number: newNumber }];
      setPersons(newPerson);
      setNewName('')
      setNewNumber('')
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleChangeSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResult = persons.filter((person) =>
      person.name.toLowerCase().includes(query)
    );
    setFilteredPersons(filteredResult);
  };

  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter 
        searchQuery={searchQuery} 
        handleChangeSearch={handleChangeSearch}
      />

      <h2>Add a new</h2>

      <PersonsForm 
        newName={newName}  
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleFormSubmit={handleFormSubmit}
      />

      <h2>Numbers</h2>
      
      <Persons 
        filteredPersons={filteredPersons} 
      />

    </div>
  );
};

export default App;