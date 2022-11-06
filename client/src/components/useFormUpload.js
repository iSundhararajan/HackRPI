import { useCallback, useState } from 'react'
import { useMLModel } from '../hooks/useMLModel'

export function useFormUpload() {
  const [file, setFile] = useState([])
  const [prediction, setPrediction] = useState([])
  const [error, setError] = useState(null)

  const statusType = {
    IDLE: 'IDLE',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
  }

  const [status, setStatus] = useState(statusType.IDLE)

  const { predict } = useMLModel({
    modelPath: './model/model.json',
    metadataPath: './model/metadata.json',
  })

  const handleResults = useCallback(async (data) => {
    setPrediction(data)

    let picture = data.className.replace(/(_)/gi, ' ')
    if (picture === 'Class 1') {
      picture = 'No Cancer'
    }

  }, [])

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const [single] = acceptedFiles
      setFile(
        Object.assign(single, {
          preview: URL.createObjectURL(single),
        })
      )

      const image = document.getElementById('image')
      const mlPrediction = await predict(image)

      await handleResults(mlPrediction)
    } catch (err) {
      setError(err)
      setStatus(statusType.REJECTED)
    } finally {
      setStatus(statusType.FULFILLED)
    }
  }, [])

  return {
    onDrop,
    file,
    prediction,
    error,
    isLoading: status === statusType.IDLE,
    isFinished: status === statusType.FULFILLED,
    isRejected: status === statusType.REJECTED,
  }
}
