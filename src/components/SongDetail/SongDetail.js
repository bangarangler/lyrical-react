import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams, Link } from "react-router-dom";
import { FETCH_SINGLE_SONG } from "../../queries/fetchSingleSong";

// COMPONENTS
import LyricCreate from "../LyricCreate/LyricCreate";
import LyricList from "../LyricList/LyricList";

import styles from "./SongDetail.module.css";

const SongDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_SONG, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const { song } = data;
  return (
    <div className={styles.songDetailContainer}>
      <Link to="/" className={styles.backLink}>
        Back
      </Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

export default SongDetail;
