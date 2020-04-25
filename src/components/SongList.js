import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
// import { graphql } from "react-apollo";

const FETCH_SONGS = gql`
  query fetchSongs {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(FETCH_SONGS);
  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return <div>{data.songs.map((s) => s.title)}</div>;
};

export default SongList;
