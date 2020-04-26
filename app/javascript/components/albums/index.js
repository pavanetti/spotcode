import React from "react";
import styled from "styled-components";
import { Columns, Heading, Image } from "react-bulma-components";

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Albums = () => {
  return (
    <>
      <Columns className="is-centered is-vcentered is-mobile">
        <Columns.Column desktop={{ size: 3 }} className="has-text-centered">
          <Image src="" />
          <DivVSpaced>
            <Heading size={5} className="has-text-white">
              Título
            </Heading>
            <Heading size={6} subtitle className="has-text-white">
              Subtítulo
            </Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
    </>
  );
};

export default Albums;
