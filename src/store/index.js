import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { monitorReducerEnhancer } from "./enhancers";
import { logger } from "./middlewares";
import { profileReducer } from "./profile";
import { companyReducer } from "./company";
import { newsReducer } from "./news";

const middleware = [logger, thunkMiddleware];

const rootReducer = combineReducers({
  profile: profileReducer,
  company: companyReducer,
  news: newsReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
