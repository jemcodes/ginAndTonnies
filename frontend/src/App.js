import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DrinkListPage from './components/DrinkListPage';
import SingleDrinkPage from './components/SingleDrinkPage';
import CreateDrinkPage from './components/CreateDrinkPage';
import EditDrinkPage from './components/EditDrinkPage';
import SingleDrinkReviewsPage from './components/SingleDrinkReviewsPage';
import CreateReviewPage from './components/CreateReviewPage';
import EditReviewPage from './components/EditReviewPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/drinks/new">
            <CreateDrinkPage />
          </Route>
          <Route path="/drinks/:id/edit">
            <EditDrinkPage />
          </Route>
          <Route path="/drinks/:drinkId/reviews/new">
            <CreateReviewPage />
          </Route>
          <Route path="/drinks/:drinkId/reviews/:reviewId/edit">
            <EditReviewPage />
          </Route>
          <Route path="/drinks/:id/reviews">
            <SingleDrinkReviewsPage />
          </Route>
          <Route path="/drinks/:id">
            <SingleDrinkPage />
          </Route>
          <Route path="/drinks">
            <DrinkListPage />
          </Route>
          <Route path="/" exact>
            <h1>HOME PAGE OMG</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;