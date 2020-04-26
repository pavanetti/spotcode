import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Columns, Heading, Image } from "react-bulma-components";
import AlbumsService from "services/albums";

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Albums = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({});

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);
    setAlbum(response.data);
  }

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <>
      <Columns className="is-centered is-vcentered is-mobile">
        <Columns.Column desktop={{ size: 3 }} className="has-text-centered">
          <Image src={album.cover_url} />
          <DivVSpaced>
            <Heading size={5} className="has-text-white">
              {album.title}
            </Heading>
            <Heading size={6} subtitle className="has-text-white">
              {album.artist_name}
            </Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
    </>
  );
};

export default Albums;
