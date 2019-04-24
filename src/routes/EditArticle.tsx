import { RootState } from 'MyTypes';
import React from 'react';
import { match } from 'react-router';

import ArticleForm from '../features/articles/components/ArticleForm';
import Main from '../layouts/Main';
import BackLink from '../components/BackLink';
import { connect } from 'react-redux';

type OwnProps = {
  match: match<{ articleId: string }>;
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  article: state.articles.articles.find(
    i => i.id === ownProps.match.params.articleId
  ),
});

type Props = ReturnType<typeof mapStateToProps>;

const EditArticle = ({ article }: Props) => {
  return (
    <Main renderActionsMenu={() => <BackLink />}>
      <ArticleForm article={article} />
    </Main>
  );
};

export default connect(mapStateToProps)(EditArticle);
