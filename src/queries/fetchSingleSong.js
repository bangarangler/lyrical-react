import gql from "graphql-tag";

export const FETCH_SINGLE_SONG = gql`
  query FetchSingleSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
