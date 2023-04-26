import './App.css'
import UserContextProvider from './contexts/UserContext';
import Admin from './components/Admin';
import Login from './components/Login';


const App = () => {
  return (
    <>
    <UserContextProvider>
      <div>
        <Login />
        <Admin>
          <div>Hi Admin</div>
        </Admin>
      </div>
    </UserContextProvider>

    </>
  )
}


export default App;
