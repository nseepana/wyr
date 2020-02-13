import React from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Home from "./components/dashboard/Home";
import LeadBoard from "./components/dashboard/LeadBoard";
import NewQuestions from "./components/dashboard/NewQuestions";

import { Router, Link } from "@reach/router";
import MainNav from './components/dashboard/MainNav';


function App() {
  return (
    <React.Fragment>
      <header className="header">
        <nav>
          <Link className="brand" to="/">Would you rather</Link>
          <Router>
            <MainNav path="dashboard/:userId/*" ></MainNav>
          </Router>
        </nav>
      </header>
      <main>
        <div className="">
          <Router>
            <Login path="login" />
            <Dashboard path="dashboard/:userId">
              <Home default path="home" />
              <NewQuestions path="newquestion" />
              <LeadBoard path="leadboard" />
            </Dashboard>
          </Router>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
