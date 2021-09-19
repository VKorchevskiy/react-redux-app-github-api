import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className='container'>
        <Route path="/" component={Main}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
