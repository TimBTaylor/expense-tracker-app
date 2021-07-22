import React, { useContext } from "react";
import { Chart } from "./Chart";
import { TransactionList } from "./TransactionList";
import { Container, Row, Col } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

export const ProfileView = () => {
  const { transactions } = useContext(GlobalContext);

  const username = localStorage.getItem("username");

  const password = localStorage.getItem("password");

  return (
    <Container>
      <Row>
        <Col>
          <div className="profile-header">
            <h1 className="account-info">Account Information</h1>
            <div className="info">
              <h3 className="username-header">Username</h3>
              <br />
              <h4 className="username">{username}</h4>
              <br />
              <br />
              <h3 className="password-header">Password</h3>
              <br />
              <h4 className="password">{password}</h4>
            </div>
          </div>
        </Col>
        <Col>{transactions.length > 0 ? <Chart /> : <div></div>}</Col>
      </Row>

      <TransactionList />
    </Container>
  );
};
