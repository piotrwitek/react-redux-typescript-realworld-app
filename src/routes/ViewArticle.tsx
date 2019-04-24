import { RootState } from 'MyTypes';
import React, { useCallback } from 'react';

import ArticleView from '../features/articles/components/ArticleView';
import Main from '../layouts/Main';
import BackLink from '../components/BackLink';
import { useMappedState } from 'redux-react-hook';

export default ({ articleId }: { articleId: string }) => {
  const mapState = useCallback(
    (state: RootState) => ({
      article: state.articles.articles.find(i => i.id === articleId),
    }),
    [articleId]
  );

  const { article } = useMappedState(mapState);

  return (
    <Main renderActionsMenu={() => <BackLink />}>
      <ArticleView article={article} />
    </Main>
  );
};
