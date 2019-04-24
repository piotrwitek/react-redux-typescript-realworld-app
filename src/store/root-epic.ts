import { combineEpics } from 'redux-observable';

import * as app from '../features/app/epics';
import * as articles from '../features/articles/epics';

export default combineEpics(...Object.values(app), ...Object.values(articles));
