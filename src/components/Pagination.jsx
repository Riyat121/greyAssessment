
export default function Pagination({ total, itemsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(total / itemsPerPage)

  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-200">
      <div className="text-sm text-gray-600">
        Showing <span className="font-semibold text-gray-900">{Math.min((currentPage - 1) * itemsPerPage + 1, total)}</span> to{" "}
        <span className="font-semibold text-gray-900">{Math.min(currentPage * itemsPerPage, total)}</span> of{" "}
        <span className="font-semibold text-gray-900">{total}</span> results
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </div>
  )
}

