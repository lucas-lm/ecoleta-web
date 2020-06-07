import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

interface Props {
  onFileUpload: (file: File) => void
}

const Dropzone: React.FC<Props> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]
      const fileURL = URL.createObjectURL(file)
      setSelectedFileBlob(fileURL)
      onFileUpload(file)
    },
    [onFileUpload]
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  const [selectedFileBlob, setSelectedFileBlob] = useState('')

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileBlob ? (
        <img src={selectedFileBlob} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Imagem do estabelecimento
        </p>
      )}
    </div>
  )
}

export default Dropzone
