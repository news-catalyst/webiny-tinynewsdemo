import { gql } from 'apollo-boost';

export const CREATE_ARTICLE = gql `
  mutation CreateBasicArticle($data: BasicArticleInput!) {
    content: createBasicArticle(data: $data) {
      data {
        id
        headline {
          values {
            value
            locale
          }
        }
        body {
          values {
            value
            locale
          }
        }
        byline {
          values {
            value {
              id
            }
            locale
          }
        }
      }
      error {
        message
        code
        data
      }
    }
  }`