import './App.css';
import Home from './containers/Home/Home';
import {Provider, lightTheme} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={lightTheme} colorScheme={"light"}>
      <Home/>
    </Provider>
   
  );
}

export default App;
