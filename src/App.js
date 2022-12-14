import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'
import Quote from './Quote'

function App() {
  const [allQuotes, setAllQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState({})

  const colors = [
    '#fcf0cf',
    '#b2ebe0',
    '#ffbfa3',
    '#d9effc',
    '#f9e1e0',
    '#adddce',
    '#b5ddd1',
    '#c5d7c0',
    '#f4dcd6',
    '#dfc7c1',
    '#84b4c8',
    '#e8dff5',
    '#fce1e4',
    '#fcf4dd',
    '#ddedea',
    '#daeaf6',
    '#f6f6eb',
    '#d5d6ea',
    '#d7ecd9',
    '#f5d5cb',
    '#f6ecf5',
    '#f3ddf2',
    '#f5e1fd',
    '#ffdbff',
    '#fca5af',
    '#d2fdbb',
    '#ffc8d7',
    '#c1e7e3',
    '#b0efef',
    '#83d9dc',
    '#ffd5b9',
  ]

  useEffect(() => {
    setCurrentQuote({ text: 'Loading, please wait...', author: null })
  }, [])

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const firstQuote = data[Math.floor(Math.random() * data.length)]
        setAllQuotes(data)
        setCurrentQuote(firstQuote)
      })
      .catch((err) => console.log(err))
  }, [])

  const getNextQuote = () => {
    const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setCurrentQuote(randomQuote)
    document.documentElement.style.setProperty('--primary', randomColor)
  }

  return (
    <>
      <Header />
      <main>
        <Quote quote={currentQuote} />
        <Button getNextQuote={getNextQuote} />
      </main>
      <Footer />
    </>
  )
}

export default App
