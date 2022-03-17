import React, { useState } from 'react'
import "../CSS/form.css"

function Form() {
  
  const [telefonnummer, setTelefonnummer] = useState('');
  const [adress, setAdress] = useState('');
  console.log(telefonnummer)
  console.log(adress)
  return (
    <div className="mainDiv">
        <div className="formDiv">
            <span>Ange kontaktuppgifter för att slutföra beställningen</span>
            <div className='inputDiv'>
            
            <input name='Förnamn' className="textInput" type="text" required minLength={1} autoComplete="given-name" />
            <label id="inputLabel" htmlFor="Förnamn">Förnamn</label>

            <input name='Efternamn' className="textInput" type="text" required minLength={1} autoComplete="family-name" />
            <label id="inputLabel" htmlFor="Efternamn">Efternamn</label>

            <input name='Mail' className="textInput" type="text" required minLength={1} autoComplete="email" />
            <label id="inputLabel" htmlFor="Mail">Mail</label>

            <input name='Telefonnummer' className="textInput" value={telefonnummer} onInput={e => setTelefonnummer(e.currentTarget.value)} type="text" required minLength={1} autoComplete="tel" />
            <label id="inputLabel" htmlFor="Telefonnummer">Telefonnummer</label>

            <input name='Adress' className="textInput" value={adress} onInput={e => setAdress(e.currentTarget.value)} type="text" required minLength={1} autoComplete="street-address" />
            <label id="inputLabel" htmlFor="Adress">Adress</label>

            </div>
            <div className="buttonDiv">
                <button className='buyButton'>Slutför beställning</button>
                </div>
            </div>
        </div>
  )
}

export default Form