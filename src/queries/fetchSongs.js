import gql from "graphql-tag";

export const FETCH_SONGS = gql`
  query fetchSongs {
    songs {
      id
      title
    }
  }
`;
