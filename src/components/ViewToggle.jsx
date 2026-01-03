
 export default function ViewToggle({ view, setView }) {
  return (
    <div className="inline-flex rounded-xl bg-gray-100 p-1 shadow-sm">
      <button
        onClick={() => setView("table")}
        className={`px-6 py-2 rounded-lg font-medium transition-all ${
          view === "table" 
            ? "bg-white text-blue-600 shadow-sm" 
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Table
        </span>
      </button>
      <button
        onClick={() => setView("grid")}
        className={`px-6 py-2 rounded-lg font-medium transition-all ${
          view === "grid" 
            ? "bg-white text-blue-600 shadow-sm" 
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Grid
        </span>
      </button>
    </div>
  )
}
