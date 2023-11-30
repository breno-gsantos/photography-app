import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center'>
          <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Photographer <br /> & film maker</h1>
            <p className='text-2xl lg:text-4xl font-primary mb-4 lg:mb-12'>Santos, Brazil</p>
            <Button size='lg' className='px-10 py-6'>
              <Link href='/contact'>Hire Me</Link>
            </Button>
          </div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <div className='relative lg:-right-40 overflow-hidden'>
              <Image src='/home/woman.png' alt='Woman' width={761} height={1030} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
