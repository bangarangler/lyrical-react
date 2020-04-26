import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { FETCH_SONGS } from "../../queries/fetchSongs";

import styles from "./SongCreate.module.css";

const SongCreate = () => {
  const [addSong, { data }] = useMutation(ADD_SONG);
  const history = useHistory();
  const [songTitle, setSongTitle] = useState("");

  const submitNewSong = (e) => {
    e.preventDefault();
    addSong({
      variables: { title: songTitle },
      refetchQueries: [{ query: FETCH_SONGS }],
    })
      .then(() => {
        setSongTitle("");
        history.push("/");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        Back
      </Link>
      <h3>Create a New Song</h3>
      <form className={styles.form} onSubmit={submitNewSong}>
        <label className={styles.label}>Song Title:</label>
        <input
          className={styles.input}
          type="text"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`;

export default SongCreate;
