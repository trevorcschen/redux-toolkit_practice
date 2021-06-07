import logo from './logo.svg';
import './styles/App.css';
import {Counter} from './components/Counter'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Todos from './components/Todos'
import MyNavBar from './components/MyNavBar'
import Blog from './components/Blog'
import AddTodo from './components/AddTodo'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Cart from './components/Cart'
function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
      <MyNavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
        <Route exact path="/" component = {() => <Counter />} />
        <Route exact path="/todos" component = {Todos} />
        <Route exact path="/blogs" component = {() => <Blog />} />
        <Route exact path="/add-new-todo" component ={AddTodo} />
        <Route exact path="/update-todo/:id" component ={AddTodo} />
        <Route exact path="/products" component={Product} />
        <Route path="*" exact component={NotFound} />
      </Switch>
      </header>
      <Cart/>
    </div>
    </Router>

  );
}

export default App;
