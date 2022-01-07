import logo from './logo.svg';
import './App.css';

// 14. import useSelector ( 후크 사용 )
// 17. import useDispatch
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

// 19. import bindActionCreators ( 모든 action creators들을 바인딩함 )
// 20. import actionCreators
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index.js"

function App() {

  // 15. useSelector --> store 내부 상태를 반환
  const account = useSelector((state) => state.account);

  // 18. action type과 payLoad를 전달하는 dispatch 생성
  const dispatch = useDispatch();

  // 21. 모든 actionCreators들에 dispatch 전달
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log(withdrawMoney);

  return (
    <div className="App">
      <h1>{ account }</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw-</button>
    </div>
  );
}

export default App;
