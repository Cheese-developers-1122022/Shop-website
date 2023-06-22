import React from "react";
import Path from "./components/routes/Path";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Path />
      <Footer />
    </div>
  );
};

export default App;
