"use client";

type Product = {
  id: number;
  name: string;
  price: string;
    images?: { src: string }[];
};

export default function AddToCartButton({ product }: { product: Product }) {

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((item: any) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        image: product.images?.[0]?.src, // 👈 ADD THIS
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "/checkout";
  };

  return (
    <button
      onClick={handleAddToCart}
      className="cta hover:bg-[#a83a25] inline-block bg-[#c14b33] text-[#f8f8f0] cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold mt-6"
    >
      Buy Now
    </button>
  );
}