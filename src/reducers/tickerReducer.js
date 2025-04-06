import React, { useReducer } from "react";

//state -> the current state of tickets. action (type and payload) -> the type of action e.g. Add, Edit, Delete

export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD TICKET":
      //state is immutable, so we take the state, we spread it over and copy to create a new instance of the state
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case "UPDATE TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };

    case "DELETE TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
