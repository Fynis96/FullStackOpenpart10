import { gql } from '@apollo/client';

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    ownerAvatarUrl
    language
    description
  }
`