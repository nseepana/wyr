import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Home from "./components/dashboard/Home";
import LeadBoard from "./components/dashboard/LeadBoard";
import NewQuestions from "./components/dashboard/NewQuestions";

import { Router, Link } from "@reach/router";
import DashHome from './components/dashboard/DashHome';
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
          <DashHome path="dashboard/:userId/*"></DashHome>
        </Router>
      </nav>
      <main id='main-block'>
        <Router>
          {/* sub path have to specified */}
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
