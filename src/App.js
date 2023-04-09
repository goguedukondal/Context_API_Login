
import './App.css';
import Login from './Components/Login';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { AuthContext } from './Components/Context';
import { useContext } from 'react';

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {/* <Login></Login> */}

      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;