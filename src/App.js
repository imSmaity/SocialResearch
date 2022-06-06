
import axios from 'axios';
import { createContext, useEffect } from 'react';
import { useReducer } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { initialState } from './reducer/initialValue';
import { reducer } from './reducer/reducer';

const UserContext=createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState())
  useEffect(()=>{
    if(state.email!==''){
      const data=JSON.parse(localStorage.getItem('sorech'))
      axios.post(process.env.REACT_APP_API_URL+"/login",{email:data.email,password:data.password})
      .then(
        (res)=>{
          if(res.data.success){
            dispatch({payload:true,...res.data.user})
          }
        }
      )
      .catch()
    }
  },[])

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
