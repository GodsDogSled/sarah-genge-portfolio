import React from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

const UppyUpload = () => {
  const uppy = new Uppy({
    id: 'video-uploader',
    restrictions: {
      maxFileSize: 7 * 1024 * 1024 * 1024, // 7GB
      allowedFileTypes: ['video/*']
    }
  }).use(XHRUpload, {
    endpoint: 'http://localhost:3000/upload-chunk',
    formData: true,
    fieldName: 'file',
    allowedMetaFields: ['chunks'],
    chunking: {
      enabled: true,
      chunkSize: 10 * 1024 * 1024 // 10MB chunks
    },
    headers: file => {
      // console.log('Preparing to upload file:', file);
      return {
        'uppy-auth-token': file.uploadId || Math.random().toString(36).substring(2),
        'uppy-chunks-total': file.chunks ? file.chunks.length : 1,
        'uppy-chunk-index': file.chunks ? file.chunk.index : 0,
        'uppy-total-size': file.size,
        'uppy-filename': file.name
      };
    }
  })

  uppy.on('upload-success', (file, response) => {
    console.log('Upload complete:', file.name);
  });

  return (
    <Dashboard
      uppy={uppy}
      plugins={['Webcam']}
      width="100%"
      height="400px"
    />
  );
};

export default UppyUpload;