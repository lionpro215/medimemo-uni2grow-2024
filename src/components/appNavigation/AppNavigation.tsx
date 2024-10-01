import React, { useEffect, useState } from 'react'
import "./AppNavigation.css"
import MedicationIcon from '@mui/icons-material/Medication';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link, useLocation } from 'react-router-dom';


function AppNavigation() {

    const [changeStyle, setChangeStyle] = useState("");
    const location = useLocation();

    const HandleClicMedication = () :void => {
        setChangeStyle("Medication");
    }
    const HandleClicTherapie = () :void => {
        setChangeStyle("therapie");
    }
    const HandleClicContact = () :void => {
        setChangeStyle("contact");
    }
    // useEffect(() => {
    //     HandleClicMedication()
    //     HandleClicTherapie()
    //     HandleClicContact()
    // }, changeStyle)


  return (
    <div className='footer'>
        <Link to={"/medications"} className='footerlink' onClick={() => HandleClicMedication}>
            <div className='footicon'><MedicationIcon className={changeStyle === "Medication" ? 'selecticon' : 'iconfoot'}/> 
                <span className={changeStyle === "Medication" ? 'selectlink' : ''}>Medications</span>
            </div>
        </Link>
        <Link to={"/therapies"} className='footerlink' onClick={() => HandleClicTherapie}>
            <div className='footicon'><EditNoteIcon className={changeStyle === "therapie" ? 'selecticon' : 'iconfoot'}/> 
                <span className={changeStyle === "therapie" ? 'selectlink' : ''}>Therapie</span>
            </div>
        </Link>
        <Link to={"/contacts"} className='footerlink' onClick={() => HandleClicContact}>
            <div className='footicon'><ContactsIcon className={changeStyle === "contact" ? 'iconfoot' : 'selectlink'}/> 
                <span className={changeStyle === "contact" ? 'selectlink' : ''}>Contacts</span>
            </div>
        </Link>
      </div>
  )
}

export default AppNavigation