import React from "react";
import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { FETCH_SONGS } from "../../queries/fetchSongs";

import styles from "./SongList.module.css";

// const FETCH_SONGS = gql`
//   query fetchSongs {
//     songs {
//       id
//       title
//     }
//   }
// `;

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
  return (
    <div className={styles.collection__container}>
      <ul className={styles.collection}>{renderSongs()}</ul>
      <Link to="/songs/new" className={styles.collection__link}>
        +
      </Link>
    </div>
  );
};

export default SongList;
