import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.epost}</p>
    </div>
  );
};

export const UserInfo3 = ({ name, epost }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{epost}</p>
    </div>
  );
};

export const UserInfo2 = () => {
  const data = {
    name: "Hello",
    epost: "Hello@Hello.no",
  };
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.epost}</p>
    </div>
  );
};

export default UserInfo;
