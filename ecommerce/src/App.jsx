import React from 'react';
import Customers from './Customers';
import CreateCustomerForm from './CreateCustomerForm';

const App = () => {
  return (
    <div>
      <h1>Manage Customers</h1>
      <CreateCustomerForm />
      <Customers />
    </div>
  );
};

export default App;
