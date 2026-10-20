export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const matchId = state.find((item) => item.id === action.payload.id);

      if (matchId) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "DECREASE_QUANTITY": {
      const targetId = state.find((item) => item.id === action.payload.id);
      if (!targetId) return state;
      if (targetId.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export const initialState = [];
