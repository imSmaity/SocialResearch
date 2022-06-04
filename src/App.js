
import { createContext } from 'react';
import { useReducer } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { initialState } from './reducer/initialValue';
import { reducer } from './reducer/reducer';

const UserContext=createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext};
