import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Editor from './Editor';
import Previewer from './Previewer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Editor />
      <Previewer />
    </Provider>
  );
}

export default App;
