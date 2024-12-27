import { ChevronLeft, ChevronRight, Square, SquareCheckBig } from 'lucide-react'
import React, { useState } from 'react'


export default function Home({image} )  {
const [imageIndex, setImageIndex] = useState(0)
function nextButton () {
setImageIndex(index => {
  if (index === image.length - 1) return 0
  return index + 1
})
}
function prevButton () {
setImageIndex(index => {
  if (index === 0) return image.length - 1
  return index - 1
})
}
  return (
    <seaction className=" ">
<div className='  d-flex overflow-hidden ml-2 mt-3' >
<img src={image[imageIndex]} className="object-fit-fill border rounded bg-transparent  w-50 d-flex justify-content-center float-none"/>
</div >
<button onClick={prevButton} className='prev-btn btn'> <ChevronLeft className='symb'/>  </button>
<button onClick={nextButton} className='next-btn btn'><ChevronRight/> </button>
{image.map((_,index) => (
  <button className='btn checked' key={index} onClick={() => setImageIndex(index)}>{index === imageIndex ? <SquareCheckBig /> : <Square />}</button>
))}
    </seaction>
  )
}
