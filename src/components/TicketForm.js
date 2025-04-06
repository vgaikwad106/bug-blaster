import React, { useState } from "react";
import "../styles.css";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

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
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };

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
        <button type="submit" className="button">
          Submit
        </button>
      </div>
    </form>
  );
}
