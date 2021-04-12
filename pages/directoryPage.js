import React from 'react'

import PageVertical from '../components/PageVertical'
import NavBar2 from '../components/NavBar2'
import SearchBarDirectory from '../components/SearchBarDirectory'
import DirectoryContent from '../components/DirectoryContent'

const Directory = (props) => {
  return (
    <PageVertical title={'Directory'} className={'w-100'}>
      <NavBar2 />
      <div className="py-5" style={{ background: '#d3dde7' }}>
        <SearchBarDirectory />
        <DirectoryContent />
      </div>
    </PageVertical>
  )
}

export default Directory
