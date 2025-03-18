import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users', {
        name: name,
        phoneNumber: phoneNumber,
      });

      if (response.status === 200) {
        setMessage('User created successfully');
      } else {
        setMessage('Failed to create user');
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
    console.log({ name, phoneNumber });
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="phoneNumber">Phone:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;