import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import { ProfileView } from "./ProfileView";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

export const Main = () => {
  const [loggedin, setLoggedIn] = useState(false);
  const [incorrectRegister, setIncorrectRegister] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [nameTaken, setNameTaken] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          "https://expensetrackerbytim.herokuapp.com/expensetracker/allusers"
        )
        .then((res) => {
          setUsersData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getData();
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    if (username.length > 1 && password.length > 1) {
      const usernames = usersData.map((user) => {
        return user.username;
      });
      const isTaken = usernames.filter((takenUsernames) => {
        return takenUsernames === username;
      });

      if (isTaken.length > 0) {
        setNameTaken(true);
      } else {
        await axios
          .post(
            "https://expensetrackerbytim.herokuapp.com/expensetracker/user",
            {
              name: `${username}`,
              password: `${password}`,
            }
          )
          .then((res) => {
            console.log(res);
            setLoggedIn(true);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("id", res.data._id);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    } else {
      setIncorrectLogin(false);
      setIncorrectRegister(true);
    }
  };

  const logIn = async (e) => {
    e.preventDefault();

    if (username.length > 1 && password.length > 1) {
      //returns array of all usernames
      const users = usersData.map((user) => {
        return user.username;
      });
      //returns array of all passwords
      const usersPasswords = usersData.map((user) => {
        return user.password;
      });
      const usernameIndex = users.indexOf(username);
      const passwordIndex = usersPasswords.indexOf(password);
      if (
        usernameIndex !== passwordIndex ||
        usernameIndex < 0 ||
        passwordIndex < 0
      ) {
        setIncorrectRegister(false);
        setIncorrectLogin(true);
        return console.log("log in failed");
      }
      if (usernameIndex === passwordIndex) {
        setLoggedIn(true);
        console.log("log in successful");
      }
      localStorage.setItem("username", usersData[usernameIndex].username);
      localStorage.setItem("password", usersData[passwordIndex].password);
      localStorage.setItem("id", usersData[usernameIndex]._id);
    } else {
      setIncorrectRegister(false);
      setIncorrectLogin(true);
    }
  };

  const usernameUsed = nameTaken ? (
    <h1 className="username-taken">Username is already taken</h1>
  ) : (
    <div></div>
  );

  const registrationFail = incorrectRegister ? (
    <h1 className="too-short">
      Username and password must be 1 character or more
    </h1>
  ) : (
    <div></div>
  );

  const logInFail = incorrectLogin ? (
    <h1 className="incorrect-info">
      Incorrect username and password combination
    </h1>
  ) : (
    <div></div>
  );

  const goToProfile = () => {
    setProfile(true);
  };

  const goToHome = () => {
    setProfile(false);
  };

  return (
    <>
      {loggedin ? (
        <GlobalProvider>
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="md"
            variant="light"
            className="navbar"
          >
            <ReactBootStrap.Container>
              <ReactBootStrap.Navbar.Brand
                className="navbar-expense"
                href="#home"
              >
                Expense Tracker
              </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="me-auto">
                  <ReactBootStrap.Nav.Link
                    className="nav-link"
                    onClick={goToHome}
                    href="#"
                  >
                    Home
                  </ReactBootStrap.Nav.Link>
                  <ReactBootStrap.Nav.Link
                    className="nav-link"
                    onClick={goToProfile}
                    href="#"
                  >
                    Profile
                  </ReactBootStrap.Nav.Link>
                  <ReactBootStrap.Nav.Link
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/TimBTaylor/expense-tracker-app"
                  >
                    See Code
                  </ReactBootStrap.Nav.Link>
                  <ReactBootStrap.Nav.Link
                    target="_blank"
                    className="nav-link"
                    href="https://timbtaylor.github.io/personal-portfolio/projects.html"
                  >
                    Portfolio
                  </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
          {profile ? (
            <ProfileView />
          ) : (
            <div className="container">
              <Header />
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
              <TransactionList />
            </div>
          )}
        </GlobalProvider>
      ) : (
        <div className="login">
          <div className="welcome">
            <h1>Welcome to Expense Tracker by Tim</h1>
          </div>
          <h2 className="portfolio-code">
            You can visit my portfolio{" "}
            <span>
              <a href="https://timbtaylor.github.io/personal-portfolio/">
                here
              </a>
            </span>
            <br />
            as well as the code for this project{" "}
            <span>
              <a href="https://github.com/TimBTaylor/expense-tracker-app">
                here
              </a>
            </span>
          </h2>
          <div className="login-warnings">
            {usernameUsed}
            {registrationFail}
            {logInFail}
          </div>
          <div className="login-inputs">
            <input
              className="username"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <button onClick={createUser}>Register</button>
            <br />
            <button onClick={logIn}>Log in</button>
          </div>
        </div>
      )}
    </>
  );
};
