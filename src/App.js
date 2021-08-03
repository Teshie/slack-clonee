import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Sidebar from "./Components/SideBar/Sidebar";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* <Chat/> */}
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;
