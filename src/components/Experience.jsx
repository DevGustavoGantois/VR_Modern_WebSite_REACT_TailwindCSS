//import images
import img1 from '../assets/img/exp-img1.png';
import img2 from '../assets/img/exp-img2.png';

export function Experience() {
    return (
        <section className="mb-12 lg:mb-24" id='Empresa'>
            <div className="container mx-auto">
                <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
                    <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
                        <div className='self-start' data-aos="fade-down" data-aos-offset="400">
                            <img src={img1} alt="" />
                        </div>
                        <div className='self-end' data-aos="fade-up">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0' data-aos="fade-left" data-aos-offset="400">
                    <h2 className='text-3xl font-bold mb-6'>Nova experiência em jogos</h2>
                    <p className='font-secondary mb-6'>A exploração tridimensional visualmente tem 
                        transformado profundamente as experiências em jogos, criando mundos que vão além da tela, 
                        oferecendo uma imersão cada vez mais realista e envolvente. Nos jogos modernos, o uso de 
                        gráficos 3D, aliado a técnicas avançadas de renderização e física, permite que os jogadores se movam e 
                        interajam em ambientes que simulam a realidade ou criam universos completamente novos.</p>
                    <button className='btn'>Obtenha agora</button>
                </div>
                </div>
            </div>
        </section>
    )
}