import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const BtnQuoteBox = ({getRandomAll,randomColor}) => {

    const backgroundBtn = {
        backgroundColor: randomColor
      }

  return (
    <button
    className='card_btn'
    style={backgroundBtn}
    onClick={getRandomAll}
  ><FaArrowAltCircleRight/></button>
  )
}

export default BtnQuoteBox