// components/product/StarRating.tsx

export function StarRating({
  rating = 4.8,
  count = 125,
}: {
  rating?: number
  count?: number
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex items-center gap-[2px]">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={i < Math.floor(rating) ? "#f5a623" : "#e0e0e0"}
              className="w-5 h-5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
      </div>
      <span className="font-family-cosmic-sans text-[#4b3f3f] text-[14px]">
        {rating} ({count} Reviews)
      </span>
    </div>
  )
}