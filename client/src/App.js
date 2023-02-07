import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { client } from "./lib/apollo";

import {
  LandingPageNavbar,
  Jumbotron,
  SectionBenefit,
  SectionTheme,
  ScrollTop,
  SectionBlog,
  Footer,
  Blogs,
  Article,
} from "./components";

import GoToTop from "./services/GoToTop";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageNavbar />
            <Jumbotron />
            <SectionBenefit />
            <SectionTheme />
            <SectionBlog />
          </Route>
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/blog/:title" component={Article} />
        </Switch>

        <Footer />
        <ScrollTop />
        <GoToTop />
      </Router>
    </ApolloProvider>
  );
};

export default App;
