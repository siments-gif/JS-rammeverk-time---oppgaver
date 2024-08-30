import React from "react";

const PersonalInfo = ({ name, address, tlfNumber, email }) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{tlfNumber}</li>
        <li>{address}</li>
      </ul>
    </div>
  );
};

export default PersonalInfo;
