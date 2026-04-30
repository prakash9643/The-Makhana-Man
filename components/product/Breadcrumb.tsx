// components/product/Breadcrumb.tsx
import Link from "next/link"

export function Breadcrumb({ name }: { name: string }) {
  const crumbs = [
    { label: "Home",    href: "/" },
    { label: "Shop",    href: "/products" },
    { label: name,      href: "#" },
  ]

  return (
    <nav className="flex items-center gap-1 mb-8 flex-wrap">
      {crumbs.map((c, i) => (
        <span key={c.label} className="flex items-center gap-1">
          {i > 0 && (
            <span className="text-[#9e9e9e] text-[13px]">›</span>
          )}
          <Link
            href={c.href}
            className={`font-family-cosmic-sans text-[13px] sm:text-[14px] ${
              i === crumbs.length - 1
                ? "text-[#c14b33] font-semibold pointer-events-none"
                : "text-[#4b3f3f] hover:text-[#3b6e8c] transition-colors"
            }`}
          >
            {c.label}
          </Link>
        </span>
      ))}
    </nav>
  )
}