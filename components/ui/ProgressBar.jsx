export function ProgressBar({ currentStep, totalSteps }) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2 text-sm font-medium text-slate-500">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{percentage}% Completed</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
