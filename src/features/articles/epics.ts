import { RootEpic } from 'MyTypes';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {
  loadArticlesAsync,
  createArticleAsync,
  updateArticleAsync,
  deleteArticleAsync,
} from './actions';

export const loadArticlesEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadArticlesAsync.request)),
    switchMap(() =>
      from(api.articles.loadArticles()).pipe(
        map(loadArticlesAsync.success),
        catchError(message => of(loadArticlesAsync.failure(message)))
      )
    )
  );

export const createArticlesEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(createArticleAsync.request)),
    switchMap(action =>
      from(api.articles.createArticle(action.payload)).pipe(
        map(createArticleAsync.success),
        catchError(message => of(createArticleAsync.failure(message)))
      )
    )
  );

export const updateArticlesEpic: RootEpic = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(updateArticleAsync.request)),
    switchMap(action =>
      from(api.articles.updateArticle(action.payload)).pipe(
        map(updateArticleAsync.success),
        catchError(message => of(updateArticleAsync.failure(message)))
      )
    )
  );

export const deleteArticlesEpic: RootEpic = (action$, state$, { api, toast }) =>
  action$.pipe(
    filter(isActionOf(deleteArticleAsync.request)),
    switchMap(action =>
      from(api.articles.deleteArticle(action.payload)).pipe(
        map(deleteArticleAsync.success),
        catchError(message => {
          toast.error(message);
          return of(deleteArticleAsync.failure(action.payload));
        })
      )
    )
  );
