import principal from '../assets/images/principal.jpeg';
import manager from '../assets/images/manager.jpeg';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function PMMessage() {
    useEffect(() => {
        Aos.init()
    }, [])

  return (
    <div className="w-full flex flex-col mt-4 p-4 gap-4">
        <div className="max-w-7xl flex flex-col md:flex-row items-center md:justify-around">
            <div className='max-w-[250px]' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <img src={principal} alt="Principal's Image" className="w-full h-full object-contain" />
            </div>
            <div className='flex flex-col justify-center max-w-[600px] p-2 gap-4' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className="text-2xl font-black text-center">प्रधानाचार्य का सन्देश</h1>
                <p className="text-justify">शिक्षा जीवन का प्रकाश होती है| शिक्षा के ही माध्यम से हम एक प्रगितिशील जीवन जी सकते हैं व राष्ट्र की सेवा कर सकते हैं| इसीलिए विद्यालय प्रयास करता है कि हम विद्यार्थियों को निरंतर उच्चतम शिक्षा प्रदान करें| </p>
            </div>
        </div>

        <div className="max-w-7xl flex flex-col md:flex-row items-center md:justify-around">
            <div className='max-w-[250px] md:order-2' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <img src={manager} alt="Managers's Image" className="w-full h-full object-contain" />
            </div>
            <div className='flex flex-col justify-center max-w-[600px] p-2 gap-4 md:order-1' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <h1 className="text-2xl font-black text-center">प्रबंधक का सन्देश</h1>
                <p className="text-justify">बच्चे राष्ट्र का भविष्य होते हैं और केवल श्रेष्ठतम शिक्षा के माध्यम से ही वे एक ऐसे व्यक्ति बन सकते हैं जो समाज व राष्ट्र की सेवा कर सकें| इसीलिए विद्यालय परिवार प्रयासरत है कि हम अपने विद्यार्थियों में ऐसे गुण विकसित करें जिससे वे अच्छे समाजसेवक व राष्ट्रसेवक बन सकें|</p>
            </div>
        </div>
    </div>
  )
}
