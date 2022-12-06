import "./styles/App.scss";
import UserList from "./components/UserList";
import Card from "./components/Card";
import Paginate from "./components/Paginate";

function App() {
  return (
    <div className="App">
        <UserList />
        <Card/>
        <Paginate/>
    </div>
  );
}

export default App;
