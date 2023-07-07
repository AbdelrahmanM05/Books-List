import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import store from './Redux/Store';

function App() {
  return (
   <Provider store={store}>
   <Home/>
   </Provider>
  );
}

export default App;
