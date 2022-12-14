import React from 'react'

export default function Quote({ quote }) {
  return (
    <>
      <div className='quote-container'>
        <h1 className='quote-text'>{`"${quote.text}"`}</h1>
        <h2 className='quote-author'>{`- ${quote.author || 'Anonymous'}`}</h2>
      </div>
      <a
        className='twitter-share-button'
        href={`https://twitter.com/intent/tweet?text="${quote.text}"%0a- ${quote.author}%0a%0aQuote found on: random-quote-generator-taupe.vercel.app`}
      >
        Tweet this quote<i className='fa-brands fa-twitter'></i>
      </a>
    </>
  )
}
