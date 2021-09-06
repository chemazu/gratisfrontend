import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Shop from "./views/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./views/Header";
import ProductPage from "./views/ProductPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/product/:id" component={ProductPage}></Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
