import logo from './logo.svg';
import './App.scss';
import Mycompoment from './ex/Mycompoment';
import Todolists from './todo_app/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './navigation/navigation';
import Home from './Home/home';
import ListUser from './ex/Users/ListUsers';
import InforUser from './ex/Users/inforUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact component={Home} ></Route>
            <Route path="/Todo" component={Todolists} ></Route>
            <Route path="/About" component={Mycompoment}></Route>
            <Route path="/Listuser" exact component={ListUser} ></Route>
            <Route path="/Listuser/:id" component={InforUser} ></Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={4000}
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
    </Router>
  );
}

export default App;
