"use client"

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import Brain from '@/components/brain'
import { useRef } from "react";



const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });


  return (
    
    <motion.div
    className='h-full'
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
      {/* container */}
      <div className='h-full overflow-scroll lg:flex'>
        {/* Text container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* Biography container */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
           <div className='self-end'>
           <svg width="350" height="120" viewBox="0 0 10 230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 202C15.126 197.753 28.6918 195.101 41.8333 190.889C49.4536 188.447 56.8829 185.495 64.4444 182.889C67.1427 181.959 75.3524 181.026 77.1111 178.111C78.7277 175.432 75.8024 170.997 74.6667 169.056C68.2858 158.15 60.2247 148.283 54.5556 136.944C46.6342 121.102 41.2314 100.181 50.1111 83.6667C50.9824 82.0461 62.8317 62.9261 63.6667 72.1111C64.3961 80.1353 61.6665 88.8571 60.1111 96.5556C54.8918 122.389 50.663 148.28 49.5556 174.667C48.7186 194.609 47.9515 221.653 60.3889 238.944C62.2095 241.476 64.9551 244.985 68 246" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <path d="M34 198C52.8651 198.858 70.4943 211.603 88.6667 216C95.3363 217.614 94.7649 184.147 95 179.444C95.2061 175.322 103.574 182.69 106 180.333C110.587 175.878 110.88 165.594 113.778 159.889C116.968 153.607 122.244 148.467 129.556 148C140.041 147.331 150.528 151.098 160.111 145C166.541 140.908 151.116 140.375 149.778 140.222C138.496 138.936 124.664 140.132 114.444 134.333C104.976 128.961 106.56 118.893 111.444 110.667C120.26 95.8192 135.885 84.5618 152.556 80.3333C169.793 75.9612 186.899 77.2555 202.444 85.7778C207.053 88.3045 215.69 95.9097 221.722 93.5556C233.592 88.9234 235.148 64.4347 235.5 54.2222C236.095 36.9623 230.996 19.4997 218.889 6.83334C191.009 -22.3334 181.592 89.4912 181.056 94.9445C177.978 126.246 173.536 167.171 189 196.5C195.179 208.219 203.422 204.583 206.722 193.444C212.024 175.55 210 155.603 210 137.167C210 134.753 211.589 128.387 207.944 128.056C207.289 127.996 202.248 129.52 203.389 130C210.245 132.887 220.282 132 227.611 132C238.635 132 225.065 131.799 224.667 128.611C223.565 119.795 235.515 111.178 241.167 106.667C250.279 99.3928 260.264 93.7964 271.944 92.1667C279.72 91.0817 283.896 88.0592 291 84" stroke="black" stroke-width="3" stroke-linecap="round"/>
          <path d="M146 211C164.565 192.435 183.945 174.719 205.778 160C223.072 148.341 241.679 138.596 260.111 128.889C264.405 126.627 268.454 124.515 273 123" stroke="black" stroke-width="3" stroke-linecap="round"/>
          </svg>
          {/* scroll SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
           </div>
          </div>
          {/* Skills set container */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* skills title */}
          <h1 className='font-bold text-2xl'>SKILLS SET</h1>
          {/* skills list */}
          <div className='flex gap-1 flex-wrap'>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>HTML</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CSS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Javascript</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React.js</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next.js</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Framer Motion</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node.js</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Postman</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Figma</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Photoshop</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Webpack</div>
          </div>
          {/* scroll svg */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* Experience container */}
      <div className='flex flex-col gap-12 justify-center pb-48'>
            {/* Experiences title */}
          <h1 className='font-bold text-2xl'>Experiences</h1>
          {/* Experience List */}
          <div className=''>
            {/* experience list items */}
            <div className='flex justify-between h-48'>
              {/* Left */}
              <div className='w-1/3 bg-red-200'>
                {/* job title */}
                <div className='bg-green-400 p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job desc */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold p-3'>Jan 2024 - present</div>
                {/* job company */}
                <div className='p-3 text-sm rounded bg-green-400 font-semibold w-fit'>PT. TONGDA INFORMATION INDONESIA</div>
              </div>
              {/* center */}
              <div className='w-1/4'>
              {/* line */}
              <div className='w-1 h-full bg-gray-600 rounded relative'>
                {/* circle line */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
              </div>
              </div>
              {/* right */}
              <div className='w-1/3'></div>
            </div>
            <div className='flex justify-between h-48'>
              {/* Left */}
              <div className='w-1/3'></div>
              {/* center */}
              <div className='w-1/4'>
              {/* line */}
              <div className='w-1 h-full bg-gray-600 rounded relative'>
                {/* circle line */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
              </div>
              </div>
              {/* right */}
              <div className='w-1/3 bg-red-200'>
                {/* job title */}
                <div className='bg-green-400 p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job desc */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold p-3'>Jan 2024 - present</div>
                {/* job company */}
                <div className='p-3 text-sm rounded bg-green-400 font-semibold w-fit'>PT. TONGDA INFORMATION INDONESIA</div>
              </div>
            </div>
            <div className='flex justify-between h-48'>
              {/* Left */}
              <div className='w-1/3 bg-red-200'>
                {/* job title */}
                <div className='bg-green-400 p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Javascript Engineer</div>
                {/* job desc */}
                <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold p-3'>Jan 2024 - present</div>
                {/* job company */}
                <div className='p-3 text-sm rounded bg-green-400 font-semibold w-fit'>PT. TONGDA INFORMATION INDONESIA</div>
              </div>
              {/* center */}
              <div className='w-1/4'>
              {/* line */}
              <div className='w-1 h-full bg-gray-600 rounded relative'>
                {/* circle line */}
                <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
              </div>
              </div>
              {/* right */}
              <div className='w-1/3'>
              </div>
            </div>
          </div>
        </div>
          
        </div>
        {/* SVG container */}
        <div className='hidden lg:block w-1/3 xl:1/2'>
        <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
      </motion.div>
  )
}

export default AboutPage