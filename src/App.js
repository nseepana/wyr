import React from 'react';
import './App.scss';
import './component.scss';
import './card.scss';
import Dashboard from './components/dashboard';
// import Login from './components/login';
import Home from "./components/dashboard/Home";
import LeadBoard from "./components/dashboard/LeadBoard";
import NewQuestions from "./components/dashboard/NewQuestions";

import { Router, Link } from "@reach/router";
import MainNav from './components/dashboard/MainNav';
import LoginContainer from './containers/LoginContainer';


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <nav>
          <Link className="brand" to="/">Would you rather</Link>
          <Router>
            <MainNav path="dashboard/:userId/*"></MainNav>
          </Router>
        </nav>
      </header>
      <main className="main">
        <div className="">
          <Router>
            <LoginContainer path="login" />
            <Dashboard path="dashboard/:userId">
              <Home default path="home" />
              <NewQuestions path="newquestion" />
              <LeadBoard path="leadboard" />
            </Dashboard>
          </Router>
        </div>
      </main>
      {/* <footer className="footer">
        Naresh
      </footer> */}
    </div>
  );
}

export default App;
