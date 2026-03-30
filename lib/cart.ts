export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const setCart = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};