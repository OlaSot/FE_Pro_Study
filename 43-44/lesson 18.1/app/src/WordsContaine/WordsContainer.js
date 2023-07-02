import React, { useState } from 'react'
import Wordslist from '../Wordslist/Wordslist'
import Addword from '../Addword/Addword'

export default function WordsContainer() {
    const [words, setWords] = useState(['word1', 'word2', 'word3'])
  return (
    <div>
        <Addword  handler = {(word) => setWords([...words, word])}/>
        <Wordslist words={words} />
    </div>
  )
}
