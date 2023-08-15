import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [words, setWords] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setWords(value);
  }

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox words={words} />
          <TextArea onChange={handleChange} />
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
