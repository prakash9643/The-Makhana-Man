// components/product/FeatureList.tsx

const features = [
  "100% Natural & Handpicked",
  "High in Protein & Fiber",
  "Low Calories",
  "Gluten Free",
  "No Preservatives",
]

export function FeatureList() {
  return (
    <ul className="flex flex-col gap-2 mb-5">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#3ecf6e] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.296a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.296-7.29a1 1 0 0 1 1.408 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="font-family-cosmic-sans text-[#4b3f3f] text-[14px] sm:text-[15px]">
            {f}
          </span>
        </li>
      ))}
    </ul>
  )
}