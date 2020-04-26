import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import styles from "./SongCreate.module.css";

const SongCreate = () => {
  const [addSong, { data }] = useMutation(ADD_SONG);
  const [songTitle, setSongTitle] = useState("");

  const submitNewSong = (e) => {
    e.preventDefault();
    addSong({ variables: { title: songTitle } });
  };

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={submitNewSong}>
        <label>Song Title:</label>
        <input
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
