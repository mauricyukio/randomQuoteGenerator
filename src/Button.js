import React from 'react'

export default function Button({ getNextQuote }) {
  return (
    <button className='next-quote-btn' onClick={() => getNextQuote()}>
      Next Quote
      <i className='fa-solid fa-angles-right'></i>
    </button>
  )
}
