import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

// pages
import Home from "./pages/home";
import About from "./pages/about";
// import Classmates from "./pages/classmates";
// import Resources from "./pages/resources";

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
      {/* <Route path={ROUTES.CLASSMATES} component={Classmates} /> */}
      {/* <Route path={ROUTES.RESOURCES} component={Resources} /> */}
      <Footer />
    </Router>
  );
}

export default App;
