import logo from './logo.svg';
import './App.css';

// 14. import useSelector ( 후크 사용 )
import { useSelector } from 'react-redux';

function App() {

  // 15. useSelector --> store 내부 상태를 반환

  // const state = useSelector((state) => state);
  // console.log(state); --> store 내부 상태를 객체로 확인 가능.

  // 보통 useSelector는 다음과 같은 방법으로 사용함.
  const account = useSelector((state) => state.account);

  console.log(account);

  return (
    <div className="App">

    </div>
  );
}

export default App;
