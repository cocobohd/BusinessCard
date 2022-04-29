import React from "react";
import twitter from '../imgs/Twitter.svg'
import facebook from '../imgs/Facebook.svg'
import instagram from '../imgs/Instagram.svg'
import github from '../imgs/GitHub.svg'

export default function Footer() {
  return (
    <div className="footer">
      <img className="footer--links" src={twitter} alt='twitter'/>
      <img className="footer--links" src={facebook} alt='facebook'/>
      <img className="footer--links" src={instagram} alt='instagram'/>
      <img className="footer--links" src={github} alt='github'/>
    </div>
  )
}