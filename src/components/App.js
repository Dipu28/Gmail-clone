import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./header/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./header/Mail";
import EmailList from "./header/EmailList";
import Starred from "./sidebar/Starred";
import Snoozed from "./sidebar/Snoozed";
import Important from "./sidebar/Important";
import Sent from "./sidebar/Sent";
import Drafts from "./sidebar/Drafts";
import More from "./sidebar/More";
import SendMail from "./header/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { login, selectUser } from "../features/userSlice";
import Login from "./login/Login";
import { auth } from "../firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="aap">
          <Header />

          <div className="app__body">
            <Sidebar />
            <Switch>
              {/* Sidebar Route */}
              <Route path="/starred">
                <Starred />
              </Route>
              <Route path="/snoozed">
                <Snoozed />
              </Route>
              <Route path="/important">
                <Important />
              </Route>
              <Route path="/sent">
                <Sent />
              </Route>
              <Route path="/drafts">
                <Drafts />
              </Route>
              <Route path="/more">
                <More />
              </Route>

              {/* EmailList Routes */}
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
