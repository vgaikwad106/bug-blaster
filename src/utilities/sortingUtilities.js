export const sortTickets = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort((t1, t2) =>
        t2.priority.localeCompare(t1.priority)
      );
    case "Low to High":
      return [...tickets].sort((t1, t2) =>
        t1.priority.localeCompare(t2.priority)
      );
    default:
      return tickets;
  }
};
