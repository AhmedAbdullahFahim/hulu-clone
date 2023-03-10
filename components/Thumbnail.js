import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  console.log(result)
  return (
    <div
      ref={ref}
      className='group p-2 cursor-pointer transition transform duration-200 ease-in sm:hover:scale-105 hover:z-50'
    >
      <Image
        width={1920}
        height={1080}
        alt=''
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-medium'>
          {result.title || result.original_name}
        </h2>
        <p className='uppercase flex items-center opacity-0 group-hover:opacity-100'>
          {result.release_date || result.first_air_date}{' '}
          <HandThumbUpIcon className='h-5 mx-2' />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
