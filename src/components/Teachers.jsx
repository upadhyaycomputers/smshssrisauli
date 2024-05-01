import {teachers} from '../constants'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function TeachersComp() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="w-full">
            <div className="bg-slate-300 p-4 min-h-28 flex justify-center items-center">
                <h1 className="text-5xl font-bold" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">OUR TEACHERS</h1>
            </div>

            <div className="max-w-7xl p-4 mt-8 flex flex-wrap mx-auto justify-center gap-4">
                {teachers.map((teacher, index) => (
                    <div key={index} className='flex flex-col max-w-[400px] md:min-w-[250px] flex-wrap p-2 items-center mb-10' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                        <h1 className='text-[1.25rem] mb-1'>{teacher.name}</h1>
                        <h4 className='text-[1rem]'>{teacher.role}</h4>
                        <h4 className='text-[1rem]'>{teacher.cont_no}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}