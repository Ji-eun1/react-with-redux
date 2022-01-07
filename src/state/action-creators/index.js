// 16. actions와 actionCreators를 저장하는 공간 index.js 생성

// depositMoney action creator
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}

// withdrawMoney action creator
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}

