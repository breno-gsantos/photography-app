'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/data';

const container = {
  hidden: {},
  show: {
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.6
      }
  }
}

export default function Home() {
  return (
    <motion.section variants={container} initial='hidden' whileInView='show' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center'>
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <motion.h1 variants={fadeIn('down', 0)} className='h1'>Photographer <br /> & film maker</motion.h1>
            <motion.p variants={fadeIn('down', 0)} className='text-2xl lg:text-4xl font-primary mb-4 lg:mb-12'>Santos, Brazil</motion.p>
            <motion.div variants={fadeIn('up', 0)}>
              <Button size='lg' className='px-10 py-6'>
                <Link href='/contact'>Hire Me</Link>
              </Button>
            </motion.div>
            
          </div>
          <div className='flex justify-end'>
            <motion.div variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.5}} className='relative lg:-right-40'>
              <Image src='/home/woman.png' alt='Woman' width={700} height={1030} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
