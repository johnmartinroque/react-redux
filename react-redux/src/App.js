import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>HEllo</h1>
      <Profile />
      <Login />
      <ChangeColor />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
