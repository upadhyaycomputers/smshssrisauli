import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function ContactUs() {
    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <div className='w-full'>
        <div className="bg-slate-300 p-4 min-h-28 flex justify-center items-center">
                <h1 className="text-5xl font-bold" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Contact Us</h1>
        </div>

        <div className='w-full bg-primary-color flex flex-col items-center mt-8 px-8'>
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className='text-2xl text-white font-bold mt-8 mb-2'>
                    Village - Risauli
                </h1>
                <p className='text-xl text-white text-center'>
                    Budaun, UP <br />
                    243633
                </p>
            </div>
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className='text-2xl text-white font-bold mt-8 mb-2'>
                    E-MAIL US
                </h1>
                <p className='text-xl text-white'>
                    email@email.com
                </p>
            </div>
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className='text-2xl text-white font-bold mt-8 mb-2'>
                    CALL US
                </h1>
                <p className='text-xl text-white'>
                    97196 33243
                </p>
            </div>
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className='text-2xl text-white font-bold mt-8 mb-2'>
                    SCHOOL TIMING
                </h1>
                <p className='text-xl text-white mb-8'>
                    8:00 AM - 3:00 PM
                </p>
            </div>

        </div>

    </div>
  )
}
