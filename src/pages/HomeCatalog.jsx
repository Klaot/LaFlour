import React from 'react'
import Sceleton from '../components/Sceleton';

function HomeCatalog() {
  const sceletonItem = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div>
      {
        sceletonItem.map((item, index) => <Sceleton key={index}/> )
      }
    </div>
  )
}

export default HomeCatalog