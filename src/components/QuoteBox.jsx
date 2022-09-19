import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import BtnQuoteBox from './BtnQuoteBox'

const QuoteBox = ({ randomQuote, randomColor,getRandomAll }) => {

  const colorText = {
    color: randomColor
  }

  return (
    <article style={colorText} className='card'>
      <FaQuoteLeft className='Quote'/>
      <p className='card_quote'>{randomQuote.quote}</p>
      <h1 className='card_author'>{randomQuote.author}</h1>
      <BtnQuoteBox
       randomColor={randomColor}
       getRandomAll={getRandomAll}
       />
    </article>
  )
}

export default QuoteBox