import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`{
  listBasicArticles {
    data {
      id
      headline {
        value
      }
      byline {
        value {
          fullName {
            value
          }
        }
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

export const GET_AUTHORS = gql`
{
  listAuthors{
    data {
      id
      fullName {
        value
      }
    }
  }
}`

export const GET_LOCALES = gql`
  query listI18NLocales() {
    i18n {
      i18NLocales: listI18NLocales() {
        data {
          id
          code
          default
          createdOn
        }
       hasNextPage
       hasPreviousPage
       totalCount
      }
    }
  }`
