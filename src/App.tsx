import * as actions from './redux/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  dispatch(actions.getCategory.getCategoryRequest())

  return (
    <div className="App">
      <p>Ngu</p>
    </div>
  );
}

export default App;
