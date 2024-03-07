import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';
import IncrementByAmount from './components/IncrementByAmount';

export default function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
      <IncrementByAmount />
    </Provider>
    );
}