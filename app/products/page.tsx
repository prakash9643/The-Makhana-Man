import { getAllProducts, getProducts } from "@/lib/products"
import Link from "next/link"
import  Navbar  from "@/components/Navbar"
import Footer from "@/components/Footer"
import MakhanaStandard from "@/components/MakhanaStandard"

export default async function ProductsPage(){

const products = await getAllProducts()

return(
    <>
<Navbar/>
<section className="max-w-6xl mx-auto py-20 px-4  bg-[#fffcfa]">

<h1 className="text-3xl font-bold mb-10 text-center">
Our Makhana Snacks
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">

{products.map((product:any)=>(

<div
key={product.id}
className="border p-4 rounded-lg text-center hover:shadow-lg transition"
>

<Link href={`/products/${product.slug}`}>

<img
src={product.images?.[0]?.src}
alt={product.name}
className="mx-auto mb-4"
/>

<h2 className="font-semibold text-lg">
{product.name}
</h2>

<p className="text-green-700 font-bold">
₹{product.price}
</p>

</Link>

</div>

))}

</div>

</section>
<MakhanaStandard/>
<Footer/>
</>
)

}