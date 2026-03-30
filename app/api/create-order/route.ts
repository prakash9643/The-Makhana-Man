export async function POST(req: Request) {
  const { form, cart } = await req.json();

  const orderData = {
    payment_method: "cod",
    payment_method_title: "Cash on Delivery",
    set_paid: false,

    billing: {
      first_name: form.firstName,
      last_name: form.lastName,
      address_1: form.address,
      city: form.city,
      state: form.state,
      postcode: form.zip,
      country: "IN",
      email: form.email,
      phone: form.phone,
    },

    shipping: {
      first_name: form.firstName,
      last_name: form.lastName,
      address_1: form.address,
      city: form.city,
      state: form.state,
      postcode: form.zip,
      country: "IN",
    },

    line_items: cart.map((item: any) => ({
      product_id: item.id,
      quantity: item.qty,
    })),
  };

  const res = await fetch(
    `https://aaronature.com/?rest_route=/wc/v3/orders?consumer_key=${process.env.WC_KEY}&consumer_secret=${process.env.WC_SECRET}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }
  );

  const data = await res.json();

  return Response.json({ success: true, order: data });
}