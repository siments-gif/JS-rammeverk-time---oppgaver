import React from "react";
import Greeting from "./components/Greeting/Greeting";
import UserInfo from "./components/UserInfo/UserInfo";
import { UserInfo2 } from "./components/UserInfo/UserInfo";
import { UserInfo3 } from "./components/UserInfo/UserInfo";

function App() {
  return (
    <>
      <Greeting />
      <UserInfo name="Simen" epost="sim1skogen@gmail.com" />
      <UserInfo2 />
      <UserInfo3 name="Skogen" epost="sim1skogen@gmail.com" />
    </>
  );
}
export default App;
