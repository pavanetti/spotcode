import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Columns, Heading } from "react-bulma-components";
import AlbumsService from "services/albums";
import Album from "../common/album";

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Discovery = () => {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendAlbums, setRecommendAlbums] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumsService.index();
    setRecentAlbums(response.data.recent_albums);
    setRecommendAlbums(response.data.recommend_albums);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  const columnFromAlbum = (album, key) => (
    <Columns.Column key={key} desktop={{ size: 3 }} mobile={{ size: 6 }}>
      <Album
        id={album.id}
        artist_name={album.artist_name}
        title={album.title}
        cover_url={album.cover_url}
      />
    </Columns.Column>
  );

  return (
    <>
      {recentAlbums.length > 0 && (
        <div>
          <Heading className="has-text-white" size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className="is-mobile">
            {recentAlbums.map(columnFromAlbum)}
          </Columns>
        </div>
      )}
      {recommendAlbums.length > 0 && (
        <DivVSpaced>
          <Heading className="has-text-white" size={4}>
            Recomendadas
          </Heading>
          <Columns className="is-mobile">
            {recommendAlbums.map(columnFromAlbum)}
          </Columns>
        </DivVSpaced>
      )}
    </>
  );
};

export default Discovery;
