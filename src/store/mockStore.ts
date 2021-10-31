import thunk from 'redux-thunk';
import { AppDispatch } from 'store/store';
import configureMockStore from 'redux-mock-store';
import { ApplicationState } from 'constants/types';

const middlewares = [thunk];
export const mockStore = configureMockStore<ApplicationState, AppDispatch>(middlewares);