
export default function ProductCard({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
            <svg className="w-20 h-20 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                {product.category}
              </span>
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-sm text-gray-600">Stock:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                product.stock > 50 ? "bg-green-100 text-green-700" :
                product.stock > 20 ? "bg-yellow-100 text-yellow-700" :
                "bg-red-100 text-red-700"
              }`}>
                {product.stock} units
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

