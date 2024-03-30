import React from 'react'
import ReviewSlider from './ReviewSlider'

const RevsAndRecmnds = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>Client <span className='text-yellow-400'>Reviews</span></h1>
    <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
      <ReviewSlider />
    </div>
    </div>
  )
}

export default RevsAndRecmnds