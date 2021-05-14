import React from 'react'

import PageVertical from '../components/PageVertical'
import NavBar2 from '../components/NavBar2'
import SearchBarMessage from '../components/SearchBarMessage'
import ListMessage from '../components/ListMessage'

const Message = () => {
  return (
    <PageVertical title={'Messages'} className={'w-100'}>
      <NavBar2 />
      <div className="py-5" style={{ background: '#d3dde7' }}>
        <SearchBarMessage />
      </div>
      <div className="py-5" style={{ background: '#ebf0f4' }}>
        <ListMessage />
      </div>
    </PageVertical>
  )
}

export default Message
