import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About1 from './components/About1'
import Alert from './components/Alert';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //weather dark mode is enabled or not
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      // document.title = "Dark mode is enabled now...";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      // document.title = "Light mode is enabled now...";
    }
  }

  return (
    <>
        <Navbar title="Logo" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />
        </div>
      {/* <Router>
        <Navbar title="Logo" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About1 />}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />}/>
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
