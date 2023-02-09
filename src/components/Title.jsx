import React from 'react'
import "./title.css"

const Title = () => {
    return (
        <>
            <div className='title'>
                <h2>BRAHMA</h2>
            </div>
            <svg>
                <filter id="fire">
                    <feTurbulence id='turbulence' baseFrequency="0.1 0.1" numOctaves="2" seed="3">
                        <animate attributeName='baseFrequency' dur="5s" values="0.1 0.1;0.12 0.2" repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="10">
                    </feDisplacementMap>
                </filter>
            </svg>
        </>
    )
}

export default Title