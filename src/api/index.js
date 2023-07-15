export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  // .then((json) => console.log(json));
};
export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
  // .then((json) => console.log(json));
};
export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
  // .then((json) => console.log(json));
};
export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
