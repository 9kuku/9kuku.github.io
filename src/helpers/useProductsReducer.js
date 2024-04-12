const productReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return [...action.initProducts];
    case "ADD":
      return [...state, action.product];
    case "DELETE":
      return state.filter((product) => product.id !== action.id);
    case "EDIT":
      return state.map((product) => (product.id === action.product.id ? { ...action.product } : product));
    default:
      return state;
  }
};

export default productReducer;