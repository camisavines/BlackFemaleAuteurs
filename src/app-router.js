import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./pages/home";
import Navbar from "./components/navbar";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path={ROUTES.HOME} component={Home} />

    </Router>
  );
}

export default App;
