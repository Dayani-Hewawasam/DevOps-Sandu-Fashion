import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1> Keep Your Messages Here</h1>

        <p>Stay updated </p>
   
        <div>
            <input type="email" placeholder='Type your message' />
            <button>Send</button>
        </div>
    </div>

  )
}
export default NewsLetter