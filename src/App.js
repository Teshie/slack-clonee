import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Sidebar from "./Components/SideBar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Components/SideBar/database";
import Login from "./Components/Login/Login";
import Spinner from "react-spinkit";
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const Apploading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const ApploadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <Apploading>
        <ApploadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </ApploadingContent>
      </Apploading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
