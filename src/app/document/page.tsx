'use client'
import React, { ChangeEvent, useState } from 'react';

interface PresignedPostData {
  url: string;
  // Add any other fields you expect in the response, such as fields for form data if needed
}

// Example component or function to upload a file
async function uploadFile(file: File) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    const base64 = reader.result;
    
    const response = await fetch('/document/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ file: base64, filetype: file.type, fileName: file.name }),
    });

    if (response.ok) {
      console.log('File uploaded successfully');
      alert('Uploaded successfully');
    } else {
      console.error('Upload failed');
    }
  };
  reader.onerror = (error) => {
    console.error('Error reading file:', error);
  };
}


const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      uploadFile(selectedFile).then(() => {
        console.log('Upload complete');
        // Optionally reset the selected file here
        setSelectedFile(null);
      });
    }
  };

  return (
    // <div>
    //   <input type="file" onChange={handleFileChange} />
    //   <button onClick={handleUpload} disabled={!selectedFile}>Upload</button>
    // </div>
    <div className="flex items-center justify-center min-h-screen">
  <div className="w-1/2 h-3/4 flex flex-col justify-around items-center bg-white rounded-lg shadow-md overflow-hidden p-4">
    <p className="text-lg text-gray-700 font-semibold text-center">
      Please upload a file you'd like to customize. Choose your file below and click 'Upload' to customize it according to the font.
    </p>
    <input
      type="file"
      onChange={handleFileChange}
      className="block w-3/4 text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-pink-50 file:text-pink-700
                hover:file:bg-pink-100"
    />
    <button
      onClick={handleUpload}
      disabled={!selectedFile}
      className="mt-4 disabled:opacity-50 disabled:cursor-not-allowed w-3/4 px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors"
    >Upload</button>
  </div>
</div>



  );
};

export default FileUploader;
