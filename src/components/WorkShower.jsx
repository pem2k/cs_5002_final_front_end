import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function WorkShower({ work }){
    return(
    <span className='d-flex mt-1 mb-1'>
        <TypeAnimation sequence={[work]}
        wrapper="pre"
        speed={99}
        cursor={false}
        
    />
    </span>
    )
}