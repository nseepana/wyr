import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Home from "./components/dashboard/Home";
import LeadBoard from "./components/dashboard/LeadBoard";
import NewQuestions from "./components/dashboard/NewQuestions";

import { Router, Link } from "@reach/router";
import DashNav from './components/dashboard/DashNav';
// import DashHome from './components/dashboard/DashHome';
// import DashHome from './components/dashboard/DashHome';

function App() {
  return (

    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="home">Would you rather</Link>
        <Router>
          <Login path="/" />
          {/* expacted path have to specified */}
          <DashNav path="dashboard/:userId/*"></DashNav>
        </Router>
      </nav>
      <main id='main-block'>
        <Router>
          {/* sub paths specify here */}
          <Dashboard path="dashboard/:userId">
            <Home default path="home" />
            <NewQuestions path="newquestion" />
            <LeadBoard path="leadboard" />
          </Dashboard>
        </Router>
      </main>
    </div>
  );
}

export default App;
