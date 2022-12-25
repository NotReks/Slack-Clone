import { AccessTime, HelpOutline, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useStateValue } from '../StateProvider'
import './Header.css'

function Header() {
  const [{ user }] = useStateValue()

  return (
    <div className='header'>
      <div className="header__left">
        <Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL}/>
        <AccessTime/>
      </div>
      <div className="header__search">
        <Search/>
        <input placeholder="Search Slack" type="text" />
      </div>
      <div className="header__right">
        <HelpOutline/>
      </div>
    </div>
  )
}

export default Header