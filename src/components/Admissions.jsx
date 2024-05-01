import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function AdmissionsComp() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="w-full ">
            <div className="bg-slate-300 p-4 min-h-28 flex justify-center items-center">
                <h1 className="text-5xl font-bold" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">Admissions</h1>
            </div>

            <div className="max-w-2xl flex flex-col gap-4 p-4 mx-auto" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className="text-3xl font-bold my-4 max-w-fit mx-auto">Get in Touch</h1>
                <div className="flex flex-col gap-4 p-4">
                    <div className="w-full flex justify-between items-center">
                        {/* <h1 className="text-xl font-bold">School's Contact No.</h1>
                        <h1 className="text-xl">99999 77777</h1> */}
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-xl font-bold">Principal's Contact No.</h1>
                        <h1 className="text-xl">97196 33243</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}