import React, { Suspense} from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import useStore from "@/store";
import Loader from "@/components/Loading"

function Router(){
  return(
    <Routes>
      <Route path='/payment' component={Loader} />
      <Route path='/' exact component={Loader} />
    </Routes>
  )
};

function App() {
  return (
    <div className="body_section" >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </div>
  )
};

export default App;
