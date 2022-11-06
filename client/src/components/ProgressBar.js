function ProgressBar({ children, min, max, value }) {
    return (
      <div className="flex h-5 overflow-hidden bg-gray-400 text-lg rounded-xl">
        <div
          className=" flex flex-col justify-center text-white bg-blue-700 text-center whitespace-no-wrap py-2 rounded-xl progressBar"
          role="progressbar"
          style={{
            width: `${value}%`,
          }}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          {children}
        </div>
      </div>
    )
  }
  
  export default ProgressBar
  