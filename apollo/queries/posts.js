import { gql } from "@apollo/client";

const POSTS = gql`
  query Post {
    posts(sort: "Date:desc", pagination: { start: 0, limit: 1000 }) {
      data {
        id

        attributes {
          title
          Date
          createdAt
          updatedAt
          publishedAt
          description
          slug
          images {
            data {
              attributes {
                url
              }
            }
          }
          article
        }
      }
      meta {
        pagination {
          page
          pageSize
          total
          pageCount
        }
      }
    }
  }
`;

const POSTSID = gql`
  query Post {
    posts(sort: "id:asc", pagination: { start: 0, limit: 1000 }) {
      data {
        id
      }
    }
  }
`;

const POSTSSLUG = gql`
  query Post {
    posts(pagination: { start: 0, limit: 1000 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

export { POSTSID, POSTSSLUG };
export default POSTS;
