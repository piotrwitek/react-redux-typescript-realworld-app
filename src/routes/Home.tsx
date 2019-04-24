import React from 'react';

import ArticleList from '../features/articles/components/ArticleList';
import ArticleActionsMenu from '../features/articles/components/ArticleActionsMenu';
import Main from '../layouts/Main';

export default () => (
  <Main renderActionsMenu={() => <ArticleActionsMenu />}>
    <ArticleList />
  </Main>
);
