import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
