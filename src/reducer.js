export const initialState = {
  basket: [
    {
      id: '90829332',
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 14000.98,
      rating: 5,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg',
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// this is a reducer, datalayer as state, manipulate with actions
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      //Logic for removing item from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if the product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket...remove it.
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }

      // return everything the state already had but change the basket to the newbasket
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
