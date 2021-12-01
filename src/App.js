import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import SingleProject from './Pages/Projects/SingleProject/SingleProject';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
    <Route exact path = '/'>
      <Home></Home>
    </Route>
    <Route exact path ='/home'>
      <Home></Home>
    </Route>
    <Route exact path ='/about'>
     <About></About>
    </Route>
    <Route exact path = '/projects'>
     <Projects></Projects>
    </Route>
    <Route exact path = '/blogs'>
     <Blogs></Blogs>
    </Route>
    <Route exact path = '/contact'>
      <Contact></Contact>
    </Route>
    <Route exact path = '/projects/:id'>
      <SingleProject></SingleProject>
    </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
