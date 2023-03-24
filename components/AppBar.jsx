import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const AppBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Router</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/">
            <span className="mx-3 text-light"> Home </span>
          </Link>
          <Link href="/about">
            <span className="mx-3 text-light"> About </span>
          </Link>
          <Link href="/product">
            <span className="mx-3 text-light"> Products </span>
          </Link>
          <Link href="/profile">
            <span className="mx-3 text-light"> Profile </span>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default AppBar;
