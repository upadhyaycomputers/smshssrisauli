import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

import assembly1 from '../assets/images/assembly1.jpeg'
import assembly2 from '../assets/images/assembly2.jpeg'
import class1 from '../assets/images/class1.jpeg'
import class2 from '../assets/images/class2.jpeg'
import class3 from '../assets/images/class3.jpeg'
import schoolFront from '../assets/images/school front.jpeg'


const images = [
    {
        src: assembly1,
        alt: 'Assembly 1'
    },
    {
        src: assembly2,
        alt: 'Assembly 2'
    },
    {
        src: class1,
        alt: 'Class 1'
    },
    {
        src: class2,
        alt: 'Class 2'
    },
    {
        src: class3,
        alt: 'Class 3'
    },
    {
        src: schoolFront,
        alt: 'School Image'
    },
]

export default function GalleryComp() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="w-full">
            <div className="bg-slate-300 p-4 min-h-28 flex justify-center items-center">
                <h1 className="text-5xl font-bold" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Gallery</h1>
            </div>

            <div className="max-w-7xl p-4 mt-8 flex flex-wrap mx-auto gap-6 justify-center">
                {images.map((image, index) => (
                    <div className="max-w-[350px] max-h-[350px]">
                        <img key={index} src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div> 
                ))}                                   
            </div>
        </div>
    )
}