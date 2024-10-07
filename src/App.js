import React, { useState } from "react";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
import Test5 from "./components/Test5";
import Footer from "./components/Footer"; // Import the Footer component
import './App.css'; // Import global CSS

function App() {
  const [currentTest, setCurrentTest] = useState("test1");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const tests = [
    { id: "test1", label: "Test 1", component: <Test1 /> },
    { id: "test2", label: "Test 2", component: <Test2 /> },
    { id: "test3", label: "Test 3", component: <Test3 /> },
    { id: "test4", label: "Test 4", component: <Test4 /> },
    { id: "test5", label: "Test 5", component: <Test5 /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="App">
      <h1>SahCivilQuiz App</h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="close-btn" onClick={closeMenu}>&times;</div>
          {tests.map(({ id, label }) => (
            <button
              key={id}
              className={currentTest === id ? "active-btn" : ""}
              onClick={() => { setCurrentTest(id); closeMenu(); }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* All test buttons for larger screens */}
      <div className="desktop-menu">
        {tests.map(({ id, label }) => (
          <button
            key={id}
            className={currentTest === id ? "active-btn" : ""}
            onClick={() => setCurrentTest(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Display the selected test */}
      {tests.find(test => test.id === currentTest)?.component}

      {/* Include the Footer */}
      <Footer />
    </div>
  );
}

export default App;
