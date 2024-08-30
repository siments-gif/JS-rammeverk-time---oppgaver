import React from "react";

const Education = ({ school, degree }) => {
  return (
    <div>
      <h3>Navn på skole er : {school}</h3>
      <h3>My degree is: {degree}</h3>
    </div>
  );
};

export default Education;
