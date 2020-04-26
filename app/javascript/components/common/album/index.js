import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Heading, Image } from "react-bulma-components";

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Album = ({ id, cover_url, title, artist_name }) => {
  return (
    <Link to={`/album/${id}`}>
      <Image src={cover_url} />
      <DivVSpaced>
        <Heading size={6} className="has-text-white">
          {title}
        </Heading>
        <Heading size={6} className="has-text-white" subtitle>
          {artist_name}
        </Heading>
      </DivVSpaced>
    </Link>
  );
};

export default Album;
