import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutImage from "./images/about.png";
import aboutImage2 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutImage} title="Comes With All You Need For Daily Life" button="Get The App"/>
      <About image={aboutImage2} title="Download And Get The App Now" button="Download"/>
    </div>
  );
}

export default App;
