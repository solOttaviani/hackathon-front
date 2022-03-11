import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./hackathon/home";
import Hackathon from "./hackathon/hackathon";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={() => <Home title="Home" />} />
        <Route
          exact
          path="/hackathon/:id(\d+)"
          element={(props) => <Hackathon {...props} title="Hackathon" />}
        />
      </Routes>
    </div>
  );
};

export default App;
