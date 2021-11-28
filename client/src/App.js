import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { Route,Switch } from "react-router-dom";
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Errorpage from "./components/Errorpage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Switch>
      <Route  path='/' exact component={Home}></Route>
      <Route  path='/about' exact component={About}></Route>
      <Route  path='/contact' exact component={Contact}></Route>
      <Route  path='/login' exact component={Login}></Route>
      <Route  path='/register' exact component={Register}></Route>
      <Route path='/error' exact component={Errorpage}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
