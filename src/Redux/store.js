import { createStore } from 'redux';  // Corrected import statement
import IncrementReducer from './IncrementReducer';

const store = createStore(IncrementReducer);

export default store;
