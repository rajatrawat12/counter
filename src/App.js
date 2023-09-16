import IncrementCounter from './components/IncrementCounter';
import './App.css';
import { Provider } from 'react-redux';
import store from "./Redux/store"

function App() {
  return (
    <Provider store={store}> 
      <IncrementCounter/>
    </Provider>
    
  );
}


export default App;
