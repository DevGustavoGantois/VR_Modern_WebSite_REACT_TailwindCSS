//import icons
import { IoClose } from 'react-icons/io5';

export function NavMobile({setNavMobile}) {
    return (
        <nav className='lg:hidden bg-[#251f3f] w-full h-full z-50'>
            <IoClose onClick={() => setNavMobile(false)} className='text-3xl absolute left-4 top-6 cursor-pointer'/>
            <ul className="flex flex-col items-center space-y-8 h-full justify-center font-secondary">
                <li className="text-lg"><a href="#">Home</a></li>
                <li className="text-lg"><a href="#Empresa">Empresa</a></li>
                <li className="text-lg"><a href="#Caracteristica">Características</a></li>
                <li className="btn"><a href="#Explore">Inscreva-se</a></li>
            </ul>
        </nav>
    )
}