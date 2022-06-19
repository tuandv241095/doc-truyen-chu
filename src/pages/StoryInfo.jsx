import React from 'react'
import { useParams } from 'react-router-dom';
import StoryFullInfo from '../components/Section/StoryFullInfo'
import { stories } from '../data/stories'

const StoryInfo = () => {
  const { id } = useParams();
  return (
    <div className='page'>
      <StoryFullInfo info={stories.find((s)=>s.id===id)} />
    </div>
  )
}

export default StoryInfo