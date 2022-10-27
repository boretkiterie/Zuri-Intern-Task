import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <header className="container">
        <img
         src='https://ca.slack-edge.com/T042F7V19Q8-U048AUJA411-957bb1f6cb38-512'
         alt="profile-pic"
         id="profile_img"
        />
        <h2 id="twitter">Blevin Coder</h2>
        <p id="slack">codercode</p>
    </header>
  )
}

export default Header