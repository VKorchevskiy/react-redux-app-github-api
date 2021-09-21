import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Card from "../Card/Card";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/card/:userName/:repoName" component={Card}></Route>
          <Route path="/error" component={Error}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
