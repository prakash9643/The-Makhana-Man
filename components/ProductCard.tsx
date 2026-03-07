type Product = {
  image: string;
  name: string;
};

export default function ProductCard({ product }: { product: Product }){

return(

<div className="product">

<img src={product.image}/>

<h3>{product.name}</h3>

<button>Add to Cart</button>

</div>

)

}