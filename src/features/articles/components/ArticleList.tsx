import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';

import ArticleListItem from './ArticleListItem';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.articles.isLoadingArticles,
  articles: selectors.getArticles(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const ArticleList: React.FC<Props> = ({
  isLoading,
  articles: articles = [],
}) => {
  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Loading articles...</p>;
  }

  if (articles.length === 0) {
    return (
      <p style={{ textAlign: 'center' }}>
        No articles yet, please create new...
      </p>
    );
  }

  return (
    <ul style={getStyle()}>
      {articles.map(article => (
        <li key={article.id}>
          <ArticleListItem article={article} />
        </li>
      ))}
    </ul>
  );
};

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  maxWidth: 500,
});

export default connect(
  mapStateToProps,
  dispatchProps
)(ArticleList);
