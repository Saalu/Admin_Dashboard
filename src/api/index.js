export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  // .then((json) => console.log(json));
};
export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
  // .then((json) => console.log(json));
};
