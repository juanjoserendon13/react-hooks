import React, { useMemo } from 'react';
import useFetch from '../hooks/useFetch';

const UseMemoSection = () => {
  const { data } = useFetch('https://api.kanye.rest/ajzbc/kanye.rest/master/quotes.json')

  const computeLongestWord = (sentence) => {
    console.log('computed');
    if (!sentence) {
      return [];
    }
    let longestWord = '';
    JSON.parse(sentence).quote.split(' ').forEach(w => {
      if (w.length > longestWord.length) {
        longestWord = w;
      }
    });
    return longestWord;
  };
  // Use memo for expensive calculations in the current component
  // and run again if the dependency array changes
  const longestWord = useMemo(() => computeLongestWord(data), [data]);
  return (
    <div>
      Computed sentence: {longestWord}
    </div>
  )
}

export default UseMemoSection
