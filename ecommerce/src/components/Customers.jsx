import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (err) {
        setError('error fetching!');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Customer List</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <ul>
          {customers.map(customer => (
            <li key={customer.id}>
              <strong>Name:</strong> {customer.customer_name} <br />
              <strong>Email:</strong> {customer.email} <br />
              <strong>Phone:</strong> {customer.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Customers;
