import React from 'react';

const List = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Agrega más campos según sea necesario */}
    </div>
  );
};

export default List;
