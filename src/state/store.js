// 7. store.js 생성
// 8. import createStore
// 9. import reducers
import { applyMiddleware, createStore } from "redux";
import reducers from './reducers/index.js';
import thunk from "redux-thunk";

// 10. store 생성
export const store = createStore(
    reducers,
    {},// default state
    applyMiddleware(thunk)
)