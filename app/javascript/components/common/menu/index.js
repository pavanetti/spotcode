import React from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Columns,
  Container,
  Dropdown,
  Image,
  Navbar,
} from "react-bulma-components";
import styled from "styled-components";

import { FaUserCircle } from "react-icons/fa";
import logo from "assets/images/logo.png";

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const Menu = () => {
  const location = useLocation();

  const actionButton =
    location.pathname == "/" ? (
      <a href="/users/sign_in" className="is-pulled-right is-right">
        <Button outlined={true} color="white">
          Entrar
        </Button>
      </a>
    ) : (
      <Dropdown
        className="is-pulled-right is-right"
        color="dark"
        label={<FaUserCircle size="2em" />}
      >
        <Dropdown.Item value="other">
          <a href="/users/edit">Edit User</a>
        </Dropdown.Item>
        <Dropdown.Item value="other">
          <a href="/users/sign_out">Log Out</a>
        </Dropdown.Item>
      </Dropdown>
    );

  return (
    <>
      <Navbar color="dark">
        <Container>
          <ColumnsFullWidth className="is-mobile">
            <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
              <Image src={logo} />
            </Columns.Column>
            <Columns.Column>{actionButton}</Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
