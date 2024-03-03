'use client'
import { useState, useMemo } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
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
  const [isMuted, setIsMuted] = useState(false);
  const [styleOptions, setStyleOptions] = useState<StyleOptions>({
    backgroundColor: '#FFFFFF', // default background color
    fontColor: '#000000',       // default font color
    fontFamily: 'OpenDyslexic', // replace with your dyslexic font name
    fontSize: '20px',           // default font size
    lineSpacing: '1.6',         // default line spacing
  });

  const [isTextPresent, setIsTextPresent] = useState(false);
  useEffect(() => {
    setIsTextPresent(inputText.trim().length > 0);
  }, [inputText]); // Dependency array ensures this only runs when inputText changes

  const renderTextWithBoldFirstLetters = (text: string) => {
    return (
      <span>
        {text.toLowerCase().split(' ').map((word, index) => (
          <Fragment key={`first-letter-${index}`}>
            {index !== 0 && <span style={{ marginRight: '4px' }}></span>}
            <strong>{word.charAt(0)}</strong>{word.slice(1)}{' '}
          </Fragment>
        ))}
      </span>
    );
  };

  const toggleSpeech = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
        // If currently muted, start speaking
        const utterance = new SpeechSynthesisUtterance(inputText);
        utterance.rate = 0.7; // Adjust for your needs
        speechSynthesis.speak(utterance);
    } else {
        // If currently speaking, stop (mute)
        speechSynthesis.cancel();
    }
};



  // You can add more options as needed
  const backgroundOptions = ['#FFFFFF', '#F8DE7E', '#D1E231', '#99C794', '#5BC0EB', '#65737E'];
  const fontColorOptions = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC'];
  const fontFamilyOptions = ['OpenDyslexic', 'Arial', 'Verdana'];
  const fontSizeOptions = ['12px', '16px', '20px', '24px'];
  const lineSpacingOptions = ['1.4', '1.6', '1.8', '2.0'];

  const handleStyleChange = (optionType: keyof StyleOptions, value: string) => {
    // Append 'px' only for fontSize option
    const newValue = optionType === 'fontSize' ? `${value}` : value;
    setStyleOptions(prev => ({ ...prev, [optionType]: newValue }));
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.textInput}>
      <div className={styles.textInputContainer}> {/* Make sure to define this class in your CSS */}
            <textarea
                className={styles.textarea}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste or type your text here..."
            />
            <button 
                    onClick={toggleSpeech}
                    className={styles.textToSpeechButton}
                    aria-label={isMuted ? "Speak" : "Mute"}
                >
                    <Image
                        src={isMuted ? "/mute.png" : "/speaker-icon.png"}
                        alt={isMuted ? "Speak" : "Mute"}
                        width={24}
                        height={24}
                    />
                </button>
            
            </div>
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
            <input
                type="range"
                min="12" // Minimum font size
                max="54" // Maximum font size
                value={parseInt(styleOptions.fontSize, 10)} // Convert fontSize to number to work with range input
                onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)} // Append 'px' to the value
            />
            {styleOptions.fontSize} {/* Display the current font size */}
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
        {!isTextPresent && <div className={styles.placeholder}>converted text..</div>}
        {isTextPresent && renderTextWithBoldFirstLetters(inputText)}
      </div>
    </div>
  );
};

export default Page;
