"use client"

import React from 'react'
import {motion} from 'framer-motion'


const TestPage = () => {
    const variants = {
        variant1:{
            x:400,
            y:300,
            opacity: 0.5,
            transition:{ delay:2, duration:4 }
        },
        variant2:{
            x:100,
            y:-300,
            rotation:90,
        },
    };

  return (
    <div className='h-full flex items-center justify-center'>
        <motion.div className='h-96 w-96 bg-purple-500 rounded' 
        initial={{ x: -100 }}
        variants={variants}
        animate="variant1"
        ></motion.div>
    </div>
  )
}

export default TestPage