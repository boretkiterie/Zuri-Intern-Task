import React from 'react'
import './Links.css'

const Links = () => {
  return (
    <div className="links">
      <a href='https://training.zuri.team/' id="btn_zuri" target="_blank" rel="noreferrer">
        <h2>Zuri Training</h2>
        </a>
      <a href='http://books.zuri.team ' id="book" target="_blank" rel="noreferrer">
        <h2>Coding and Design Books</h2>
        <p>Grab your copy here</p>
      </a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id="Blevin-Boret"' id="book_python" target="_blank" rel="noreferrer" >
        <h2>Python for Beginners</h2>
        </a>
      <a href='https://background.zuri.team' id="pitch" target="_blank" rel="noreferrer">
        <h2>Get Instant Code Reviews</h2>
      </a>
      <a href='https://books.zuri.team/design-rules' id="book_design" target="_blank" rel="noreferrer">
        <h2>Free Design Rules For All Designers</h2>
        </a>
    </div>
  )
}

export default Links