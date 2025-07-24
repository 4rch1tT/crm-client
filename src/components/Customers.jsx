import React, { useState } from "react";

const Customers = ({ customer, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: customer.name,
    email: customer.email,
    phone_no: customer.phone_no,
  });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.prevent.default();
    onEdit(customer._id, editData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-max bg-gray-800 text-white flex flex-col justify-between rounded-md p-2">
      <div className="mb-3">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
            <input
              name="name"
              value={editData.name}
              onChange={handleChange}
              className="bg-gray-700 rounded px-2 py-1"
            />
            <input
              name="email"
              value={editData.email}
              onChange={handleChange}
              className="bg-gray-700 rounded px-2 py-1"
            />
            <input
              name="phone_no"
              value={editData.phone_no}
              onChange={handleChange}
              className="bg-gray-700 rounded px-2 py-1"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-3 py-1 mt-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white rounded-md px-3 py-1"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h2>{customer.name}</h2>
            <p>{customer.email}</p>
            <p>{customer.phone_no}</p>
          </>
        )}
      </div>
      {!isEditing && (
        <div className="flex gap-2">
          <button
            className="bg-amber-400 text-white rounded-md px-3 py-1"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white rounded-md px-3 py-1"
            onClick={() => onDelete(customer._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Customers;
