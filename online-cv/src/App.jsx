import "./App.css";
import { useState } from "react";
import HelloComponent from "./components/HelloComponent";
import FavoriteMovies from "./components/FavoriteMovies";
import Header from "./components/Header/Header";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SkillsButton from "./components/SkillsButton/SkillsButton";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <PersonalInfo
        name="Simen"
        email="sim1skogen@gmail.com"
        tlfNumber="46471518"
        address="Nedre Gokstadvei 48"
      />
      <br />
      <Education
        school={"Gokstad akademiet"}
        degree={"Front-end development"}
      />
      <SkillsButton skills={["Javascript", "Typescript", "Figma", "React"]} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;

// Kode til main return
{
  /*   const [date, setDate] = useState("");
  const name = "Simen";

  const getDate = () => {
    const today = new Date();
    setDate(today.toString());
  }; */
  // return
  /* <div>
        <h1>{name}</h1>
        <button onClick={getDate}>Get date</button>
        <p>{date}</p>
        <button onClick={alertMessage}>Alert test</button>
      </div>
      <div>
        <HelloComponent />
        <FavoriteMovies />
      </div> */
}
