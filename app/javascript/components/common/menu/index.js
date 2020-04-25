import React from "react";
import {
  Navbar,
  Container,
  Columns,
  Image,
  Button,
} from "react-bulma-components";
import styled from "styled-components";

import logo from "assets/images/logo.png";

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
`;
const Menu = () => (
  <>
    <Navbar color="dark">
      <Container>
        <ColumnsFullWidth className="is-mobile">
          <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
            <Image src={logo} />
          </Columns.Column>
          <Columns.Column>
            <a href="/users/sign_in" className="is-pulled-right is-right">
              <Button outlined={true} color="white">
                Entrar
              </Button>
            </a>
          </Columns.Column>
        </ColumnsFullWidth>
      </Container>
    </Navbar>
  </>
);

export default Menu;
