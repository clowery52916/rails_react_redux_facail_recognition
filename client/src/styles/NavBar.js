import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Nav = styled.div `
  height: 15vh;
  width: 100vw;
  background-color: #aaaaaa;
  color: white;
  font-family: cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-bottom: .9px solid #c1c1c1;
  a {
    color: white;
    margin: auto;
  }
`;

const LinkContainer = styled.div `
  display: flex;
  margin-right: 10px;
  font-family: cursive;
  color: inherit;
`;

const LinkMargin = styled.div `
  margin: 10px;

`;

const LogoFlex = styled.div `
display: flex;
margin-left: 10px;
`

class Navbar extends Component {
  render() {
    return (<Nav>
      <LogoFlex>
        <Link to="/">
          <h2>SqaudBox</h2>
        </Link>
      </LogoFlex>