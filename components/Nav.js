import requests from '@/utils/requests'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  return (
    <nav className='relative'>
      <div className='flex text-2xl space-x-10 sm:space-x-20 px:10 sm:px-20 whitespace-nowrap overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-red-500 pb-5'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className='cursor-pointer hover:text-white transition transform duration-100 hover:scale-125 active:text-red-500 first:ml-20 last:pr-20 sm:first:ml-0 sm:last:pr-0'
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-[2.04rem] w-1/12' />
    </nav>
  )
}

export default Nav
