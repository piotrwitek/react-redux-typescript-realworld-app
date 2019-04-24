import React from 'react';

import { Article } from 'MyModels';

type Props = {
  article: Article;
};

const ArticleView: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>

      <p>{article.content}</p>
    </div>
  );
};

export default ArticleView;
