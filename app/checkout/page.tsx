"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [cart, setCartState] = useState<any[]>([]);
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    setCartState(getCart());
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOrder = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      body: JSON.stringify({ form, cart }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Order placed!");
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">

          {/* CONTACT */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-lg font-semibold mb-4">Contact information</h2>
            <input name="email" placeholder="Email address" onChange={handleChange} className="input" />
            <p className="text-sm text-gray-500 mt-2">You are checking out as a guest.</p>
          </div>

          {/* SHIPPING */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-lg font-semibold mb-4">Shipping address</h2>

            <input placeholder="Country / Region" defaultValue="India" className="input mb-3" />

            <div className="grid grid-cols-2 gap-3">
              <input name="firstName" placeholder="First name" onChange={handleChange} className="input" />
              <input name="lastName" placeholder="Last name" onChange={handleChange} className="input" />
            </div>

            <input name="address" placeholder="Address" onChange={handleChange} className="input mt-3" />

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input name="city" placeholder="City" onChange={handleChange} className="input" />
              <input name="state" placeholder="State" onChange={handleChange} className="input" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <input name="zip" placeholder="PIN Code" onChange={handleChange} className="input" />
              <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
            </div>
          </div>

          {/* SHIPPING METHOD */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <span>Free Shipping</span>
              <span className="font-medium">FREE</span>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-lg font-semibold mb-4">Payment</h2>

            <div className="border border-red-300 bg-red-50 text-red-600 p-4 rounded-lg text-sm">
              No payment method available. Integrate Razorpay / COD.
            </div>
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white p-6 rounded-xl border h-fit sticky top-10">
          <h2 className="text-lg font-semibold mb-4">Order summary</h2>

          <div className="space-y-4">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border"
                    />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                  </div>
                </div>
                <span className="font-medium">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-3">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleOrder}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </div>

      </div>

      <style jsx>{`
        .input {
          border: 1px solid #e5e7eb;
          padding: 12px;
          border-radius: 8px;
          width: 100%;
          outline: none;
        }

        .input:focus {
          border-color: black;
        }
      `}</style>
    </div>
  );
}
