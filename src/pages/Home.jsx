import { useState } from "react"
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import ProductCard from "../components/ProductCard";
import Searchbar from "../components/Searchbar"
import ViewToggle from "../components/ViewToggle"
import Pagination from "../components/Pagination";
import { dummyProducts } from "../data/dummyProducts";
export default function Home() {
  const [products, setProducts] = useState(dummyProducts)
  const [view, setView] = useState("table")
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const start = (currentPage - 1) * itemsPerPage
  const paginated = filtered.slice(start, start + itemsPerPage)

  return (
    <div className="min-h-screen bg-violet-500/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Dashboard</h1>
          <p className="text-gray-600">Manage your inventory with ease</p>
        </div>

        {/* Search and View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Searchbar setSearch={setSearch} />
          </div>
          <ViewToggle view={view} setView={setView} />
        </div>

        {/* Product Form */}
        <div className="mb-6">
          <ProductForm products={products} setProducts={setProducts} />
        </div>

        {/* Product Display */}
        <div className="mb-6">
          {view === "table" ? (
            <ProductTable products={paginated} />
          ) : (
            <ProductCard products={paginated} />
          )}
        </div>

        {/* Pagination */}
        <Pagination
          total={filtered.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}