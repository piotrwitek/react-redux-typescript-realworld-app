import { Article } from 'MyModels';

import * as localStorage from './local-storage-service';

let articles: Article[] = localStorage.get<Article[]>('articles') || [];

const TIMEOUT = 750;

export function loadArticles(): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articles);
    }, TIMEOUT);
  });
}

export function createArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      articles = articles.concat(article);
      resolve(articles);
    }, TIMEOUT);
  });
}

export function updateArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      articles = articles.map(i => (i.id === article.id ? article : i));
      resolve(articles);
    }, TIMEOUT);
  });
}

export function deleteArticle(article: Article): Promise<Article[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      articles = articles.filter(i => i.id !== article.id);
      resolve(articles);
    }, TIMEOUT);
  });
}
