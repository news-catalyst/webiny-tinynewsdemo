import React from 'react';
import { useQuery } from '@apollo/react-hooks';
//This is the GraphQL query we created earlier
import { GET_ARTICLES } from '../graphql/queries';
import ArticleListItem from './ArticleListItem';


function ArticleList(props) {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if(loading)
    return <p>Loading...</p>;

  if(error) {
    return <p>Error loading articles.</p>;
  }

  return (
    <div className="container">
      {
        data.listBasicArticles.data.map((article) => (
          <ArticleListItem key={article.headline} {...article} />
        ))
      }

    </div>
  )
}
export default ArticleList;
