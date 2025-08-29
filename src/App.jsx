import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Section1 from "./Pages/Section1";
// import Section2 from "./Pages/Section2";
import Nav from "./components/Navbar";
import AnimatedCursor from "./components/AnimatedCursor";
import Landing from "./Pages/Landing";
import Section2 from "./Pages/Section2";
import Section3 from "./Pages/Section3";
import Section5 from "./Pages/Section5";
import { Section10, Section8 } from "./Pages/Sectionrem";
import Sectionend from "./Pages/Sectionend";

const App = () => {
  return (
    <div>
      <AnimatedCursor />

      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <Section1/>
            <Section2 />
            <Section3/>
            
            <Section10/>

            <Sectionend/>
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
