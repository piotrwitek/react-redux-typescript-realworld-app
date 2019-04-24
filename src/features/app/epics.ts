import { RootEpic } from 'MyTypes';
import { tap, ignoreElements, filter, first, map } from 'rxjs/operators';

import { isActionOf } from 'typesafe-actions';
import {
  loadArticlesAsync,
  createArticleAsync,
  updateArticleAsync,
  deleteArticleAsync,
} from '../articles/actions';

export const persistArticlesInLocalStorage: RootEpic = (
  action$,
  store,
  { localStorage }
) =>
  action$.pipe(
    filter(
      isActionOf([
        loadArticlesAsync.success,
        createArticleAsync.success,
        updateArticleAsync.success,
        deleteArticleAsync.success,
      ])
    ),
    tap(_ => {
      // handle side-effects
      localStorage.set('articles', store.value.articles.articles);
    }),
    ignoreElements()
  );

export const loadDataOnAppStart: RootEpic = (action$, store, { api }) =>
  action$.pipe(
    first(),
    map(loadArticlesAsync.request)
  );
