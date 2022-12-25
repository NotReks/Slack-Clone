import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { useStateValue } from '../StateProvider'
import './Sidebar.css'
import SideBarOption from './SideBarOption'

function Sidebar() {
  const [{user}] = useStateValue()
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    ))
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Reks</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create/>
      </div>
      <SideBarOption Icon={InsertComment} title="Threads"/>
      <SideBarOption Icon={Inbox} title="Mentions & Reactions"/>
      <SideBarOption Icon={Drafts} title="Saved Items"/>
      <SideBarOption Icon={BookmarkBorder} title="Channel Browser"/>
      <SideBarOption Icon={PeopleAlt} title="People & User Groups"/>
      <SideBarOption Icon={Apps} title="Apps"/>
      <SideBarOption Icon={FileCopy} title="File Browser"/>
      <SideBarOption Icon={ExpandLess} title="Show Less"/>
      <hr/>
      <SideBarOption Icon={ExpandMore} title="Channels"/>
      <hr/>
      <SideBarOption Icon={Add} addChannelOption title="Add Channel"/>

      {channels.map((channel) => (
        <SideBarOption title={channel.name} id={channel.id}/>
      ))}
    </div>
  )
}

export default Sidebar