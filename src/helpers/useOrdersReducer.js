const orderReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return [...action.initOrders];
    case "ADD":
      return [...state, action.order];
    case "DELETE":
      return state.filter((order) => order.id !== action.id);
    case "EDIT":
      return state.map((order) => (order.id === action.order.id ? { ...action.product } : order));
    default:
      return state;
  }
};

export default orderReducer;