import React, { useState } from 'react';
import { addCustomer } from './api';

const CreateCustomerForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const customerData = {
      customer_name: customerName,
      email: email,
      phone: phone
    };

    try {
      const response = await addCustomer(customerData);
      setSuccessMessage(response.Message);
      setCustomerName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      setError(err.response?.data || 'An error occurred while adding the customer.');
    }
  };

  return (
    <div>
      <h2>Create New Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default CreateCustomerForm;
