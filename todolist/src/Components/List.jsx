import React from 'react'

function List() {
  return (
    <div className='List-wrapper'>

      <h2 className='heading'>
      My <span className='sub-heading'>To</span>-Do List
      </h2>

      <input className='searchbox' placeholder='search tasks here...'/>
    </div>
  )
}

export default List
