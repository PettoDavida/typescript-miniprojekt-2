import {useState} from 'react'
import "../CSS/fraktsätt.css"
import postnordLogo from '../Images/postnord-logo.jpeg'
import dhlLogo from '../Images/dhl-logo.png'
import instaboxLogo from '../Images/instabox-logo.png'
import { useNavigate } from 'react-router'

function Fraktsätt() {

  const navigate = useNavigate()


    const[value, setValue] = useState(0);
    let postnordExtended = "inactive"
    let postnordHemExtended = "inactive"
    let DHLExtended = "inactive"
    let instaboxExtended = "inactive"

    if(value === 1){
        postnordExtended = "postnordExtended"
      } else if (value === 2){
        postnordHemExtended = "postnordHemExtended"
      } else if (value === 3){
        DHLExtended = "DHLExtended"
      } else if (value === 4){
        instaboxExtended = "instaboxExtended"
      }

      console.log(value)
  return (
    <div className="mainDiv">
        <div className="formDiv">
            <span className='fraktSpan'>Välj fraktsätt</span>            

            <div className="postnordDiv">
            <input name='Radio' id="postnord" type="radio" onClick={() => setValue(1)}/>
            <label id="postnord" htmlFor="postnord">Postnord Ombud</label>
            <img className="fraktImg" src={postnordLogo} alt="" />
            <div className={postnordExtended}>
            <div className='leveransDag'>
            <p>Fri frakt!</p>
            <br />
            <p>Förväntad leveransdag</p>
            <strong>Lördagen den 26:e mars</strong>
            </div>
            <div className='leveransPlats'>
            <p>Levereras till</p>
            <strong>Okq8 Bärnstensgatan</strong>
            <p>Bärnstensgatan 3</p>
            <p>426 52 Västra frölunda</p>
            </div>
            </div>
            </div>
            
            <div className="postnordHemDiv">
            <input name='Radio' id="postnordHem" type="radio" onClick={() => setValue(2)} />
            <label id="postnordHem" htmlFor="postnordHem">Postnord hemleverans</label>
            <img className="fraktImg" src={postnordLogo} alt="" />
            <div className={postnordHemExtended}>
            <div className='leveransDag'>
            <p>29 kr</p>
            <br />
            <p>Förväntad leveransdag</p>
            <strong>Lördagen den 26:e mars (kl. 10-17) </strong>
            </div>
            <div className='leveransPlats'>
            <p>Levereras till</p>
            <strong>Din adress</strong>
            </div>

            </div>
            </div>

            <div className="DHLDiv">
            <input name='Radio' id="DHL" type="radio"  onClick={() => setValue(3)} />
            <label id="DHL" htmlFor="DHL">DHL</label>
            <img className="fraktImg" src={dhlLogo} alt="" />
            <div className={DHLExtended}>
            <div className='leveransDag'>
            <p>Fri frakt!</p>
            <br />
            <p>Förväntad leveransdag</p>
            <strong>Onsdagen den 23:e mars</strong>
            </div>
            <div className='leveransPlats'>
            <p>Levereras till</p>
            <strong>Ica nära Fiskebäck</strong>
            <p>Mungårdsgatan 21</p>
            <p>426 53 Västra frölunda</p>
            </div>

            </div>
            </div>

            <div className="instaboxDiv">
            <input name='Radio' id="instabox" type="radio" onClick={() => setValue(4)} />
            <label id="instabox" htmlFor="instabox">Instabox</label>
            <img className="fraktImg" src={instaboxLogo} alt="" />
            <div className={instaboxExtended}>
            <div className='leveransDag'>
            <p>Fri frakt!</p>
            <br />
            <p>Förväntad leveransdag</p>
            <strong>Måndagen den 21:e mars</strong>
            </div>
            <div className='leveransPlats'>
            <p>Levereras till</p>
            <strong>Okq8 Bärnstensgatan</strong>
            <p>Bärnstensgatan 3</p>
            <p>42652 Västra frölunda</p>
            </div>

            </div>
            </div>

            <div className="buttonDiv">
                <button className='buyButton' onClick={() => {navigate('betalning')}}>Slutför beställning</button>
                </div>
            </div>

            </div>
  )
  
}


export default Fraktsätt