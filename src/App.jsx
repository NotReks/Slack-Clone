import React from "react";
import './App.css';
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './component/Chat'
import Login from "./component/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />

            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  {/* <Chat /> */}
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome </h1>
                </Route>
              </Switch>
              {/* React router => chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;