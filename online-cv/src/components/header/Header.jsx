import React from "react";
import myImg from "../../assets/react.svg";

const Header = () => {
  return (
    <section>
      <h1>Min online CV</h1>
      <img src={myImg} alt="Bilde av meg" />
      <img src={myImg} alt="Bilde av meg" />
      <img src={myImg} alt="Bilde av meg" />
    </section>
  );
};

export default Header;
