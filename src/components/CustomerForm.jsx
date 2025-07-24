import React, { useState } from "react";
import axios from "axios";

const api_domain = import.meta.env.VITE_API_DOMAIN;

const CustomerForm = ({ onCustomerAdded }) => {
  const [data, setData] = useState({ name: "", email: "", phone_no: "" });

  const handleChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${api_domain}/customer`, data);
      if (onCustomerAdded) {
        onCustomerAdded(res.data);
      }
      setData({ name: "", email: "", phone_no: "" });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <form
      className="bg-gray-800 text-white rounded-lg shadow-lg p-3 m-3 w-52"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Name</legend>
        <input
          className="w-full px-3 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input
          className="w-full px-3 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Phone No.</legend>
        <input
          className="w-full px-3 py-1 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="tel"
          name="phone_no"
          placeholder="phone number"
          value={data.phone_no}
          onChange={handleChange}
        />
      </fieldset>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 mt-2 rounded transition-colors cursor-pointer"
      >
        Add customer
      </button>
    </form>
  );
};

export default CustomerForm;
