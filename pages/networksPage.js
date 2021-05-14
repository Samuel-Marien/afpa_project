import React from 'react'

import PageVertical from '../components/PageVertical'
import NavBar2 from '../components/NavBar2'
import SearchBarNetworks from '../components/SearchBarNetworks'
import NetworksContent from '../components/NetworksContent'

const Networks = () => {
  return (
    <PageVertical title={'My networks'} className={'w-100'}>
      <NavBar2 />
      <div className="py-5" style={{ background: '#d3dde7' }}>
        <SearchBarNetworks />
      </div>
      <div className="py-5" style={{ background: '#ebf0f4' }}>
        <NetworksContent />
      </div>
    </PageVertical>
  )
}

export default Networks
