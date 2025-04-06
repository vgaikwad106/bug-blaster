import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import { useReducer } from "react";
import ticketReducer from "./reducers/tickerReducer";
import TicketList from "./components/TicketList";

function App() {
  //the initial state is an object, which contains an array of tickets. It could also possibly have other elements. So better to have as an object rather than just array itself.
  const initialState = { tickets: [], editingTicket: null };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1> ~ Bug Blaster ~</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>List of Tickets</h2>
            <TicketList
              tickets={state.tickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
