import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonsForm from './components/PersonsForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);   


  useEffect(() => {
  
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })

      setFilteredPersons(
        persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )

  }, [persons, searchQuery])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    let aux = persons.map((element) => element.name);
    // let auxNumber = persons.map((element) => element.number);
    // let auxId = persons.map((element) => element.id);
    console.log(aux)


    if (aux.includes(newName)) {
      if (window.confirm(`${newName} is already added to your phonebook, replace the old number with a new one?`)) {
        axios
          .put(`http://localhost:3001/persons/${persons.find((person) => person.name === newName).id}`, {
            name: newName,
            number: newNumber
          })
          .catch(error => console.log(error))
      }
    } else {

      axios
        .post('http://localhost:3001/persons', {
          name: newName,
          number: newNumber
        })
        .catch(error => console.log(error))

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

  const handleDelete = (id) => {
    if(window.confirm(`Delete ${persons.find((person) => person.id === id).name}?`)) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .catch(error => console.log(error))
    }
  }

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
        handleDelete={handleDelete}
      />

    </div>
  );
};

export default App;