import React, { useCallback } from 'react';
import areEqual from 'fast-deep-equal';
import { useDispatch } from 'redux-react-hook';

import { deleteArticleAsync } from '../actions';
import { Article } from 'MyModels';
import { getPath } from '../../../router-paths';
import FlexRow from '../../../components/FlexRow';

interface Props {
  article: Article;
}

const ArticleListItem = React.memo<Props>(({ article }) => {
  const dispatch = useDispatch();
  const deleteArticle = useCallback(
    (ev: any) => {
      ev.preventDefault();
      return dispatch(deleteArticleAsync.request(article));
    },
    [article, dispatch]
  );

  return (
    <FlexRow itemsSpacing={20}>
      <div style={getStyle()}>
        {article.title}
        <a
          href={'disabled'}
          onClick={deleteArticle}
          style={{ color: 'darkred', float: 'right', cursor: 'pointer' }}
        >
          Delete
        </a>{' '}
        |
        <a
          href={getPath('editArticle', article.id)}
          style={{ float: 'right', cursor: 'pointer' }}
        >
          Edit
        </a>
      </div>
    </FlexRow>
  );
}, areEqual);

const getStyle = (): React.CSSProperties => ({
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
});

export default ArticleListItem;
