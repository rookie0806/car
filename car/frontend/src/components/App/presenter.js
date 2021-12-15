import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from "react-router";
import "./styles.module.scss";
import Summary from "../Summary";
import MSummary from "../MSummary";
import MLocation from "../MLocation";
import { connect } from "react-redux";
import Navigation from "../Navigation";
import Location from "../Location";
import Footer from "../Footer";
import MFooter from "../MFooter";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const App = props => (
  <Switch>
    <Route path="/">
      <MainRoutes key={1} />
    </Route>
  </Switch>
  
);

const MainRoutes = props => [
  <>
  <BrowserView>
    <Navigation key={1} />
    <Summary key={2}/>
    <Location key={2}/>
    <Footer key={2}/>
  </BrowserView>
  <MobileView>
    <Navigation key={1} />
    <MSummary key={2}/>
    <MLocation key={2}/>
    <MFooter key={2}/>
  </MobileView>
  </>
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};


export default withRouter(connect()(App))