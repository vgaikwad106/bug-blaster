import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";

function App() {
  //the initial state is an object, which contains an array of tickets. It could also possibly have other elements. So better to have as an object rather than just array itself.
  const initialState = { tickets: [] };

  return (
    <div className="App">
      <div className="container">
        <h1> Bug Blaster</h1>
        <TicketForm></TicketForm>
      </div>
    </div>
  );
}

export default App;
