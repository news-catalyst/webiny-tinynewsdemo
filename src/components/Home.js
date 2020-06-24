import React from 'react';
import ArticleList from './ArticleList';

function Home(props) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">tinynews demo</h1>
        <p className="subtitle">
          This site is built using webiny and styled with <strong>Bulma</strong>!
        </p>
        <ArticleList />
      </div>
    </section>
  );
}
export default Home;