import React from 'react'

const HeaderIcon = ({ title, Icon }) => {
  return (
    <div className='group cursor-pointer flex flex-col items-center w-12 hover:text-white mr-5 sm:mr-0'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce ' />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </div>
  )
}

export default HeaderIcon
