import React from "react";
import styled from "styled-components";
import { Columns, Heading } from "react-bulma-components";
import Album from "../album";

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Discovery = () => {
  const mock = [
    {
      id: 1,
      title: "Gubernator",
      artist_name: "Andrew Howes",
      cover_url:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9c978ea9255b38d1230bcfec1dabd9bb9dd75583/gubernator.jpg",
    },
    {
      id: 2,
      title: "The Great Bear",
      artist_name: "Andrew Howes",
      cover_url:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--abdbdc294430f45b852068658a385e72ae330212/the_great_bear.jpg",
    },
    {
      id: 3,
      title: "Barcelona",
      artist_name: "Yellow Chair",
      cover_url:
        "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--96c812663f514b2e7c70ccbb89ba3429573df5d6/barcelona.jpg",
    },
  ];

  const albums = mock.map((album, key) => (
    <Columns.Column key={key} desktop={{ size: 3 }} mobile={{ size: 6 }}>
      <Album
        id={album.id}
        artist_name={album.artist_name}
        title={album.title}
        cover_url={album.cover_url}
      />
    </Columns.Column>
  ));

  return (
    <>
      <div>
        <Heading className="has-text-white" size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className="is-mobile">{albums}</Columns>
      </div>
      <DivVSpaced>
        <Heading className="has-text-white" size={4}>
          Recomendadas
        </Heading>
        <Columns className="is-mobile">{albums}</Columns>
      </DivVSpaced>
    </>
  );
};

export default Discovery;
