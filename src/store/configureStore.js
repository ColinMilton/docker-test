const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");
const { rootReducer } = require("../reducers");

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
