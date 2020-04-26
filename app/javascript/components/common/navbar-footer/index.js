import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Columns, Container, Navbar } from "react-bulma-components";
import { FaSearch, FaHome, Faheart, FaHeart } from "react-icons/fa";

const NavbarWithBorder = styled(Navbar)`
  border-top: 1px solid white;
`;

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 10px;
`;

const NavbarFooter = () => {
  return (
    <>
      <NavbarWithBorder fixed="bottom" color="dark">
        <Container>
          <ColumnsFullWidth className="is-mobile is-vcentered">
            <Columns.Column className="has-text-centered">
              <Link to="/discovery" className="has-text-white">
                <FaHome size="25px" />
              </Link>
            </Columns.Column>
            <Columns.Column className="has-text-centered">
              <Link to="/search" className="has-text-white">
                <FaSearch size="25px" />
              </Link>
            </Columns.Column>
            <Columns.Column className="has-text-centered">
              <Link to="/favorites" className="has-text-white">
                <FaHeart size="25px" />
              </Link>
            </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </NavbarWithBorder>
    </>
  );
};

export default NavbarFooter;
