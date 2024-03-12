const getItemFromLS = (cart) => {
  const existedItem = localStorage.getItem(cart);
  return existedItem ? JSON.parse(existedItem) : [];
};

const setItemToLs = (item) => {
  localStorage.setItem("cart", JSON.stringify(item));
};
const addItemToLS = (newItem) => {
  const existedItem = getItemFromLS("cart");
  existedItem.push(newItem);
  setItemToLs(existedItem);
};

const removeItemFromLs = (id) => {
  const existedBottols = getItemFromLS("cart");
  const reminigBottols = existedBottols.filter((idx) => idx !== id);
  setItemToLs(reminigBottols);
};
export { getItemFromLS, addItemToLS, removeItemFromLs };
