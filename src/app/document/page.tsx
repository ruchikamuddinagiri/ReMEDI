// page.tsx
'use client'
import React, { ChangeEvent, useState } from 'react';
import mammoth from 'mammoth';
import { saveAs } from 'file-saver';

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fontBase64, setFontBase64] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      convertFontToBase64('/fonts/OpenDyslexic-Regular.otf'); 
    }
  };

  const convertFontToBase64 = (fontPath: string) => {
    fetch(fontPath)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result as string;
          setFontBase64(base64data);
        };
      });
  };

  const handleUpload = () => { 
    if (selectedFile) {
      processDocument(selectedFile);
    }
  };

  const processDocument = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const html = result.value; 

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              @font-face {
                font-family: 'OpenDyslexic';
                src: url('${fontBase64}') format('opentype');
                font-weight: normal;
                font-style: normal;
              }
              body {
                font-family: 'OpenDyslexic', sans-serif;
                font-size: 24px;
              }
            </style>
          </head>
          <body>
            ${html}
          </body>
        </html>`;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      saveAs(blob, `dyslexia-friendly-${file.name}.html`);
    } catch (error) {
      console.error('Error processing document:', error);
    }
  };

  return (
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
