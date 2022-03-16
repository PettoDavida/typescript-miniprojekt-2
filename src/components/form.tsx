import React from 'react'
import "../CSS/form.css"

function form() {
  return (
    <div className="mainDiv">
        <div className="formDiv">
            <span>Ange kontaktuppgifter för att slutföra beställningen</span>
            <div className='inputDiv'>
            
            <input name='Förnamn' id="textInput" type="text" required minLength={1} autoComplete="given-name" />
            <label id="inputLabel" htmlFor="Förnamn">Förnamn</label>

            <input name='Efternamn' id="textInput" type="text" required minLength={1} autoComplete="family-name" />
            <label id="inputLabel" htmlFor="Efternamn">Efternamn</label>

            <input name='Mail' id="textInput" type="text" required minLength={1} autoComplete="email" />
            <label id="inputLabel" htmlFor="Mail">Mail</label>

            <input name='Telefonnummer' id="textInput" type="text" required minLength={1} autoComplete="tel" />
            <label id="inputLabel" htmlFor="Telefonnummer">Telefonnummer</label>

            <input name='Adress' id="textInput" type="text" required minLength={1} autoComplete="street-address" />
            <label id="inputLabel" htmlFor="Adress">Adress</label>

            </div>
            <div className="buttonDiv">
                <button className='buyButton'>Slutför beställning</button>
                </div>
            </div>
        </div>
  )
}

export default form