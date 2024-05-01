import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <footer className="w-full bg-primary-color p-4 mt-4">
            <div className="max-w-7xl flex flex-col md:flex-row gap-4 p-2 justify-around items-center">
                <div className="flex items-center justify-center">
                    <h1 className="text-white text-2xl font-black text-center">
                        Shree Mahunram Smarak H.S. School
                    </h1>
                </div>

                <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
                    <h1 className="text-white text-xl font-bold">
                        Village - Risauli
                    </h1>
                    <p className="text-white text-md text-center">
                        Budaun, U.P. <br />
                        243633 <br />
                    </p>
                    <p className="text-white text-md">
                        97196 33243
                    </p>
                </div>

                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-white text-xl font-bold">
                        Quick Links
                    </h1>
                    <ul className="text-white text-md list-none flex flex-col gap-2">
                        <li>
                            <Link to='/about-us' onClick={() => window.scroll(0,0)}>About</Link>
                        </li>
                        <li>
                            <Link to='/teachers' onClick={() => window.scroll(0,0)}>Teachers</Link>
                        </li>
                        <li>
                            <Link to='/admissions' onClick={() => window.scroll(0,0)}>Admissions</Link>
                        </li>
                        <li>
                            <Link to='/gallery' onClick={() => window.scroll(0,0)}>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/contact-us' onClick={() => window.scroll(0,0)}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="w-full bg-white p-2">
            <p className="text-black text-md text-center">
                &copy; 2024 Shree Mahunram Smarak H.S. School. Created and Managed by <a href="https://www.facebook.com/upadhyaycomputers/" className="text-primary-color">Upadhyay Computers.</a>
            </p>
        </div>
    </>
  )
}
