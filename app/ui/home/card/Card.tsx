'use client'
import { useEffect } from 'react'

function Card() {
  useEffect(() => {
    console.log('Card')
  }, [])

  return (
    <div>
      <h1 className="text-red-600">Card ssss</h1>
    </div>
  )
}

export default Card
