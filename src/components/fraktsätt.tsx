import {useContext, useState} from 'react'
import "../CSS/fraktsätt.css"
import postnordLogo from '../Images/postnord-logo.jpeg'
import dhlLogo from '../Images/dhl-logo.png'
import instaboxLogo from '../Images/instabox-logo.png'
import { useNavigate } from 'react-router'
import { contactInfoContext, fraktContext } from './context'
import { Button, Card, Radio, Typography } from '@mui/material'


enum Sättfrakt{
  empty = 0,
  Postnord,
  Postnordhem,
  DHL,
  Instabox
}

function Fraktsätt() {

  const navigate = useNavigate()
  const {setFrakt} = useContext(fraktContext)
  const {contactInfo} = useContext(contactInfoContext)

  console.log(contactInfo);
  

  const [selectedValue, setSelectedValue] = useState(Sättfrakt.empty);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value) as Sättfrakt)
  }

  const LeveransSätt = (props: any) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <Radio 
          checked={selectedValue === props.sätt} 
          onChange={handleChange}
          value={props.sätt}
        />
        <img className='fraktlogo' src={props.icon} alt=""/>
        <Typography>{Sättfrakt[props.sätt]}</Typography>
      </div>
    )
  }

  const LeveransInfo = (props: any) => {

    setFrakt(props.fraktPris)

    return(
        <div style={{display: selectedValue === props.sätt ? "block" : "none"}}>
          <div style={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gridColumnGap: '2rem'}}>
            <div style={{ width: '100%' }}>
              <Typography>{props.fraktPris}kr frakt</Typography>
            </div>

            <div style={{ width: '100%' }}>
              <Typography>Förväntad leveransdag</Typography> 
              <Typography>{new Intl.DateTimeFormat('sv-SE', { dateStyle: 'full' }).format(date)}</Typography>
            </div>

            <div style={{ width: '100%', gridColumnStart: '2', gridRow: '1 / 3'}}>
              <Typography>Levereras till</Typography>
              <Typography>{contactInfo.streetAddress}</Typography>
              <Typography>{contactInfo.zip} {contactInfo.city}</Typography>
            </div>
          </div>
        </div>
    )
  }

  let date = new Date();
  date.setDate(date.getDate() + 5);

  let dayOfWeek = date.getDay();

  if (dayOfWeek === 6) {
    date.setDate(date.getDate() + 2);
  }

  if (dayOfWeek === 0) {
    date.setDate(date.getDate() + 1);
  }
  
  return (
    <div className="ContactInfoDiv">
      <Card sx={{display: 'inline-block', padding: '2rem'}} raised={true}>
            <Typography>Välj fraktsätt</Typography>
              <LeveransSätt sätt={Sättfrakt.Postnord} icon={postnordLogo}/>
              <LeveransInfo sätt={Sättfrakt.Postnord} fraktPris={79}/>
    
              <LeveransSätt sätt={Sättfrakt.Postnordhem} icon={postnordLogo}/>
              <LeveransInfo sätt={Sättfrakt.Postnordhem} fraktPris={155}/>

              <LeveransSätt sätt={Sättfrakt.DHL} icon={dhlLogo}/>
              <LeveransInfo sätt={Sättfrakt.DHL} fraktPris={20}/>

              <LeveransSätt sätt={Sättfrakt.Instabox} icon={instaboxLogo}/>
              <LeveransInfo sätt={Sättfrakt.Instabox} fraktPris={99}/>

            <Button disabled={selectedValue === Sättfrakt.empty ? true : false}variant='contained' onClick={() => {navigate('betalning')}}>Välj Betalsätt</Button>
      </Card>
    </div>
  )
  
}


export default Fraktsätt