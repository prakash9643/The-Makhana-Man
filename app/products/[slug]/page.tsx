import { getProducts } from "@/lib/products"
// import  Navbar  from "@/components/Navbar"
// import Footer from "@/components/Footer"
import MakhanaStandard from "@/components/MakhanaStandard"

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const product = await getProducts(slug)
return(
    <>
    {/* <Navbar/> */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-15 py-20 bg-[#fffcfa]">

        <img
        src={product.images?.[0]?.src}
        className="rounded-lg"
        />

        <div>

        <h1 className="text-3xl font-bold mb-4 font-family-more-sugar">
        {product.name}
        </h1>

        <p className="text-2xl text-green-700 mb-4 font-family-more-sugar font-bold">
        ₹{product.price}
        </p>

        <p
        dangerouslySetInnerHTML={{__html:product.description}}
        className="font-family-cosmic-sans text-gray-700 wp-text-editi-makhana"
        />

        <p className="mt-4">

        Stock :

        {product.stock_status === "instock" ? "✅ In Stock" : "❌ Out of Stock"}

        </p>

        <a
        href={`http://localhost/the-makhana-man/checkout/?add-to-cart=${product.id}`}
        className="cta hover:bg-[#a83a25] inline-block bg-[#c14b33] text-[#f8f8f0] cursor-pointer text-[16px] px-6 py-2 rounded-md font-semibold mt-6"
        >

        Buy Now

        </a>

        </div>

</div>
<MakhanaStandard/>
{/* <Footer/> */}
</>

)

}