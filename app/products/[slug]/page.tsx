// app/products/[slug]/page.tsx
import { getProducts } from "@/lib/products"
import { Breadcrumb } from "@/components/product/Breadcrumb"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductActions } from "@/components/product/ProductActions"
import { StarRating } from "@/components/product/StarRating"
import { FeatureList } from "@/components/product/FeatureList"
import { motion } from "framer-motion"
import { ProductBadges } from "@/components/product/ProductBadges"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProducts(slug)

  const images: string[] = product.images?.map((img: { src: string }) => img.src) ?? []
  const quantities = ["100g", "250g"]

  return (
    <section
      className="pt-[148px]  relative overflow-hidden"
      style={{ backgroundColor: "#f9f3ea" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">

        {/* Breadcrumb */}
        <Breadcrumb name={product.name} />

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* LEFT: Image Gallery */}
          <ProductGallery images={images} name={product.name} />

          {/* RIGHT: Product Info */}
          <div>
            <h1 className="font-bold font-family-more-sugar text-[#1A1A2E] text-[26px] sm:text-[32px] md:text-[38px] leading-tight mb-2">
              {product.name}
            </h1>

            <StarRating rating={4.8} count={125} />

            <p className="font-bold font-family-more-sugar text-[#c14b33] text-[32px] sm:text-[38px] mb-4">
              ₹{product.price}
            </p>

            {/* <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="font-family-cosmic-sans text-[#4b3f3f] text-[14px] sm:text-[15px] leading-relaxed mb-5 wp-text-editi-makhana"
            /> */}

            <p className="font-family-cosmic-sans text-[#4b3f3f] text-[14px] sm:text-[15px] leading-relaxed mb-5">
              Light, crunchy and delicious! Our Raw Makhana is handpicked to perfection
              for healthy snacking anytime, anywhere.
            </p>

            <FeatureList />

            <p className="font-family-cosmic-sans text-[13px] text-[#4b3f3f] mb-5">
              Stock:{" "}
              {product.stock_status === "instock"
                ? <span className="text-[#3ecf6e] font-semibold">✅ In Stock</span>
                : <span className="text-[#c14b33] font-semibold">❌ Out of Stock</span>}
            </p>

            <ProductActions product={product} quantities={quantities} />
          </div>

        </div>


        <ProductBadges />
      </div>
    </section>
  )
}
