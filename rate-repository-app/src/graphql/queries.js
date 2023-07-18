import { gql } from "@apollo/client";
import { REPO_DETAILS } from "./fragments";

export const ALL_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          ...RepoDetails
        }
      }
    }
  }
  ${REPO_DETAILS}
`