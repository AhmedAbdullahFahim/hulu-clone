import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = ({ results }) => {
  return (
    <FlipMove className='space-x-3 px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 ml-8 sm:ml-0'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results
