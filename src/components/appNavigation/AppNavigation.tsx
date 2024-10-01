import React from 'react'
import "./AppNavigation.css"
import MedicationIcon from '@mui/icons-material/Medication';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ContactsIcon from '@mui/icons-material/Contacts';


function AppNavigation() {
  return (
    <div className='footer'>
        <div className='footicon'><MedicationIcon className='iconfoot'/> <span>Medications</span></div>
         <div className='footicon'><EditNoteIcon className='selecticon'/> <span>Therapie</span></div>
        <div className='footicon'><ContactsIcon className='iconfoot'/> <span>Contacts</span></div>
      </div>
  )
}

export default AppNavigation