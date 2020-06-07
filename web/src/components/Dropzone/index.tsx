import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

const fileUploadLabel = (
  <p>
    <FiUpload />
    Imagem do estabelecimento
  </p>
);

interface IProps {
  fileChange: (file: File) => void;
}

const Dropzone: React.FC<IProps> = ({ fileChange }: IProps) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles: Array<object>) => {
      const file: File = acceptedFiles[0] as File;
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);
      fileChange(file);
    },
    [fileChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="images/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumb" />
      ) : (
        fileUploadLabel
      )}
    </div>
  );
};

export default Dropzone;
