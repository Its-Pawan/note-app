import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  //-----------------Theme Logic----------------------------
  let customStyle = {
    color: 'black',
    backgroundColor: 'white',
  }


  const [myStyle, setMyStyle] = useState(customStyle)

  const [themeIcon, setThemeIcon] = useState('moon')

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: "white"
      })
      setThemeIcon('moon')
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Home"
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: "rgb(44, 62, 80)",
      })
      setThemeIcon('sun')
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Home Dark"
    }
  }
  // ------------------------------------------------------------
  // const [myStyle, setMyStyle] = useState({ color: 'rgb(44, 62, 80)', backgroundColor: "white" })
  // const [themeIcon, setThemeIcon] = useState('moon')

  // const toggleStyle = () => {
  //   const isLightMode = myStyle.color === 'white';

  //   setMyStyle({
  //     color: isLightMode ? 'rgb(44, 62, 80)' : 'white',
  //     backgroundColor: isLightMode ? 'white' : 'rgb(44, 62, 80)',
  //   });
  //   setThemeIcon(isLightMode ? 'moon' : 'sun');
  // }
  //-----------------Theme Logic----------------------------

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <div id="body" style={myStyle}>
      {/* <Router> */}
      <Navbar
        logo="TextUtils"
        link1="Home"
        link2="About"
        myStyle={myStyle}
        toggleStyle={toggleStyle}
        themeIcon={themeIcon}
      />
      <hr />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm myStyle={myStyle} showAlert={showAlert} />
        {/* <Routes> */}
        {/* <Route
              path="/"
              element={<TextForm myStyle={myStyle} showAlert={showAlert} />}
            /> */}
        {/* <Route
              path="/about"
              element={<About toggleStyle={toggleStyle} myStyle={myStyle} />}
            /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

