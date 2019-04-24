import React from 'react';

import ArticleForm from '../features/articles/components/ArticleForm';
import Main from '../layouts/Main';
import BackLink from '../components/BackLink';

export default () => (
  <Main renderActionsMenu={() => <BackLink />}>
    <ArticleForm />
  </Main>
);
