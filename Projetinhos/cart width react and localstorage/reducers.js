function ADD_CART(state, content) {
  const cart = [...state.cart];
  const updatedItemIndex = cart.findIndex((item) => item.id === content.id);
  if (updatedItemIndex < 0) {
    cart.push({ ...content });
  } else if (content.quantidade > 0) {
    const updateItem = { ...cart[updatedItemIndex] };
    updateItem.quantidade = updateItem.quantidade + content.quantidade;
    updateItem.preco = updateItem.preco + content.preco;
    cart[updatedItemIndex] = updateItem;
  }
  window.localStorage.setItem('cart', JSON.stringify({ ...state, cart: cart }));
  return { ...state, cart: cart };
}
function REMOVE_CART(state, content) {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === content.id
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantidade = content.quantidade - 1;
  updatedItem.preco = updatedItem.preco - content.precoUnitario;

  if (updatedItem.quantidade <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  window.localStorage.setItem(
    'cart',
    JSON.stringify({ ...state, cart: updatedCart })
  );
  return { ...state, cart: updatedCart };
}
function REMOVE_CARTS_ITEMS(state, content) {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === content.id
  );
  updatedCart.splice(updatedItemIndex, 1);
  window.localStorage.setItem(
    'cart',
    JSON.stringify({ ...state, cart: updatedCart })
  );
  return { ...state, cart: updatedCart };
}

function INITIAL_STATE( content) {
  const update = { ...content };
  return update;
}

export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CART':
      return ADD_CART(state, action.content);
    case 'REMOVE_CART':
      return REMOVE_CART(state, action.content);
    case 'REMOVE_CARTS_ITEMS':
      return REMOVE_CARTS_ITEMS(state, action.content);
    case 'INITIAL_STATE':
      return INITIAL_STATE(action.content);

    default:
      return state;
  }
}
