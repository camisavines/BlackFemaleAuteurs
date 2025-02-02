import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Auteurs from "./pages/auteurs";
import Adornment from "./pages/adornment";
// import Classmates from "./pages/classmates";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import * as ROUTES from "./constants/routes";

// styles
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Navbar />


      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.AUTEURS} component={Auteurs} />
      <Route path={ROUTES.ADORN} component={Adornment} />
      {/* <Route path={ROUTES.CLASSMATES} component={Classmates} /> */}
      <Footer />
    </Router>
  );
}

export default App;
