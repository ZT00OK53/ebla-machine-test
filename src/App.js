import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import { handleInitialData } from "./actions/initialData";
import Error from "./pages/Error";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Poll from "./pages/Poll";
import PollPreview from "./pages/PollPreview";
import PollPreviewList from "./pages/PollPreviewList";
import Private from "./pages/Private";
import ScorecardList from "./pages/ScorecardList";
import { Grid } from 'semantic-ui-react';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, answeredIds, unansweredIds } = this.props;
    return (
      <Router>
        <Fragment>
          {authedUser !== null && (
            <div>
              <NavBar />
            </div>
          )}
          <ContentGrid>
            <Switch>
              <Route path="/" exact component={withRouter(Login)}/>
              <Private
                isAuthenticated={authedUser !== null}
                exact
                path="/questions"
                component={(props) => (
                  <PollPreviewList
                    {...props}
                    answeredIds={answeredIds}
                    unansweredIds={unansweredIds}
                  />
                )}
              />
              <Private
                isAuthenticated={authedUser !== null}
                path="/questions/:id"
                component={(props) => (
                  <Poll
                    {...props}
                    answeredIds={answeredIds}
                    unansweredIds={unansweredIds}
                  />
                )}
              />
              <Private
                isAuthenticated={authedUser !== null}
                path="/add"
                component={PollPreview}
              />
              <Private
                isAuthenticated={authedUser !== null}
                path="/leaderboard"
                component={ScorecardList}
              />
              <Route component={withRouter(Error)} />
            </Switch>
          </ContentGrid>
        </Fragment>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column className="d-flex justify-content-center">{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authedUser, users, questions }) {
  if (users && authedUser) {
    const unansweredIds = [];
    const answeredIds = Object.keys(users[authedUser].answers);
    const questionsId = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    questionsId.map(
      (id) => answeredIds.includes(id) === false && unansweredIds.push(id)
    );
    answeredIds.sort((a, b) => questions[b] - questions[a]);
    return {
      authedUser,
      answeredIds,
      unansweredIds
    };
  }
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);