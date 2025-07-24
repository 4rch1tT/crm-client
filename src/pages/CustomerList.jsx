import axios from "axios";
import React, { useEffect, useState } from "react";
import Customers from "../components/Customers";
import CustomerForm from "../components/CustomerForm";

const api_domain = import.meta.env.VITE_API_DOMAIN;

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(`${api_domain}/customer`).then((res) => {
      setCustomers(res.data);
    });
    console.log(customers);
  }, []);

  const handleCustomerAdded = (newCustomer) => {
    setCustomers((prev) => [...prev, newCustomer]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api_domain}/customer/${id}`);
      setCustomers((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      alert("Failed to delete customer");
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      const res = await axios.put(`${api_domain}/customer/${id}`, updatedData);
      setCustomers((prev) => prev.map((c) => (c._id === id ? res.data : c)));
    } catch (error) {
      alert("Failed to edit customer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-3xl ">Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5">
        {customers.map((customer) => (
          <Customers
            key={customer._id}
            customer={customer}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
      <CustomerForm onCustomerAdded={handleCustomerAdded} />
    </div>
  );
};

export default CustomerList;
