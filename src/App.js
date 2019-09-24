import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import About from './views/about'
import Landing from './views/landing'
import Register from './views/register'
import Contact from './views/contact'

function App() {
  return (
    <Router>
   
      <Route path="/" exact component={Landing} />
      <Route path="/about/" component={About} />
      <Route path="/register/" component={Register} />
      <Route path="/contact/" component={Contact} />

    </Router>
  );
}

export default App;
