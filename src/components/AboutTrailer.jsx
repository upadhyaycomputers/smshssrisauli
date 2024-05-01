import { Link } from "react-router-dom";

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function AboutTrailer() {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className="w-full bg-primary-color mt-4">
      <div className='p-4 text-white flex flex-col items-center gap-4' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <h1 className="mt-2 text-2xl font-bold">विद्यालय विवरण</h1>
        <p className="mt-2 max-w-[800px] text-center">
          विद्यालय की स्थापना दिनांक 16-03-2001 दिन शुक्रवार को की गई थी। विद्यालय ग्रामीण क्षेत्र में स्थित है। विद्यालय लगातार शिक्षा क्षेत्र में प्रगतिशील रहा है| सन् 2008 में श्री महूँराम स्मारक पूर्व माध्यमिक विद्यालय रिसौली (बदायूँ) के नाम से मान्यता प्रदान हुई।  वर्ष 2023 विद्यालय को श्री महूराम स्मारक उच्चतर माध्यमिक विद्यालय रिसौली (बदायूँ) के नाम से विद्यालय को उच्चतर माध्यमिक स्तर की मान्यता प्राप्त हुई।
        </p>
        <button className="mt-2 mb-2 py-2 px-4 bg-secondary-color">
            <Link to='/about-us' onClick={() => window.scroll(0,0)}>विस्तृत जानकारी</Link>
        </button>
      </div>
    </div>
  )
}
