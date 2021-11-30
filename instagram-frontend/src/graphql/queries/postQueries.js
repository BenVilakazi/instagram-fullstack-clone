import { gql } from '@apollo/client';

export const FIND_FEED = gql`
  query findFeed($limit: Int, $cursor: String) {
    findFeed(limit: $limit, cursor: $cursor) {
      hasMore
      posts {
        id
        image
        contentType
        caption
        date
        likes {
          id
        }
        comments {
          comment
          id
          user {
            displayName
            id
          }
        }
        user {
          displayName
          username
          id
          avatar {
            image
            contentType
          }
        }
      }
    }
  }
`;

export const FIND_PROFILE_FEED = gql`
  query findProfileFeed($id: ID!, $skip: Int!, $limit: Int!) {
    findProfileFeed(id: $id, skip: $skip, limit: $limit) {
      posts {
        id
        image
        commentCount
        likeCount
        contentType
      }
      hasMore
    }
  }
`;

export const FIND_POST_BY_ID = gql`
  query findPost($id: ID!) {
    findPost(id: $id) {
      id
      image
      date
      contentType
      caption
      likes {
        id
      }
      user {
        username
        displayName
        avatar {
          image
          contentType
        }
      }
    }
  }
`;

export const FIND_POST_COMMENTS = gql`
  query FindPostComments($id: ID!, $limit: Int!, $skip: Int!) {
    findPostComments(id: $id, limit: $limit, skip: $skip) {
      hasMore
      comments {
        user {
          displayName
          id
          avatar {
            image
            contentType
          }
        }
        id
        comment
        date
      }
    }
  }
`;
