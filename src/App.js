import "./App.css";
import Header from "./Components/Header";
import RecomandedVideos from "./Components/RecomandedVideos";
import SideBar from "./Components/SideBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="app_page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="app_page">
              <SideBar />
              <RecomandedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
