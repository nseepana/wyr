import React, { Component } from 'react';
import './App.scss';
import './component.scss';
import './card.scss';
// import Dashboard from './components/dashboard';
// import Login from './components/login';
// import Home from "./components/dashboard/Home";
import LeadBoard from "./components/dashboard/LeadBoard";
import NewQuestions from "./components/dashboard/NewQuestions";

import { Router, navigate } from "@reach/router";
import MainNav from './components/dashboard/MainNav';
import LoginContainer from './containers/LoginContainer';
import { connect } from 'react-redux';
import DashboardContainer from './containers/DashboardContainer';
import HomeContainer from './containers/HomeContainer';


class App extends Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.hasUserId) {
      try {
        navigate('/login')
      } catch (e) {
        console.log(e)
      };
    }
  }
  render() {
    // const { hasUserId } = this.props;
    return (
      <div className="wrapper">
        <header className="header">
          <nav>
            <p className="brand">Would you rather</p>
            <Router>
              <MainNav path="dashboard/*"></MainNav>
            </Router>
          </nav>
        </header>
        <main className="main">
          <div className="">
            <Router>
              <LoginContainer default path="login" />
              <DashboardContainer path="dashboard">
                <HomeContainer default path="home" />
                <NewQuestions path="newquestion" />
                <LeadBoard path="leadboard" />
              </DashboardContainer>
            </Router>
          </div>
        </main>
        {/* <footer className="footer">
        Naresh
      </footer> */}
      </div>
    )
  }

}



export default connect((state) => {
  const { auth: { hasUserId } } = state;
  return { hasUserId }
})(App);