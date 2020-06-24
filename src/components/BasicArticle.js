import React from 'react';
// import PropTypes from 'prop-types';

const BasicArticle = ({ headline, byline, body }) => {
    return (
        <div className="container">
            <h3 className="title">{headline}</h3>
            <p>By: {byline.fullName}</p>
            <p className="description">{body}</p>
        </div>
    )
};

// BasicArticle.propTypes = {
//     headline: PropTypes.string.isRequired,
//     byline: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired
// };

export default BasicArticle;
