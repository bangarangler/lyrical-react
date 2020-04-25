import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { graphql } from "react-apollo";

import styles from "./SongList.module.css";

const FETCH_SONGS = gql`
  query fetchSongs {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(FETCH_SONGS);

  const renderSongs = () => {
    return data.songs.map((s) => {
      return (
        <li key={s.id} className={styles.collectionItem}>
          {s.title}
        </li>
      );
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return <ul className={styles.collection}>{renderSongs()}</ul>;
};

export default SongList;
