export const getItemFromLS = (cart) => {
  const existedItem = localStorage.getItem(cart);
  return existedItem ? JSON.parse(existedItem) : [];
};

export const addItemToLS = (newItem) => {
  const existedItem = getItemFromLS("cart");
  existedItem.push(newItem);
  localStorage.setItem("cart", JSON.stringify(existedItem));
};
