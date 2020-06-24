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

export const GET_ARTICLE = gql`
  query Article($id: ID!) {
    getBasicArticle(where: {id: $id}) {
      data {
        id
        headline
        byline {
          fullName
        }
        body
      }
    }
  }
`