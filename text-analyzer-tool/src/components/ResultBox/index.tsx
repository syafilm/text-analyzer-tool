import { useEffect, useState } from 'react'
import { pronouns } from '../../data/pronouns'
import './index.scss'

interface ResultBoxComponent{
  words: string
}

interface updatedResult {
  [key: string]: number
}

interface resultState {
  Words: number;
  Characters: number;
  Sentences: number;
  Paragraphs: number;
  Pronouns: number;
}

const ResultBox = ({words}: ResultBoxComponent) => {
  const [result, setResult] = useState<resultState>({
    Words: 0,
    Characters: 0,
    Sentences: 0,
    Paragraphs: 0,
    Pronouns: 0,
  })

  useEffect(() => {
    if(words.length > 0){
      const activeWords = words.split(' ').length
      const activeCharacters = words.length
      const activeSentences = words.split(/[.!?](?!\d)/g).filter(Boolean).length;
      const activeParagraphs = words.replace(/\n$/gm, '').split(/\n/).length
      const activePronouns = words.split(' ').filter(w => w && pronouns.includes(w.toLocaleLowerCase()))

      setResult(prev => ({ ...prev, 
        Words: activeWords, 
        Characters: activeCharacters,
        Sentences: activeSentences,
        Paragraphs: activeParagraphs,
        Pronouns: activePronouns.length
      }));
    }
  }, [words])

  return (
    <div className="result-bar">
      {Object.keys(result).map((item: string) => {
        const updatedForm: updatedResult = { ...result };

        return(
          <div className="result-box" key={item}>
            <span className="box-title">{item}</span>
            <span className="box-value">
              {
                updatedForm[item]
              }
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default ResultBox
