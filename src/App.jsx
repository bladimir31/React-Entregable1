import { useState } from 'react'
import './App.css'
import QuoteBox from "./components/QuoteBox"
import quotes from "./json/quotes.json"
import color from "./utils/color"

function App() {

  const getIdRandom = array => parseInt(Math.random() * array.length)

  const firstElement = quotes[getIdRandom(quotes)]
  const firstColor = color[getIdRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstElement)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundCard = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIdRandom(quotes)])
    setRandomColor(color[getIdRandom(color)])
  }

  return (
    <div style={backgroundCard} className="App">
      <QuoteBox
       randomQuote={randomQuote}
       randomColor={randomColor}
       getRandomAll={getRandomAll}
       />

    </div>
    
  )
}

export default App
