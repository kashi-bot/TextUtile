import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/About';
import Alert from './component/Alert';
import Text from './component/Text';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
      setBtnText("Disable Dark Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    // <Router>
      <div>
        <Navbar title="TexUtills" abouttitle="About" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Text heading="Enter the Text" mode={mode} showAlert={showAlert} />} />
          </Routes> */}
          <Text heading="Enter the Text" mode={mode} showAlert={showAlert} />
        </div>
      </div>
    // </Router>
  );
}

export default App;

