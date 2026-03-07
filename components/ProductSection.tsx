import ProductCard from "./ProductCard"

const products=[

{
name:"Classic",
image:"/classic.png"
},

{
name:"Premium",
image:"/premium.png"
}

]

export default function ProductsSection(){

return(

<section className="products">

<h2>Our Tasty Makhana Snacks</h2>

<div className="product-grid">

{products.map((p,i)=>(
<ProductCard product={p} key={i}/>
))}

</div>

</section>

)

}