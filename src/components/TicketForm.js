import React, { useState, useEffect } from "react";
import "../styles.css";

export default function TicketForm({ dispatch, editingTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  //updates the component whenever editingTicket value changes
  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    //Whenever the form gets submitted the page reloads, and we can deny that by using preventDefault.
    e.preventDefault();

    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };

  const handleCancel = () => {
    dispatch({
      type: "CLEAR_EDITING_TICKET",
    });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <h3>Ticket Form</h3>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          placeholder="Enter your bug title"
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          placeholder="Enter your bug description"
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <fieldset className="priority-fieldset">
          <legend>Select Priority</legend>

          {
            //Get entries of the object
            Object.entries(priorityLabels).map(([value, label]) => (
              <label key={value} className="priority-label">
                <input
                  className="priority-input"
                  type="radio"
                  value={value}
                  checked={priority === value}
                  onChange={(e) => setPriority(e.target.value)}
                />
                {label}
              </label>
            ))
          }
        </fieldset>

        {editingTicket ? (
          <button className="secondary-button" onClick={handleCancel}>
            Cancel
          </button>
        ) : (
          <button className="secondary-button" type="reset" onClick={clearForm}>
            Cancel
          </button>
        )}
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
}
