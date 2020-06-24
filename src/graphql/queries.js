import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`{
  listBasicArticles {
    data {
      id
      headline
      byline {
        fullName
      }
    }
  }
}`;


