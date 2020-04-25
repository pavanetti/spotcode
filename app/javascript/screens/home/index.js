import React from "react";
import styled from "styled-components";
import { Button, Columns, Heading } from "react-bulma-components";
import SectionWrapper from "components/common/section-wrapper";

const MainHeading = styled(Heading)`
  margin-top: 50px;
`;

const DescriptionList = styled.ul`
  margin-top: 50px;
  font-size: 20px;
  list-style-type: square;
`;

const ButtonSubscribe = styled(Button)`
  border-width: 2px;
  margin-top: 50px;
`;

const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className="has-text-weight-light has-text-centered has-text-white">
            Seu app de <br />
            <span className="has-text-success">música</span>
          </MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column
          mobile={{ size: 8, offset: 1 }}
          desktop={{ size: 4, offset: 2 }}
        >
          <DescriptionList className="has-text-white">
            <li>
              Suas músicas <b>favoritas</b>
            </li>
            <li>
              Seus <b>podcasts</b>
            </li>
            <li>
              As novas <b>descobertas</b>
            </li>
          </DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
          <a href="/users/sign_up">
            <ButtonSubscribe className="is-success is-outlined is-large has-text-white">
              Cadastrar agora
            </ButtonSubscribe>
          </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
};

export default HomeScreen;
