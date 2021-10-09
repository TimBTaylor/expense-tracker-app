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
import LinkedIn from "../images/linkedin.png";
import Github from "../images/github.png";
import Portfolio from "../images/portfolio.png";

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
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("id", res.data._id);
            setLoggedIn(true);
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
      if (usernameIndex < 0 || passwordIndex < 0) {
        setIncorrectRegister(false);
        setIncorrectLogin(true);
        return console.log("log in failed");
      }
      if (usersData[usernameIndex].password === password) {
        localStorage.setItem("username", usersData[usernameIndex].username);
        localStorage.setItem("password", usersData[passwordIndex].password);
        localStorage.setItem("id", usersData[usernameIndex]._id);
        setLoggedIn(true);
        console.log("log in successful");
      }
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
                href="#"
                onClick={goToHome}
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
            <h1>Expense Tracker</h1>
          </div>
          <div className="login-warnings"></div>
          <div className="login-inputs">
            <input
              className="username"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            />
            {usernameUsed}
            <br />
            <input
              type="password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {registrationFail}
            {logInFail}
            <br />
            <button onClick={createUser}>Register Account</button>
            <button onClick={logIn}>Log in</button>
          </div>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tim-taylor-aaa970207/"
              className="linkedin-link"
            >
              <img className="linkedin-image" src={LinkedIn} alt="linkedin" />
              <br />
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TimBTaylor"
              className="github-link"
            >
              <img className="github-image" src={Github} alt="github" />
              <br />
              Github
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://timbtaylor.github.io/personal-portfolio/"
              className="portfolio-link"
            >
              <img
                className="portfolio-image"
                src={Portfolio}
                alt="portfolio"
              />
              <br />
              Portfolio
            </a>
          </div>
        </div>
      )}
    </>
  );
};
