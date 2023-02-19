import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon'
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center m-5 justify-between h-auto'>
      <div className='flex justify-evenly max-w-2xl flex-grow pl-12 sm:pl-0 '>
        <HeaderIcon title='HOME' Icon={HomeIcon} />
        <HeaderIcon title='TRENDING' Icon={BoltIcon} />
        <HeaderIcon title='VERIFIED' Icon={CheckBadgeIcon} />
        <HeaderIcon title='COLLECTION' Icon={RectangleStackIcon} />
        <HeaderIcon title='SEARCH' Icon={MagnifyingGlassIcon} />
        <HeaderIcon title='ACCOUNT' Icon={UserIcon} />
      </div>
      <Image
        src='/hulu-logo.png'
        alt=''
        width={200}
        height={100}
        className='object-contain ml-5 sm:ml-0'
      />
    </header>
  )
}

export default Header
