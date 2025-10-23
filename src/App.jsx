import React from "react";
import Navbar from "./components/Navbar/navbar.jsx";
import Hero from "./components/Hero/hero.jsx";
import About from "./components/About/about.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
};

export default App;