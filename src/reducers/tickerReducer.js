import React from "react";

//state -> the current state of tickets. action (type and payload) -> the type of action e.g. Add, Edit, Delete

export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      //state is immutable, so we take the state, we spread it over and copy to create a new instance of the state
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };

    case "DELETE_TICKET":
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload.id
          ),
        };
      }

    case "SET_EDITING_TICKET":
      return {
        ...state,
        editingTicket: action.payload,
      };

    case "CLEAR_EDITING_TICKET":
      return {
        ...state,
        editingTicket: null,
      };

    case "SET_SORTING":
      return {
        ...state,
        sortPreference: action.payload,
      };

    default:
      return state;
  }
}
