const eventReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return [...action.initEvents];
    case "ADD":
      return [...state, action.event];
    case "DELETE":
      return state.filter((event) => event.id !== action.id);
    case "EDIT":
      return state.map((event) => (event.id === action.event.id ? { ...action.event } : event));
    default:
      return state;
  }
};

export default eventReducer;