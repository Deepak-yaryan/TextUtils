import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About1 from './components/About1'
import Alert from './components/Alert';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }

  const togglemode = () => {
    removeBodyClasses();
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "Dark mode is enabled now...";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      // document.title = "Light mode is enabled now...";
    }
  }

  const colormode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    // const str = cls;
    // console.log(cls);
    // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    if(cls === 'primary'){
      showAlert(`Blue Color has been enabled`);
    }
    else if(cls === 'danger'){
      showAlert(`Red Color has been enabled`);
    }
    else if(cls === 'success'){
      showAlert(`Green Color has been enabled`);
    }
    else{
      showAlert(`Yellow Color has been enabled`);
    }
  }

  return (
    <>
      {/* <Navbar title="Logo" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading='Enter the text to Analyze' mode={mode} />
        </div> */}
      <Router>
        <Navbar title="Logo" mode={mode} togglemode={togglemode} colormode={colormode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About1 mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;