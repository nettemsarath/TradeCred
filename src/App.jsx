import React, {useEffect, Suspense} from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";

import useStore from "@/store";

import Loader from "@/components/Loading"

function App() {
  return (
    <div className="body_section" >
      <Header />

      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/payment' component={Loader} />
            <Route path='/' exact component={Loader} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
};

export default App;
