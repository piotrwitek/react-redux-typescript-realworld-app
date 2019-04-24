import { Article } from 'MyModels';
import { createAsyncAction } from 'typesafe-actions';

export const loadArticlesAsync = createAsyncAction(
  'LOAD_ARTICLES_REQUEST',
  'LOAD_ARTICLES_SUCCESS',
  'LOAD_ARTICLES_FAILURE'
)<undefined, Article[], string>();

export const createArticleAsync = createAsyncAction(
  'CREATE_ARTICLE_REQUEST',
  'CREATE_ARTICLE_SUCCESS',
  'CREATE_ARTICLE_FAILURE'
)<Article, Article[], string>();

export const updateArticleAsync = createAsyncAction(
  'UPDATE_ARTICLE_REQUEST',
  'UPDATE_ARTICLE_SUCCESS',
  'UPDATE_ARTICLE_FAILURE'
)<Article, Article[], string>();

export const deleteArticleAsync = createAsyncAction(
  'DELETE_ARTICLE_REQUEST',
  'DELETE_ARTICLE_SUCCESS',
  'DELETE_ARTICLE_FAILURE'
)<Article, Article[], Article>();
