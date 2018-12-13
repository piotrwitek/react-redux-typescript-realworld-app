export { default as rootReducer } from './root-reducer';
export { default as rootEpic } from './root-epic';
export { default } from './store';

// this is an ugly workaround due to CRA2.1 requiring isolatedModules = true
import { RootState } from './store';
export type RootState = RootState;