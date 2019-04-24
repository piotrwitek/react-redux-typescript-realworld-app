import { Article } from 'MyModels';
import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import {
  loadArticlesAsync,
  createArticleAsync,
  updateArticleAsync,
  deleteArticleAsync,
} from './actions';

const reducer = combineReducers({
  isLoadingArticles: createReducer(false as boolean)
    .handleAction([loadArticlesAsync.request], (state, action) => true)
    .handleAction(
      [loadArticlesAsync.success, loadArticlesAsync.failure],
      (state, action) => false
    ),
  articles: createReducer([] as Article[])
    .handleAction(
      [
        loadArticlesAsync.success,
        createArticleAsync.success,
        updateArticleAsync.success,
        deleteArticleAsync.success,
      ],
      (state, action) => action.payload
    )
    .handleAction(createArticleAsync.request, (state, action) => [
      ...state,
      action.payload,
    ])
    .handleAction(updateArticleAsync.request, (state, action) =>
      state.map(i => (i.id === action.payload.id ? action.payload : i))
    )
    .handleAction(deleteArticleAsync.request, (state, action) =>
      state.filter(i => i.id !== action.payload.id)
    )
    .handleAction(deleteArticleAsync.failure, (state, action) =>
      state.concat(action.payload)
    ),
});

export default reducer;
