import ProgressBar from './ProgressBar'

function PredictionResult({ prediction }) {
  const precision = ((prediction.probability * 100)-14.26).toFixed(2)

  return prediction.probability > 0.6 ? (
    <article className="w-[500px] bg-gray-100 rounded-xl p-3 h-56">
      <h2 className="text-xl py-8 font-bold">
       The item is: {prediction.className.replace(/(_)/gi, ' ')}
      </h2>
      <h5 className='text-xl py-2'>Probability</h5>
      <ProgressBar min="0" max="100" value={precision}>
        {precision.replace('.', ',')} %
      </ProgressBar>
    </article>
  ) : (
    <div type="warning">
      Fail to identity, try again with a different image.
    </div>
  )
}

export default PredictionResult
