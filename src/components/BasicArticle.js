import React from 'react';
// import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLE } from '../graphql/queries';

const BasicArticle = (props) => {
  let id = props.match.params.id;
  console.log("basic article id: ", id)
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { id },
  });

  if(loading)
    return <p>Loading...</p>;

  if(error) {
    return <p>Error loading article with id {id}.</p>;
  }

  let article = data.getBasicArticle.data;

  let paragraphs = article.body.map(section => {
    if (section.type === "paragraph") {
      let childTexts = section.children.map(child => {
        return child.text;
      })
      return childTexts.join(' ');
    } else {
      console.log("Unknown section type '" + section.type + "' in section: ", section);
    }
  })

  return (
      <div className="container">
          <h3 className="title">{article.headline}</h3>
          <h4 className="subtitle">By: {article.byline.fullName}</h4>
          {paragraphs.map(paragraph => (
            <p className="content">
              {paragraph}
            </p>
          ))}
      </div>
  )
};

// BasicArticle.propTypes = {
//     headline: PropTypes.string.isRequired,
//     byline: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired
// };

export default BasicArticle;
