
// 3. reducer 생성 ( 감속기 )
const reducer = (state = 5, action) => {  // state: 초기값 / action: type, payload 
    switch (action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;