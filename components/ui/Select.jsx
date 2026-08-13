export function Select({ label, id, options, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-shadow ${
          error 
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50' 
            : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500 bg-white'
        }`}
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
