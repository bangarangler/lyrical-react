import React from "react";

import styles from "./LyricList.module.css";

const LyricList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return (
        <li key={id} className={styles.lyricList__li}>
          {content}
        </li>
      );
    });
  };

  return <ul className={styles.lyricList__ul}>{renderLyrics()}</ul>;
};

export default LyricList;
