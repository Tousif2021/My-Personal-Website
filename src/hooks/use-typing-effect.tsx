
import { useState, useEffect } from 'react';

export function useTypingEffect(
  text: string,
  options = {
    typingSpeed: 100,
    delayBeforeStart: 500,
    cursorBlinkSpeed: 400
  }
) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Handle the typing animation
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, options.typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, text, options.typingSpeed, isComplete]);

  // Initial delay before typing starts
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Start typing after initial delay
    }, options.delayBeforeStart);

    return () => clearTimeout(timeout);
  }, [options.delayBeforeStart]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (isComplete) {
        setShowCursor(prev => !prev);
      }
    }, options.cursorBlinkSpeed);

    return () => clearInterval(blinkInterval);
  }, [isComplete, options.cursorBlinkSpeed]);

  return { 
    displayText, 
    showCursor, 
    isComplete, 
    fullText: text, 
    cursor: <span className={`inline-block w-0.5 h-6 ml-0.5 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.2s' }} />
  };
}
