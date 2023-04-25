import logo from './logo.svg';
import './App.scss';
import Mycompoment from './ex/Mycompoment';
import Todolists from './todo_app/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './navigation/navigation';
import Home from './Home/home';
import ListUser from './ex/Users/ListUsers';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/Todo' element={<Todolists />} ></Route>
            <Route path='/About' element={<Mycompoment />} ></Route>
            <Route path='/Listuser' element={<ListUser />}></Route>
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
