import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import styles from "./LyricCreate.module.css";

const LyricCreate = ({ songId }) => {
  const [addLyricToSong] = useMutation(ADD_LYRICS);
  const [content, setContent] = useState("");

  const handleSubmitLyric = (e) => {
    e.preventDefault();
    addLyricToSong({ variables: { content, songId } }).then(() => {
      setContent("");
    });
  };

  return (
    <form className={styles.lyricCreate__form} onSubmit={handleSubmitLyric}>
      <label className={styles.lyricCreate__label}>Add a Lyric</label>
      <input
        className={styles.lyricCreate__input}
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
};

const ADD_LYRICS = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default LyricCreate;
