import {Route, Switch} from 'react-router-dom'

//  import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
