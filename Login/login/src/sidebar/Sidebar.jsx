import React from 'react'
import Links from '../Links'
import Profile from './Profile'
export default function Sidebar({ activeTabIndex, setActiveTabIndex }) {
  return (
    <div>
        <Links></Links>
        <Profile   activeTabIndex={activeTabIndex}
                setActiveTabIndex={setActiveTabIndex}/>
    </div>
  )
}
