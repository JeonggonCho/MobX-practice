import './App.css';
import {observer} from "mobx-react";
import {useCounterStore} from "./context/counterContext";

const App = observer((props) => {
  const myCounter = useCounterStore();

  return (
    <div style={{textAlign: 'center', padding: 16}}>
      카운트: {myCounter.count}
      <br/>
      <br/>
      마이너스: {myCounter.isNegative}
      <br/>
      <br/>
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
});

export default App;
