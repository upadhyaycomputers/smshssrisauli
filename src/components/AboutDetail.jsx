import school from '../assets/images/school front.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function AboutDetail() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="max-w-7xl p-4 mt-4 mx-auto">
            <div className="w-full p-2 flex flex-col md:flex-row items-center">
                <div className="max-w-[400px]" data-aos="fade" data-aos-delay="50" data-aos-duration="500">
                    <img src={school} alt='School Image' className='w-full h-full object-contain' />
                </div>

                <div className='w-full flex flex-col p-4 gap-4' data-aos="fade" data-aos-delay="50" data-aos-duration="1000">
                    <div className='w-full p-2 flex flex-col items-center'>
                        <h1 className='primary-heading'> 
                            विद्यालय के बारे में
                        </h1>
                        <p className='text-center mt-2'>
                            विद्यालय की स्थापना दिनांक 16-03-2001 दिन शुक्रवार को की गई थी। विद्यालय ग्रामीण क्षेत्र में स्थित है। ग्रामीण स्तर पर छात्र/छात्रामों के लिए शिक्षा का अभाव था। ग्राम रिसौली में विद्यार्थियों को शिक्षा प्राप्त करने के लिए दूर जाना पड़ता था, लड़कियां अशिक्षित रह जाती थी इसको ध्यान में रखते हुए गाँव में एक विधालय की आवश्यकता हुई और विद्यालय की नींव रखी गई। विद्यालय को सत्र 2001-2002 में प्राथमिक स्तर की मान्यता प्राप्त हुई। विद्यालय लगातार शिक्षा क्षेत्र में प्रगतिशील रहा इसके बाद सन् 2008 में श्री महूँराम स्मारक पूर्व माध्यमिक विद्यालय रिसौली (बदायूँ) के नाम से मान्यता प्रदान हुई।  वर्ष 2023 विद्यालय को श्री महूराम स्मारक उच्चतर माध्यमिक विद्यालय रिसौली (बदायूँ) के नाम से विद्यालय को उच्चतर माध्यमिक स्तर की मान्यता प्राप्त हुई।
                        </p>
                    </div>

                    <div className='w-full p-2 flex flex-col items-center'>
                        <h1 className='primary-heading'> 
                            विद्यालय का उद्देश्य
                        </h1>
                        <p className='text-center mt-2'>
                            विद्यालय का उद्देश्य विद्यार्थियों को उत्कृष्ट शिक्षा प्रदान करना है। यहाँ के विशेषज्ञ शिक्षक और अध्यापक बच्चों को विभिन्न क्षेत्रों में निरंतर मार्गदर्शन और प्रेरणा प्रदान करते हैं। विद्यालय का मुख्य उद्देश्य है शिक्षा के माध्यम से विद्यार्थियों का संपूर्ण विकास सुनिश्चित करना।
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center'>
                <h1 className='primary-heading' data-aos="fade" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="0">
                    विद्यालय की विशेषताएं
                </h1>
                <div className='w-full mt-4 p-4 max-w-4xl' data-aos="fade" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="0">
                    <ul className='w-full list-disc grid grid-cols-3 gap-4'>
                        <li>
                            <h1>शिक्षा सहयोगी वातावरण</h1>
                        </li>
                        <li>
                            <h1>कर्मठ शिक्षक</h1>
                        </li>
                        <li>
                            <h1>विद्यार्थियों की सर्वांगीण विकास पर बल</h1>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}