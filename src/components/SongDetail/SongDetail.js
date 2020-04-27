import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { FETCH_SINGLE_SONG } from "../../queries/fetchSingleSong";

import styles from "./SongDetail.module.css";

const SongDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FETCH_SINGLE_SONG, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;
  console.log("error", error);
  console.log("data", data);

  return (
    <div>
      <h3>Song Detail</h3>
      {data.song.title}
    </div>
  );
};

export default SongDetail;
