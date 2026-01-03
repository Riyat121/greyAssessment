import { useState, useEffect } from "react"
import useDebounce from "../utils/useDebounce"

export default function SearchBar({ setSearch }) {
  const [text, setText] = useState("")
  const debounced = useDebounce(text, 500)

  useEffect(() => {
    setSearch(debounced)
  }, [debounced])

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}
