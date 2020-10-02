import React from "react";
import MainScreen from "../main-screen/main-screen";


const App = (props) => {
  const {errorsCount} = props;

  return (
    <MainScreen errorsCount={errorsCount} />
  );
};


export default App;
