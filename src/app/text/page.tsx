'use client'
import { useState } from 'react';
import styles from './page.module.css'; // Ensure you have this CSS module file for additional styling

interface StyleOptions {
  backgroundColor: string;
  fontColor: string;
  fontFamily: string;
  fontSize: string;
  lineSpacing: string;
}

const Page: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [styleOptions, setStyleOptions] = useState<StyleOptions>({
    backgroundColor: '#FFFFFF', // default background color
    fontColor: '#000000',       // default font color
    fontFamily: 'OpenDyslexic', // replace with your dyslexic font name
    fontSize: '16px',           // default font size
    lineSpacing: '1.6',         // default line spacing
  });

  // You can add more options as needed
  const backgroundOptions = ['#FFFFFF', '#F8DE7E', '#D1E231', '#99C794', '#5BC0EB', '#65737E'];
  const fontColorOptions = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC'];
  const fontFamilyOptions = ['OpenDyslexic', 'Arial', 'Verdana'];
  const fontSizeOptions = ['12px', '16px', '20px', '24px'];
  const lineSpacingOptions = ['1.4', '1.6', '1.8', '2.0'];

  const handleStyleChange = (optionType: keyof StyleOptions, value: string) => {
    setStyleOptions(prev => ({ ...prev, [optionType]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.textInput}>
        <textarea
          className={styles.textarea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste or type your text here..."
        />
        {/* Style controls: */}
        <div className={styles.controls}>
          <label>
            Background color:
            <select onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}>
              {backgroundOptions.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>

          <label>
            Font color:
            <select onChange={(e) => handleStyleChange('fontColor', e.target.value)}>
              {fontColorOptions.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>

          <label>
            Font family:
            <select onChange={(e) => handleStyleChange('fontFamily', e.target.value)}>
              {fontFamilyOptions.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </label>

          <label>
            Font size:
            <select onChange={(e) => handleStyleChange('fontSize', e.target.value)}>
              {fontSizeOptions.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>

          <label>
            Line spacing:
            <select onChange={(e) => handleStyleChange('lineSpacing', e.target.value)}>
              {lineSpacingOptions.map(spacing => (
                <option key={spacing} value={spacing}>{spacing}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div
        className={styles.textOutput}
        style={{
          backgroundColor: styleOptions.backgroundColor,
          color: styleOptions.fontColor,
          fontFamily: styleOptions.fontFamily,
          fontSize: styleOptions.fontSize,
          lineHeight: styleOptions.lineSpacing
        }}
      >
        {inputText}
      </div>
    </div>
  );
};

export default Page;
