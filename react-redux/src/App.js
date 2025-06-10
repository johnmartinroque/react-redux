import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";
import Input from "./components/Input";
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
      <Input />
    </div>
  );
}

export default App;
