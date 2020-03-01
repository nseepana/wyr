import React, { Component } from 'react';
import { Router, navigate, Redirect } from "@reach/router";
import MainNav from './components/dashboard/MainNav';
import LoginContainer from './containers/LoginContainer';
import { connect } from 'react-redux';
import DashboardContainer from './containers/DashboardContainer';
import NewQuestionContainer from './containers/NewQuestionContainer';
import LeadBoardContainer from './containers/LeadBoardContainer';
import QuestionsContainer from './containers/QuestionsContainer';
import ViewQuestionContainer from './containers/ViewQuestionContainer';
import PageNotForund from './components/PageNotForund';


class App extends Component {
  componentDidMount() {
    if (!this.props.hasUserId) {
      try {
        navigate('/login');
      } catch (e) {
        console.log(e);
      };
    }
  }
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <nav>
            <Router>
              <MainNav path="dashboard/*"></MainNav>
            </Router>
          </nav>
        </header>
        <main className="main">

          <Router>
            <LoginContainer path="login" />
            <DashboardContainer path="dashboard">
              <Redirect from="/" to="home" noThrow></Redirect>
              <QuestionsContainer path="home"></QuestionsContainer>
              <ViewQuestionContainer path="home/:questionId" />
              <NewQuestionContainer path="newquestion" />
              <LeadBoardContainer path="leadboard" />
              <PageNotForund default></PageNotForund>
            </DashboardContainer>
            <PageNotForund default></PageNotForund>
          </Router>

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