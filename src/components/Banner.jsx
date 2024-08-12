//import components
import { Users } from './Users';
//import image
import img from '../assets/img/banner-img.png';

export function Banner() {
    return (
        <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left'>
            <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <div>
                        <h1 className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug' data-aos="fade-down" data-aos-delay="500">Vamos explorar<br /> Visualmente o Tridimensional</h1>
                        <p className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0' data-aos="fade-down" data-aos-delay="600">
                        Explorar o tridimensional visualmente é uma jornada fascinante pela profundidade, forma e perspectiva que nos leva além das limitações do plano bidimensional. Ao adicionar a terceira dimensão, o espaço ganha vida, permitindo uma percepção mais rica e realista dos objetos e cenários ao nosso redor.
                        </p>
                        <div className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start' data-aos="fade-down" data-aos-delay="700">
                            <button className='btn'>Obtenha agora</button>
                            <a className='border-b-2 border-transparent hover:border-white transition ease-out' href="#">Explorar dispositivo</a>
                        </div>
                        <Users/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                    <img src={img} alt="" /></div> 
            </div>
        </div>
        </section>
    )
}