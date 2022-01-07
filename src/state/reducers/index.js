// 4. index.js 생성
// 5. comebineReducers import
import { comebineReducers } from "redux";
import accountReducer from './accountReducer.js';

// 6. reducer들을 결합하는 reducers 생성
const reducers = comebineReducers({
    account: accountReducer
})

export default reducers