const pathsMap = {
  home: () => '/',
  articles: () => '/articles',
  addArticle: () => '/add-article',
  editArticle: (articleId: string) => `/articles/:${articleId}/edit`,
};
type PathsMap = typeof pathsMap;

export const getPath = <TRoute extends keyof PathsMap>(
  route: TRoute,
  ...params: Parameters<PathsMap[TRoute]>
) => {
  const pathCb: (...args: any[]) => string = pathsMap[route];

  return pathCb(...params);
};
