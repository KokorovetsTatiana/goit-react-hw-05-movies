import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./route.js";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.js"));

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.js"));

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.js")
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />

        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
