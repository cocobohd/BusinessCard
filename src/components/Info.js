import React from "react";
import imgperson from '../imgs/person.jpg'
import imgiconmail from '../imgs/Mail.svg'
import imgiconlink from '../imgs/in.png'

export default function Info() {
  return (
    <div className="info--container">
      <img className="info--person" src={imgperson} alt='person'/>
      <h1 className="info--name">Hora Bohdan</h1>
      <p className="info--specials">Frontend Developer</p>
      <a className="info--website" href="https://www.youtube.com/">horabohdan.website</a>
      <div className="info--buttons">
        <button className="info--btn mail"><img src={imgiconmail} alt='mailicon'/>Email</button>
        <button className="info--btn linkedin"><img className="linkedin-img" src={imgiconlink} alt='liicon'/>LinkedIn</button>
      </div>
    </div>
  )
}
