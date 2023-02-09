import React from 'react'
import Countdown from 'react-countdown';
import "./Counter.css"
function Counter() {
  return (
    <>
        <Countdown date={Date.now() + 100000} />
    </>
  )
}

export default Counter