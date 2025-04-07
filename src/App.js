import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import { useReducer } from "react";
import ticketReducer from "./reducers/tickerReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  //the initial state is an object, which contains an array of tickets. It could also possibly have other elements. So better to have as an object rather than just array itself.
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

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
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
              <option value="">Order of Creation</option>
            </select>
            <TicketList
              // tickets={state.tickets} -> if not using the sort
              tickets={sortedTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
