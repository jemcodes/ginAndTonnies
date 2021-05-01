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
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/drinks/new">
            <>
              <Navigation isLoaded={isLoaded} />
              <CreateDrinkPage />
              <Footer />
            </>
          </Route>
          <Route path="/drinks/:id/edit">
            <>
              <Navigation isLoaded={isLoaded} />
              <EditDrinkPage />
            </>
          </Route>
          <Route path="/drinks/:drinkId/reviews/new">
            <>
              <Navigation isLoaded={isLoaded} />
              <CreateReviewPage />
            </>
          </Route>
          <Route path="/drinks/:drinkId/reviews/:reviewId/edit">
            <>
              <Navigation isLoaded={isLoaded} />
              <EditReviewPage />
            </>
          </Route>
          <Route path="/drinks/:id">
            <>
              <Navigation isLoaded={isLoaded} />
              <SingleDrinkPage />
            </>
          </Route>
          <Route path="/drinks">
            <>
              <Navigation isLoaded={isLoaded} />
              <DrinkListPage />
            </>
          </Route>
          <Route path="/" exact>
            <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;