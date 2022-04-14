import {useContext, useState} from 'react'
import "../CSS/delivery.css"
import postnordLogo from '../Images/postnord-logo.jpeg'
import dhlLogo from '../Images/dhl-logo.png'
import instaboxLogo from '../Images/instabox-logo.png'
import { useNavigate } from 'react-router'
import { contactInfoContext, fraktContext } from '../components/context'
import { Button, Card, Radio, Typography } from '@mui/material'


enum DeliveryMethod{
  empty = 0,
  Postnord,
  Postnordhem,
  DHL,
  Instabox
}

function DeliveryPage() {

  const navigate = useNavigate()
  const {setFrakt} = useContext(fraktContext)
  const {contactInfo} = useContext(contactInfoContext)

  console.log(contactInfo);
  

  const [selectedValue, setSelectedValue] = useState(DeliveryMethod.empty);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(parseInt(event.target.value) as DeliveryMethod)
  }

  const RenderDeliveryMethod = (props: any) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <Radio 
          checked={selectedValue === props.method} 
          onChange={handleChange}
          value={props.method}
        />
        <img className='fraktlogo' src={props.icon} alt=""/>
        <Typography>{DeliveryMethod[props.method]}</Typography>
      </div>
    )
  }

  const DeliveryInfo = (props: any) => {

    setFrakt(props.deliveryCost)

    return(
        <div style={{display: selectedValue === props.method ? "block" : "none"}}>
          <div style={{display: "grid", gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gridColumnGap: '2rem'}}>
            <div style={{ width: '100%' }}>
              <Typography>{props.deliveryCost}kr frakt</Typography>
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
              <RenderDeliveryMethod method={DeliveryMethod.Postnord} icon={postnordLogo}/>
              <DeliveryInfo method={DeliveryMethod.Postnord} deliveryCost={79}/>
    
              <RenderDeliveryMethod method={DeliveryMethod.Postnordhem} icon={postnordLogo}/>
              <DeliveryInfo method={DeliveryMethod.Postnordhem} deliveryCost={155}/>

              <RenderDeliveryMethod method={DeliveryMethod.DHL} icon={dhlLogo}/>
              <DeliveryInfo method={DeliveryMethod.DHL} deliveryCost={20}/>

              <RenderDeliveryMethod method={DeliveryMethod.Instabox} icon={instaboxLogo}/>
              <DeliveryInfo method={DeliveryMethod.Instabox} deliveryCost={99}/>

            <Button disabled={selectedValue === DeliveryMethod.empty ? true : false}variant='contained' onClick={() => {navigate('betalning')}}>Välj Betalsätt</Button>
      </Card>
    </div>
  )
  
}


export default DeliveryPage